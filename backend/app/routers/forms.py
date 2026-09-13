from __future__ import annotations

import logging
import re
from typing import Any

from bson import ObjectId
from fastapi import APIRouter, BackgroundTasks
from pydantic import BaseModel, EmailStr, Field

from app.api_errors import api_error
from app.config import get_settings
from app.email.smtp import send_email
from app.email.templates import (
    build_form_email_html,
    build_form_email_text,
    submitted_at_label,
)
from app.fields import Agreed
from app.services import form_submissions as form_svc

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/submit", tags=["forms"])

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
MOBILE_RE = re.compile(r"^[6-9]\d{9}$")
NAME_LETTERS_RE = re.compile(r"^[A-Za-z][A-Za-z\s.'-]{1,79}$")


def _require_email(value: str | None, label: str = "email") -> str:
    email = (value or "").strip()
    if not email or not EMAIL_RE.match(email):
        raise api_error(400, f"A valid {label} is required")
    return email


def _validate_indian_mobiles(raw: str) -> str:
    parts = [p.strip() for p in raw.replace(";", ",").split(",") if p.strip()]
    if not parts:
        raise api_error(400, "A valid Indian mobile number is required")
    for part in parts:
        digits = re.sub(r"\D", "", part)
        if digits.startswith("91") and len(digits) == 12:
            digits = digits[2:]
        if not MOBILE_RE.match(digits):
            raise api_error(400, "Each contact mobile must be a valid Indian number")
    return raw.strip()


async def _send_form_email_bg(
    *,
    submission_id: ObjectId,
    title: str,
    fields: dict[str, str],
    reply_to: str,
) -> None:
    settings = get_settings()
    submitted = submitted_at_label()
    html = build_form_email_html(title=title, fields=fields, submitted_at=submitted)
    text = build_form_email_text(title=title, fields=fields, submitted_at=submitted)
    try:
        await send_email(
            to=settings.RECEIVER_EMAIL,
            subject=title,
            html=html,
            text=text,
            reply_to=reply_to,
            settings=settings,
        )
        await form_svc.mark_email_result(submission_id, sent=True)
    except Exception as exc:  # noqa: BLE001
        logger.exception("Form email failed")
        await form_svc.mark_email_result(submission_id, sent=False, error=str(exc))


# Matches frontend/app/champion/apply/_sections/champion-apply-form.tsx
class CauseChampionBody(BaseModel):
    fullName: str = Field(min_length=2)
    email: EmailStr
    mobile: str = Field(min_length=8)  # E.164 from react-phone-number-input
    city: str = Field(min_length=1)
    selectedCauseId: str = Field(min_length=1)
    selectedReasonId: str = Field(min_length=1)
    otherCauseDetail: str | None = None
    otherReasonDetail: str | None = None
    agreed: Agreed


# Matches frontend/app/partner/_sections/partner-apply-form.tsx
class NgoPartnerBody(BaseModel):
    organizationName: str = Field(min_length=2)
    email: EmailStr
    contactPerson: str = Field(min_length=2)
    phone: str = Field(min_length=8)
    country: str = Field(min_length=2)
    selectedFocusId: str = Field(min_length=1)
    otherFocusDetail: str | None = None
    agreed: Agreed


class AnimalWelfarePartnerBody(BaseModel):
    citySlug: str = Field(min_length=2)
    regionLabel: str | None = None
    person: str = Field(min_length=2)
    organisation: str | None = None
    contact: str = Field(min_length=8)
    city: str = Field(min_length=2)
    area: str | None = None
    address: str | None = None
    email: EmailStr
    services: str | None = None


class PehliClassChampionBody(BaseModel):
    name: str = Field(min_length=2)
    email: EmailStr
    mobile: str = Field(min_length=8)
    city: str = Field(min_length=2)
    schoolName: str | None = None
    socialHandle: str | None = None
    whyItMatters: str | None = None


async def _store_submission(*, form_type: str, payload: dict[str, Any]) -> ObjectId:
    try:
        return await form_svc.insert_form_submission(
            form_type=form_type, payload=payload
        )
    except Exception as exc:  # noqa: BLE001
        logger.exception("Failed to store %s submission", form_type)
        raise api_error(
            500, "Could not save submission", error=exc
        ) from exc


