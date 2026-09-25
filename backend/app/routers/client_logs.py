from __future__ import annotations

import logging
from typing import Any, Literal

from fastapi import APIRouter
from pydantic import BaseModel, Field

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/client-logs", tags=["client-logs"])


class ClientLogBody(BaseModel):
    level: Literal["debug", "info", "warn", "error"] = "error"
    message: str = Field(min_length=1, max_length=2000)
    data: dict[str, Any] | None = None
    digest: str | None = Field(default=None, max_length=200)
    url: str | None = Field(default=None, max_length=2000)
    userAgent: str | None = Field(default=None, max_length=500)
    timestamp: str | None = Field(default=None, max_length=64)
    stack: str | None = Field(default=None, max_length=8000)


@router.post("")
@router.post("/")
async def ingest_client_log(body: ClientLogBody) -> dict[str, Any]:
    """Accept browser error/warn logs from the static frontend."""
    log_fn = logger.error if body.level == "error" else logger.warning
    if body.level in ("debug", "info"):
        log_fn = logger.info

    log_fn(
        "client_log level=%s message=%s url=%s digest=%s data=%s",
        body.level,
        body.message[:500],
        (body.url or "")[:300],
        body.digest or "",
        body.data or {},
    )
    if body.stack:
        logger.debug("client_log stack=%s", body.stack[:2000])

    return {"success": True, "message": "Logged"}
