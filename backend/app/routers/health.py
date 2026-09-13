from __future__ import annotations

from datetime import datetime, timezone

from fastapi import APIRouter
from fastapi.responses import PlainTextResponse

from app.config import get_settings

router = APIRouter(tags=["health"])


def _health_payload() -> dict:
    settings = get_settings()
    return {
        "status": "ok",
        "message": "The Giving Circle API is running",
        "timestamp": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
        "environment": settings.environment,
    }


@router.get("/")
@router.get("/health")
@router.get("/api/health")
async def health() -> dict:
    return _health_payload()


@router.get("/robots.txt", response_class=PlainTextResponse)
async def robots_txt() -> str:
    return "User-agent: *\nDisallow: /\n"
