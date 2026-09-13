from __future__ import annotations

import json
import logging
from datetime import date, datetime, timezone
from pathlib import Path
from typing import Any

from app.db.mongo import BLOG_POSTS, get_db, sanitize_doc

logger = logging.getLogger(__name__)

DATA_DIR = Path(__file__).resolve().parents[2] / "data"
BLOG_SEED_PATH = DATA_DIR / "blog-posts.json"


def sanitize_post(doc: dict[str, Any] | None) -> dict[str, Any] | None:
    return sanitize_doc(doc, drop={"createdAt", "updatedAt"})


async def seed_blog_posts_if_empty() -> int:
    col = get_db()[BLOG_POSTS]
    count = await col.count_documents({})
    if count > 0:
        return 0
    if not BLOG_SEED_PATH.exists():
        logger.warning("Blog seed file missing: %s", BLOG_SEED_PATH)
        return 0
    posts = json.loads(BLOG_SEED_PATH.read_text(encoding="utf-8"))
    if not isinstance(posts, list) or not posts:
        return 0
    now = datetime.now(timezone.utc)
    docs = []
    for post in posts:
        if not isinstance(post, dict) or not post.get("slug"):
            continue
        doc = dict(post)
        doc["createdAt"] = now
        doc["updatedAt"] = now
        docs.append(doc)
    if docs:
        await col.insert_many(docs)
    logger.info("Seeded %s blog posts", len(docs))
    return len(docs)


async def list_posts() -> list[dict[str, Any]]:
    cursor = get_db()[BLOG_POSTS].find({}).sort("datePublished", -1)
    return [sanitize_post(doc) for doc in await cursor.to_list(length=500) if sanitize_post(doc)]


async def get_post_by_slug(slug: str) -> dict[str, Any] | None:
    doc = await get_db()[BLOG_POSTS].find_one({"slug": slug})
    return sanitize_post(doc)


async def upsert_posts(posts: list[dict[str, Any]]) -> int:
    col = get_db()[BLOG_POSTS]
    updated = 0
    now = datetime.now(timezone.utc)
    for post in posts:
        slug = post.get("slug")
        if not slug:
            continue
        payload = dict(post)
        payload["updatedAt"] = now
        payload.setdefault("dateModified", date.today().isoformat())
        await col.update_one(
            {"slug": slug},
            {"$set": payload, "$setOnInsert": {"createdAt": now}},
            upsert=True,
        )
        updated += 1
    return updated


async def import_from_json_file(path: Path | None = None) -> int:
    seed_path = path or BLOG_SEED_PATH
    posts = json.loads(seed_path.read_text(encoding="utf-8"))
    if not isinstance(posts, list):
        raise ValueError("blog-posts.json must be an array")
    return await upsert_posts(posts)
