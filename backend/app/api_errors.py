from __future__ import annotations

from typing import Any

from fastapi import HTTPException

from app.config import get_settings


def api_error(
    status_code: int,
    message: str,
    *,
    error: object | None = None,
    **extra: Any,
) -> HTTPException:
    """Build a `{ success, message, ... }` HTTPException.

    `error` is included only outside production (same contract as the global 500 handler).
    """
    detail: dict[str, Any] = {"success": False, "message": message, **extra}
    if error is not None and not get_settings().is_production:
        detail["error"] = str(error)
    return HTTPException(status_code=status_code, detail=detail)
