from __future__ import annotations

import json
import logging
from datetime import date
from typing import Any

from app.config import get_settings

logger = logging.getLogger(__name__)


SYSTEM_PROMPT = """You are updating a blog post for The Giving Circle (India community giving platform).
Return ONLY valid JSON for one BlogPost object with keys:
slug, title, description, keywords, category, datePublished, dateModified, heroImage,
readingTime, toc (string[]), sections (array of {heading, paragraphs[], bullets?, callout?}),
faqs (array of {q, a}), related (array of {title, href}).
Keep the same slug and heroImage. Set dateModified to today's ISO date (YYYY-MM-DD).
Voice: warm, trust-first, India-focused. Do not invent fake NGO names or unverifiable impact numbers.
"""


async def refresh_blog_post(
    post: dict[str, Any], *, update_purpose: str = "weekly"
) -> dict[str, Any]:
    settings = get_settings()
    if not settings.OPENAI_API_KEY:
        raise RuntimeError("OPENAI_API_KEY is not configured")

    from openai import AsyncOpenAI

    client = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)
    today = date.today().isoformat()
    user_prompt = {
        "updatePurpose": update_purpose,
        "today": today,
        "existingPost": post,
        "instructions": "Refresh for currency while preserving slug and heroImage.",
    }

    # Prefer chat completions with JSON object response (widely available).
    completion = await client.chat.completions.create(
        model=settings.OPENAI_MODEL or "gpt-4o-mini",
        response_format={"type": "json_object"},
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": json.dumps(user_prompt, ensure_ascii=False)},
        ],
        temperature=0.4,
    )
    raw = completion.choices[0].message.content or "{}"
    updated = json.loads(raw)
    if not isinstance(updated, dict):
        raise ValueError("OpenAI returned non-object JSON")

    updated["slug"] = post.get("slug")
    updated["heroImage"] = post.get("heroImage")
    updated["dateModified"] = today
    if post.get("datePublished"):
        updated.setdefault("datePublished", post["datePublished"])
    return updated
