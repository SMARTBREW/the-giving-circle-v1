from __future__ import annotations

import logging
import sys
from contextlib import asynccontextmanager
from typing import Any

from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException
from starlette.middleware.base import BaseHTTPMiddleware

from app.config import get_settings
from app.db.mongo import close_mongo, connect_mongo
from app.email.smtp import verify_smtp
from app.middleware.rate_limit import RateLimitMiddleware, SlidingWindowLimiter
from app.routers import animal_welfare, blog, client_logs, forms, health
from app.services import animal_welfare_store, blog_store

settings = get_settings()


def configure_logging() -> None:
    level = logging.DEBUG if not settings.is_production else logging.INFO
    logging.basicConfig(
        level=level,
        format=(
            "%(asctime)s %(levelname)s [%(name)s] %(message)s"
            if not settings.is_production
            else "%(asctime)s %(levelname)s %(message)s"
        ),
        stream=sys.stdout,
    )


configure_logging()
logger = logging.getLogger("tgc.api")


class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    """Helmet-like defaults without CSP lock for a public JSON API."""

    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        response.headers.setdefault("X-Content-Type-Options", "nosniff")
        response.headers.setdefault("X-Frame-Options", "DENY")
        response.headers.setdefault(
            "Referrer-Policy", "strict-origin-when-cross-origin"
        )
        response.headers.setdefault(
            "Permissions-Policy", "camera=(), microphone=(), geolocation=()"
        )
        if settings.is_production:
            response.headers.setdefault(
                "Strict-Transport-Security",
                "max-age=63072000; includeSubDomains; preload",
            )
        return response


class BodySizeLimitMiddleware(BaseHTTPMiddleware):
    """Reject bodies over ~10MB via Content-Length and by counting streamed chunks."""

    max_bytes = 10 * 1024 * 1024

    async def dispatch(self, request: Request, call_next):
        cl = request.headers.get("content-length")
        if cl and cl.isdigit() and int(cl) > self.max_bytes:
            return JSONResponse(
                status_code=413,
                content={"success": False, "message": "Request body too large"},
            )

        received = 0
        original_receive = request.receive

        async def receive_limited():
            nonlocal received
            message = await original_receive()
            if message["type"] == "http.request":
                received += len(message.get("body", b"") or b"")
                if received > self.max_bytes:
                    raise _BodyTooLarge()
            return message

        request = Request(request.scope, receive_limited)
        try:
            return await call_next(request)
        except _BodyTooLarge:
            return JSONResponse(
                status_code=413,
                content={"success": False, "message": "Request body too large"},
            )


class _BodyTooLarge(Exception):
    pass


@asynccontextmanager
async def lifespan(_app: FastAPI):
    await connect_mongo(settings)
    await verify_smtp(settings)
    try:
        blog_n = await blog_store.seed_blog_posts_if_empty()
        aw_n = await animal_welfare_store.seed_animal_welfare_if_empty()
        if blog_n or aw_n:
            logger.info("Startup seed blog=%s animal_welfare=%s", blog_n, aw_n)
    except Exception:  # noqa: BLE001
        logger.exception("Startup seed failed")
    yield
    await close_mongo()


app = FastAPI(
    title="The Giving Circle API",
    version="1.0.0",
    lifespan=lifespan,
    docs_url=None if settings.is_production else "/docs",
    redoc_url=None if settings.is_production else "/redoc",
)

app.add_middleware(SecurityHeadersMiddleware)
app.add_middleware(BodySizeLimitMiddleware)
app.add_middleware(
    RateLimitMiddleware,
    global_limiter=SlidingWindowLimiter(max_requests=100, window_seconds=15 * 60),
    form_limiter=SlidingWindowLimiter(max_requests=100, window_seconds=60 * 60),
    trust_proxy_hops=settings.TRUST_PROXY_HOPS,
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(forms.router)
app.include_router(client_logs.router)
app.include_router(blog.router)
app.include_router(animal_welfare.router)


@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(_request: Request, exc: StarletteHTTPException):
    detail = exc.detail
    if isinstance(detail, dict):
        return JSONResponse(status_code=exc.status_code, content=detail)
    return JSONResponse(
        status_code=exc.status_code,
        content={"success": False, "message": str(detail)},
    )


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(_request: Request, exc: RequestValidationError):
    errors = exc.errors()
    message = "Validation failed"
    if errors:
        loc = ".".join(str(p) for p in errors[0].get("loc", []) if p != "body")
        msg = errors[0].get("msg", message)
        message = f"{loc}: {msg}" if loc else str(msg)
    return JSONResponse(
        status_code=400,
        content={"success": False, "message": message},
    )


@app.exception_handler(Exception)
async def unhandled_exception_handler(_request: Request, exc: Exception):
    logger.exception("Unhandled error: %s", exc)
    payload: dict[str, Any] = {
        "success": False,
        "message": "Internal server error",
    }
    if not settings.is_production:
        payload["error"] = str(exc)
    return JSONResponse(status_code=500, content=payload)


@app.api_route("/{full_path:path}", methods=["GET", "POST", "PUT", "PATCH", "DELETE"])
async def not_found(full_path: str, request: Request):
    return JSONResponse(
        status_code=404,
        content={
            "success": False,
            "message": "Endpoint not found",
            "path": request.url.path,
        },
    )
