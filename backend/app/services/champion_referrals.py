from __future__ import annotations

import re
import secrets
from datetime import datetime, timezone
from typing import Any

from bson import ObjectId

from app.db.mongo import (
    CHAMPION_INVITES,
    CHAMPION_REFERRAL_EVENTS,
    get_db,
)

INVITE_CODE_RE = re.compile(r"^TGC[A-F0-9]{8}$")


def new_invite_code() -> str:
    return f"TGC{secrets.token_hex(4).upper()}"


def normalize_invite_code(raw: str | None) -> str | None:
    code = (raw or "").strip().upper()
    if not code or not INVITE_CODE_RE.match(code):
        return None
    return code


async def create_champion_invite(
    *,
    invite_code: str,
    owner_submission_id: ObjectId,
    owner_name: str,
    owner_email: str,
) -> None:
    now = datetime.now(timezone.utc)
    await get_db()[CHAMPION_INVITES].insert_one(
        {
            "inviteCode": invite_code,
            "ownerSubmissionId": owner_submission_id,
            "ownerName": owner_name,
            "ownerEmail": owner_email.lower().strip(),
            "createdAt": now,
            "updatedAt": now,
        }
    )


async def find_invite(invite_code: str) -> dict[str, Any] | None:
    return await get_db()[CHAMPION_INVITES].find_one({"inviteCode": invite_code})


async def record_referral_open(
    *, invite_code: str, visitor_key: str
) -> dict[str, Any]:
    """Record that someone opened a champion invite link (not yet submitted)."""
    invite = await find_invite(invite_code)
    if not invite:
        return {"recorded": False, "reason": "unknown_invite"}

    now = datetime.now(timezone.utc)
    collection = get_db()[CHAMPION_REFERRAL_EVENTS]
    existing = await collection.find_one(
        {"inviteCode": invite_code, "visitorKey": visitor_key}
    )
    if existing:
        return {
            "recorded": True,
            "status": existing.get("status", "opened"),
            "alreadyTracked": True,
        }

    await collection.insert_one(
        {
            "inviteCode": invite_code,
            "visitorKey": visitor_key,
            "status": "opened",
            "openedAt": now,
            "submittedAt": None,
            "referredSubmissionId": None,
            "referredEmail": None,
            "referredName": None,
            "ownerSubmissionId": invite["ownerSubmissionId"],
            "ownerEmail": invite["ownerEmail"],
            "ownerName": invite["ownerName"],
            "createdAt": now,
            "updatedAt": now,
        }
    )
    return {"recorded": True, "status": "opened", "alreadyTracked": False}


async def mark_referral_submitted(
    *,
    invite_code: str,
    visitor_key: str | None,
    referred_submission_id: ObjectId,
    referred_name: str,
    referred_email: str,
) -> None:
    """Mark that the referred visitor completed the champion form."""
    now = datetime.now(timezone.utc)
    collection = get_db()[CHAMPION_REFERRAL_EVENTS]
    email = referred_email.lower().strip()

    query: dict[str, Any]
    if visitor_key:
        query = {"inviteCode": invite_code, "visitorKey": visitor_key}
    else:
        query = {"inviteCode": invite_code, "visitorKey": f"email:{email}"}

    result = await collection.update_one(
        query,
        {
            "$set": {
                "status": "submitted",
                "submittedAt": now,
                "referredSubmissionId": referred_submission_id,
                "referredEmail": email,
                "referredName": referred_name,
                "updatedAt": now,
            },
            "$setOnInsert": {
                "inviteCode": invite_code,
                "visitorKey": query["visitorKey"],
                "openedAt": now,
                "ownerSubmissionId": None,
                "ownerEmail": None,
                "ownerName": None,
                "createdAt": now,
            },
        },
        upsert=True,
    )

    # Attach owner info if this was an upsert without a prior open
    if result.upserted_id is not None:
        invite = await find_invite(invite_code)
        if invite:
            await collection.update_one(
                {"_id": result.upserted_id},
                {
                    "$set": {
                        "ownerSubmissionId": invite["ownerSubmissionId"],
                        "ownerEmail": invite["ownerEmail"],
                        "ownerName": invite["ownerName"],
                    }
                },
            )


async def invite_stats(invite_code: str) -> dict[str, int]:
    collection = get_db()[CHAMPION_REFERRAL_EVENTS]
    opened = await collection.count_documents(
        {"inviteCode": invite_code, "status": "opened"}
    )
    submitted = await collection.count_documents(
        {"inviteCode": invite_code, "status": "submitted"}
    )
    return {
        "opened": opened,
        "submitted": submitted,
        "totalVisitors": opened + submitted,
    }
