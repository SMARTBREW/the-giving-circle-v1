from __future__ import annotations

from typing import Any

from fastapi import APIRouter, Query
from pydantic import BaseModel, Field

from app.api_errors import api_error
from app.services import animal_welfare_store as store
from app.services.animal_welfare_store import VALID_CITY_SLUGS

router = APIRouter(prefix="/api/animal-welfare", tags=["animal-welfare"])


def _validate_city(city_slug: str) -> str:
    slug = city_slug.strip().lower()
    if slug not in VALID_CITY_SLUGS:
        raise api_error(400, "Invalid citySlug")
    return slug


@router.post("/seed")
async def seed_all() -> dict[str, Any]:
    count = await store.seed_from_file(force=False)
    return {"success": True, "message": "Seed complete", "count": count}


@router.post("/seed/{city_slug}")
async def seed_city(
    city_slug: str,
    force: bool = Query(default=False),
) -> dict[str, Any]:
    slug = _validate_city(city_slug)
    count = await store.seed_from_file(force=force, city_slug=slug)
    return {
        "success": True,
        "message": f"Seed complete for {slug}",
        "count": count,
        "force": force,
    }


@router.get("/cities")
async def cities() -> dict[str, Any]:
    return {"success": True, "cities": await store.list_cities()}


@router.get("/partners/{city_slug}")
async def partners(
    city_slug: str,
    page: int = Query(default=1, ge=1),
    limit: int = Query(default=20, ge=1, le=100),
    q: str | None = None,
) -> dict[str, Any]:
    slug = _validate_city(city_slug)
    result = await store.list_partners(slug, page=page, limit=limit, q=q)
    return {"success": True, **result}


@router.get("/partner/{partner_id}")
async def partner(partner_id: str) -> dict[str, Any]:
    doc = await store.get_partner(partner_id)
    if not doc:
        raise api_error(404, "Partner not found")
    return {"success": True, "partner": doc}


class PartnerBody(BaseModel):
    citySlug: str
    person: str = Field(min_length=1)
    organisation: str | None = ""
    contact: str = Field(min_length=1)
    city: str = Field(min_length=1)
    area: str | None = ""
    address: str | None = ""
    email: str | None = ""
    services: str | None = ""
    sortOrder: int | None = 0
    id: str | None = None


@router.post("/partners", status_code=201)
async def create_partner(body: PartnerBody) -> dict[str, Any]:
    _validate_city(body.citySlug)
    partner = await store.create_partner(body.model_dump())
    return {"success": True, "partner": partner}


@router.put("/partners/{partner_id}")
async def update_partner(partner_id: str, body: PartnerBody) -> dict[str, Any]:
    if body.citySlug:
        _validate_city(body.citySlug)
    partner = await store.update_partner(partner_id, body.model_dump(exclude_unset=True))
    if not partner:
        raise api_error(404, "Partner not found")
    return {"success": True, "partner": partner}


@router.delete("/partners/{partner_id}")
async def delete_partner(partner_id: str) -> dict[str, Any]:
    ok = await store.delete_partner(partner_id)
    if not ok:
        raise api_error(404, "Partner not found")
    return {"success": True, "message": "Partner deleted"}
