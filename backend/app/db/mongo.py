from __future__ import annotations

import logging
import sys
from typing import Any

from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase

from app.config import Settings, get_settings

logger = logging.getLogger(__name__)

_client: AsyncIOMotorClient | None = None
_db: AsyncIOMotorDatabase | None = None

FORM_SUBMISSIONS = "form_submissions"
BLOG_POSTS = "blog_posts"
ANIMAL_WELFARE_PARTNERS = "animal_welfare_partners"


async def connect_mongo(settings: Settings | None = None) -> AsyncIOMotorDatabase:
    global _client, _db
    settings = settings or get_settings()
    uri = settings.mongodb_uri
    if not uri:
        logger.error("MONGODB_URI (or MONGO_URI) is required")
        sys.exit(1)

    _client = AsyncIOMotorClient(uri, serverSelectionTimeoutMS=8000)
    try:
        await _client.admin.command("ping")
    except Exception as exc:  # noqa: BLE001
        logger.error("MongoDB connection failed: %s", exc)
        sys.exit(1)

    _db = _client[settings.MONGODB_DB_NAME]
    await ensure_indexes(_db)
    logger.info("Connected to MongoDB db=%s", settings.MONGODB_DB_NAME)
    return _db


async def ensure_indexes(db: AsyncIOMotorDatabase) -> None:
    await db[FORM_SUBMISSIONS].create_index([("createdAt", -1)])
    await db[FORM_SUBMISSIONS].create_index([("formType", 1), ("createdAt", -1)])
    await db[BLOG_POSTS].create_index("slug", unique=True)
    await db[ANIMAL_WELFARE_PARTNERS].create_index("id", unique=True)
    await db[ANIMAL_WELFARE_PARTNERS].create_index(
        [("citySlug", 1), ("sortOrder", 1)]
    )


async def close_mongo() -> None:
    global _client, _db
    if _client is not None:
        _client.close()
        logger.info("MongoDB connection closed")
    _client = None
    _db = None


def get_db() -> AsyncIOMotorDatabase:
    if _db is None:
        raise RuntimeError("MongoDB is not connected")
    return _db


def sanitize_doc(
    doc: dict[str, Any] | None, *, drop: set[str] | None = None
) -> dict[str, Any] | None:
    if not doc:
        return None
    hidden = {"_id", *(drop or set())}
    return {k: v for k, v in doc.items() if k not in hidden}
