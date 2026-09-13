from __future__ import annotations

import json
import logging
import re
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from pymongo import ReturnDocument

from app.db.mongo import ANIMAL_WELFARE_PARTNERS, get_db, sanitize_doc

logger = logging.getLogger(__name__)

DATA_DIR = Path(__file__).resolve().parents[2] / "data"
SEED_PATH = DATA_DIR / "animal-welfare-partners.json"

VALID_CITY_SLUGS = [
    "andhra-pradesh",
    "arunachal-pradesh",
    "bihar",
    "chandigarh",
    "delhi-ncr",
    "goa",
    "haryana",
    "pune",
    "karnataka",
    "kerala",
    "mumbai",
    "rajasthan",
    "tamil-nadu",
    "telangana",
    "pan-india",
]


def sanitize_partner(doc: dict[str, Any] | None) -> dict[str, Any] | None:
    clean = sanitize_doc(doc)
    if not clean:
        return None
    clean.setdefault("address", "")
    clean.setdefault("email", "")
    return clean


async def seed_animal_welfare_if_empty() -> int:
    col = get_db()[ANIMAL_WELFARE_PARTNERS]
    count = await col.count_documents({})
    if count > 0:
        return 0
    return await seed_from_file(force=False)


async def seed_from_file(*, force: bool = False, city_slug: str | None = None) -> int:
    if not SEED_PATH.exists():
        logger.warning("Animal welfare seed missing: %s", SEED_PATH)
        return 0
    partners = json.loads(SEED_PATH.read_text(encoding="utf-8"))
    if not isinstance(partners, list):
        raise ValueError("animal-welfare-partners.json must be an array")

    col = get_db()[ANIMAL_WELFARE_PARTNERS]
    if force and city_slug:
        await col.delete_many({"citySlug": city_slug})
    elif force and not city_slug:
        await col.delete_many({})

    now = datetime.now(timezone.utc)
    docs: list[dict[str, Any]] = []
    for row in partners:
        if not isinstance(row, dict):
            continue
        slug = row.get("citySlug")
        if city_slug and slug != city_slug:
            continue
        if slug not in VALID_CITY_SLUGS:
            continue
        doc = {
            "id": row.get("id") or str(uuid.uuid4()),
            "citySlug": slug,
            "person": row.get("person") or "",
            "organisation": row.get("organisation") or "",
            "contact": str(row.get("contact") or ""),
            "city": row.get("city") or "",
            "area": row.get("area") or "",
            "address": row.get("address") or "",
            "email": row.get("email") or "",
            "services": row.get("services") or "",
            "sortOrder": int(row.get("sortOrder") or 0),
            "createdAt": row.get("createdAt") or now,
            "updatedAt": now,
        }
        docs.append(doc)

    if not docs:
        return 0

    # upsert by id
    upserted = 0
    for doc in docs:
        result = await col.update_one(
            {"id": doc["id"]},
            {"$set": doc, "$setOnInsert": {"createdAt": doc["createdAt"]}},
            upsert=True,
        )
        if result.upserted_id or result.modified_count:
            upserted += 1
    logger.info("Animal welfare seed upserted≈%s (rows=%s)", upserted, len(docs))
    return len(docs)


async def list_cities() -> list[dict[str, Any]]:
    pipeline = [
        {"$group": {"_id": "$citySlug", "count": {"$sum": 1}}},
        {"$project": {"citySlug": "$_id", "count": 1, "_id": 0}},
    ]
    rows = await get_db()[ANIMAL_WELFARE_PARTNERS].aggregate(pipeline).to_list(100)
    order = {slug: i for i, slug in enumerate(VALID_CITY_SLUGS)}
    rows.sort(key=lambda r: order.get(r.get("citySlug", ""), 999))
    return rows


async def list_partners(
    city_slug: str,
    *,
    page: int = 1,
    limit: int = 20,
    q: str | None = None,
) -> dict[str, Any]:
    page = max(page, 1)
    limit = min(max(limit, 1), 100)
    query: dict[str, Any] = {"citySlug": city_slug}
    if q and q.strip():
        rx = re.compile(re.escape(q.strip()), re.IGNORECASE)
        query["$or"] = [
            {"person": rx},
            {"organisation": rx},
            {"area": rx},
            {"services": rx},
            {"city": rx},
            {"contact": rx},
        ]
    col = get_db()[ANIMAL_WELFARE_PARTNERS]
    total = await col.count_documents(query)
    cursor = (
        col.find(query)
        .sort([("sortOrder", 1), ("person", 1)])
        .skip((page - 1) * limit)
        .limit(limit)
    )
    partners = [
        sanitize_partner(doc)
        for doc in await cursor.to_list(length=limit)
        if sanitize_partner(doc)
    ]
    total_pages = (total + limit - 1) // limit if total else 0
    return {
        "partners": partners,
        "pagination": {
            "page": page,
            "limit": limit,
            "total": total,
            "totalPages": total_pages,
        },
    }


async def get_partner(partner_id: str) -> dict[str, Any] | None:
    doc = await get_db()[ANIMAL_WELFARE_PARTNERS].find_one({"id": partner_id})
    return sanitize_partner(doc)


async def create_partner(payload: dict[str, Any]) -> dict[str, Any]:
    now = datetime.now(timezone.utc)
    doc = {
        "id": payload.get("id") or str(uuid.uuid4()),
        "citySlug": payload["citySlug"],
        "person": payload.get("person") or "",
        "organisation": payload.get("organisation") or "",
        "contact": str(payload.get("contact") or ""),
        "city": payload.get("city") or "",
        "area": payload.get("area") or "",
        "address": payload.get("address") or "",
        "email": payload.get("email") or "",
        "services": payload.get("services") or "",
        "sortOrder": int(payload.get("sortOrder") or 0),
        "createdAt": now,
        "updatedAt": now,
    }
    await get_db()[ANIMAL_WELFARE_PARTNERS].insert_one(doc)
    return sanitize_partner(doc) or doc


async def update_partner(partner_id: str, payload: dict[str, Any]) -> dict[str, Any] | None:
    allowed = {
        "citySlug",
        "person",
        "organisation",
        "contact",
        "city",
        "area",
        "address",
        "email",
        "services",
        "sortOrder",
    }
    updates = {k: v for k, v in payload.items() if k in allowed and v is not None}
    if "sortOrder" in updates:
        updates["sortOrder"] = int(updates["sortOrder"])
    if not updates:
        return await get_partner(partner_id)
    updates["updatedAt"] = datetime.now(timezone.utc)
    result = await get_db()[ANIMAL_WELFARE_PARTNERS].find_one_and_update(
        {"id": partner_id},
        {"$set": updates},
        return_document=ReturnDocument.AFTER,
    )
    return sanitize_partner(result)


async def delete_partner(partner_id: str) -> bool:
    result = await get_db()[ANIMAL_WELFARE_PARTNERS].delete_one({"id": partner_id})
    return result.deleted_count > 0
