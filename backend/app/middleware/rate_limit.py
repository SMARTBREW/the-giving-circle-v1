from __future__ import annotations

import time
from collections import defaultdict, deque
from threading import Lock
from typing import Callable

from fastapi import Request, Response
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware


class SlidingWindowLimiter:
    """In-memory sliding-window rate limiter (per key)."""

    def __init__(self, max_requests: int, window_seconds: int) -> None:
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self._hits: dict[str, deque[float]] = defaultdict(deque)
        self._lock = Lock()

    def hit(self, key: str) -> tuple[bool, int]:
        now = time.monotonic()
        cutoff = now - self.window_seconds
        with self._lock:
            q = self._hits[key]
            while q and q[0] < cutoff:
                q.popleft()
            if len(q) >= self.max_requests:
                retry = int(self.window_seconds - (now - q[0])) + 1
                return False, max(retry, 1)
            q.append(now)
            return True, 0


def client_ip(request: Request, trust_proxy_hops: int = 1) -> str:
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded and trust_proxy_hops > 0:
        parts = [p.strip() for p in forwarded.split(",") if p.strip()]
        if parts:
            # rightmost-trusted hop style: take from the end
            idx = max(len(parts) - trust_proxy_hops, 0)
            return parts[idx]
    if request.client and request.client.host:
        return request.client.host
    return "unknown"


class RateLimitMiddleware(BaseHTTPMiddleware):
    def __init__(
        self,
        app,
        *,
        global_limiter: SlidingWindowLimiter,
        form_limiter: SlidingWindowLimiter,
        trust_proxy_hops: int = 1,
    ) -> None:
        super().__init__(app)
        self.global_limiter = global_limiter
        self.form_limiter = form_limiter
        self.trust_proxy_hops = trust_proxy_hops

    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        path = request.url.path
        if not path.startswith("/api"):
            return await call_next(request)

        ip = client_ip(request, self.trust_proxy_hops)
        ok, retry = self.global_limiter.hit(f"global:{ip}")
        if not ok:
            return JSONResponse(
                status_code=429,
                content={
                    "success": False,
                    "message": "Too many requests. Please try again later.",
                    "retryAfterSeconds": retry,
                },
            )

        if path.startswith("/api/submit/") and request.method.upper() == "POST":
            ok_form, retry_form = self.form_limiter.hit(f"form:{ip}")
            if not ok_form:
                return JSONResponse(
                    status_code=429,
                    content={
                        "success": False,
                        "message": "Too many form submissions from this IP. Please try again in an hour.",
                        "retryAfterSeconds": retry_form,
                    },
                )

        if path.startswith("/api/client-logs") and request.method.upper() == "POST":
            ok_logs, retry_logs = self.form_limiter.hit(f"logs:{ip}")
            if not ok_logs:
                return JSONResponse(
                    status_code=429,
                    content={
                        "success": False,
                        "message": "Too many log events from this IP.",
                        "retryAfterSeconds": retry_logs,
                    },
                )

        return await call_next(request)
