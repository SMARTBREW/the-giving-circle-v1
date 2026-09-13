from __future__ import annotations

from datetime import datetime, timezone
from typing import Any

from bson import ObjectId

from app.db.mongo import FORM_SUBMISSIONS, get_db


async def insert_form_submission(
    *, form_type: str, payload: dict[str, Any]
) -> ObjectId:
    now = datetime.now(timezone.utc)
    doc = {
        "formType": form_type,
        "payload": payload,
        "emailSent": False,
        "emailError": None,
        "createdAt": now,
        "updatedAt": now,
    }
    result = await get_db()[FORM_SUBMISSIONS].insert_one(doc)
    return result.inserted_id


async def mark_email_result(
    submission_id: ObjectId, *, sent: bool, error: str | None = None
) -> None:
    await get_db()[FORM_SUBMISSIONS].update_one(
        {"_id": submission_id},
        {
            "$set": {
                "emailSent": sent,
                "emailError": error,
                "updatedAt": datetime.now(timezone.utc),
            }
        },
    )