@router.post("/cause-champion")
async def submit_cause_champion(
    body: CauseChampionBody, background_tasks: BackgroundTasks
) -> dict[str, Any]:
    if body.selectedCauseId == "other" and not (body.otherCauseDetail or "").strip():
        raise api_error(400, "Please describe the other cause")
    if body.selectedReasonId == "other-occasion" and not (
        body.otherReasonDetail or ""
    ).strip():
        raise api_error(400, "Please describe the other occasion")

    submission_id = await _store_submission(
        form_type="cause_champion", payload=body.model_dump()
    )

    fields = {
        "Full name": body.fullName,
        "Email": str(body.email),
        "Mobile": body.mobile,
        "City": body.city,
        "Cause": body.selectedCauseId,
        "Cause detail": body.otherCauseDetail or "",
        "Reason": body.selectedReasonId,
        "Reason detail": body.otherReasonDetail or "",
        "Agreed to updates": "Yes",
    }
    background_tasks.add_task(
        _send_form_email_bg,
        submission_id=submission_id,
        title="New Cause Champion application",
        fields=fields,
        reply_to=str(body.email),
    )
    return {
        "success": True,
        "message": "Thank you! Your Cause Champion application was received.",
    }


@router.post("/ngo-partner")
async def submit_ngo_partner(
    body: NgoPartnerBody, background_tasks: BackgroundTasks
) -> dict[str, Any]:
    if body.selectedFocusId == "other" and not (body.otherFocusDetail or "").strip():
        raise api_error(400, "Please describe the other focus area")

    submission_id = await _store_submission(
        form_type="ngo_partner", payload=body.model_dump()
    )

    fields = {
        "Organisation": body.organizationName,
        "Country": body.country,
        "Contact person": body.contactPerson,
        "Email": str(body.email),
        "Phone": body.phone,
        "Focus area": body.selectedFocusId,
        "Focus detail": body.otherFocusDetail or "",
        "Agreed to updates": "Yes",
    }
    background_tasks.add_task(
        _send_form_email_bg,
        submission_id=submission_id,
        title="New NGO Partner application",
        fields=fields,
        reply_to=str(body.email),
    )
    return {
        "success": True,
        "message": "Thank you! Your NGO Partner application was received.",
    }


@router.post("/animal-welfare-partner")
async def submit_animal_welfare_partner(
    body: AnimalWelfarePartnerBody, background_tasks: BackgroundTasks
) -> dict[str, Any]:
    if not NAME_LETTERS_RE.match(body.person.strip()):
        raise api_error(400, "Person name must use letters")
    contact = _validate_indian_mobiles(body.contact)
    email = _require_email(str(body.email))
    payload = body.model_dump()
    payload["contact"] = contact

    submission_id = await _store_submission(
        form_type="animal_welfare_partner", payload=payload
    )

    fields = {
        "City slug": body.citySlug,
        "Region": body.regionLabel or "",
        "Person": body.person,
        "Organisation": body.organisation or "",
        "Contact": contact,
        "City": body.city,
        "Area": body.area or "",
        "Address": body.address or "",
        "Email": email,
        "Services": body.services or "",
    }
    background_tasks.add_task(
        _send_form_email_bg,
        submission_id=submission_id,
        title="New Animal Welfare Partner listing request",
        fields=fields,
        reply_to=email,
    )
    return {
        "success": True,
        "message": "Thank you! Your animal welfare partner details were received.",
    }


@router.post("/pehli-class-champion")
async def submit_pehli_class_champion(
    body: PehliClassChampionBody, background_tasks: BackgroundTasks
) -> dict[str, Any]:
    payload = body.model_dump()
    payload["campaign"] = "pehli-class"

    submission_id = await _store_submission(
        form_type="cause_champion", payload=payload
    )

    fields = {
        "Name": body.name,
        "Email": str(body.email),
        "Mobile": body.mobile,
        "City": body.city,
        "School": body.schoolName or "",
        "Social": body.socialHandle or "",
        "Why it matters": body.whyItMatters or "",
        "Campaign": "pehli-class",
    }
    background_tasks.add_task(
        _send_form_email_bg,
        submission_id=submission_id,
        title="New PehliClass Cause Champion application",
        fields=fields,
        reply_to=str(body.email),
    )
    return {
        "success": True,
        "message": "Thank you! Your PehliClass Champion application was received.",
    }
