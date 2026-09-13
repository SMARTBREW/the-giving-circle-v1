from __future__ import annotations

import logging
from typing import Any

from fastapi import APIRouter, Header
from pydantic import BaseModel

from app.api_errors import api_error
from app.config import get_settings
from app.services import blog_store
from app.services.openai_blog import refresh_blog_post

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/blog", tags=["blog"])


def _assert_blog_secret(
    *,
    header_secret: str | None,
    body_secret: str | None,
) -> None:
    settings = get_settings()
    expected = (settings.BLOG_UPDATE_SECRET or "").strip()
    provided = (header_secret or body_secret or "").strip()
    if not expected:
        if settings.is_production:
            raise api_error(403, "Blog update secret is not configured")
        return
    if provided != expected:
        raise api_error(401, "Unauthorized")


@router.get("/posts")
async def list_posts() -> dict[str, Any]:
    posts = await blog_store.list_posts()
    return {"success": True, "posts": posts}


@router.get("/post/{slug}")
async def get_post(slug: str) -> dict[str, Any]:
    post = await blog_store.get_post_by_slug(slug)
    if not post:
        raise api_error(404, "Post not found")
    return {"success": True, "post": post}


class BlogGenerateBody(BaseModel):
    slug: str | None = None
    updatePurpose: str = "weekly"
    secret: str | None = None


@router.post("/generate")
async def generate_posts(
    body: BlogGenerateBody,
    x_blog_update_secret: str | None = Header(default=None, alias="x-blog-update-secret"),
) -> dict[str, Any]:
    _assert_blog_secret(header_secret=x_blog_update_secret, body_secret=body.secret)

    if body.slug:
        existing = await blog_store.get_post_by_slug(body.slug)
        if not existing:
            raise api_error(404, "Post not found")
        targets = [existing]
    else:
        targets = await blog_store.list_posts()

    updated_posts: list[dict[str, Any]] = []
    for post in targets:
        try:
            refreshed = await refresh_blog_post(
                post, update_purpose=body.updatePurpose or "weekly"
            )
            updated_posts.append(refreshed)
        except Exception as exc:  # noqa: BLE001
            logger.exception("OpenAI refresh failed for %s", post.get("slug"))
            raise api_error(
                500,
                f"Failed to refresh post {post.get('slug')}",
                error=exc,
            ) from exc

    count = await blog_store.upsert_posts(updated_posts)
    return {"success": True, "updatedCount": count, "posts": updated_posts}


class BlogImportBody(BaseModel):
    secret: str | None = None


@router.post("/import-from-json")
async def import_from_json(
    body: BlogImportBody = BlogImportBody(),
    x_blog_update_secret: str | None = Header(default=None, alias="x-blog-update-secret"),
) -> dict[str, Any]:
    _assert_blog_secret(header_secret=x_blog_update_secret, body_secret=body.secret)
    try:
        count = await blog_store.import_from_json_file()
    except Exception as exc:  # noqa: BLE001
        raise api_error(500, "Import failed", error=exc) from exc
    posts = await blog_store.list_posts()
    return {"success": True, "updatedCount": count, "posts": posts}
