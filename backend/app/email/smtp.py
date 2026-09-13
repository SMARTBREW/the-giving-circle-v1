from __future__ import annotations

import logging
from email.message import EmailMessage

import aiosmtplib

from app.config import Settings, get_settings

logger = logging.getLogger(__name__)


def resolve_smtp(settings: Settings) -> dict:
    service = (settings.EMAIL_SERVICE or "gmail").lower()
    if service == "gmail":
        return {
            "hostname": "smtp.gmail.com",
            "port": 587,
            "use_tls": True,
            "username": settings.EMAIL_USER,
            "password": settings.EMAIL_PASSWORD,
        }
    if service in {"aws-ses", "ses"}:
        return {
            "hostname": settings.SMTP_HOST,
            "port": settings.SMTP_PORT,
            "use_tls": not settings.SMTP_SECURE,
            "username": settings.SMTP_USER or settings.EMAIL_USER,
            "password": settings.SMTP_PASSWORD or settings.EMAIL_PASSWORD,
            "start_tls": not settings.SMTP_SECURE,
        }
    if service == "sendgrid":
        return {
            "hostname": "smtp.sendgrid.net",
            "port": 587,
            "use_tls": True,
            "username": "apikey",
            "password": settings.SENDGRID_API_KEY,
        }
    # custom
    return {
        "hostname": settings.SMTP_HOST,
        "port": settings.SMTP_PORT,
        "use_tls": not settings.SMTP_SECURE,
        "username": settings.SMTP_USER or settings.EMAIL_USER,
        "password": settings.SMTP_PASSWORD or settings.EMAIL_PASSWORD,
        "start_tls": not settings.SMTP_SECURE,
    }


async def verify_smtp(settings: Settings | None = None) -> bool:
    settings = settings or get_settings()
    cfg = resolve_smtp(settings)
    if not cfg.get("hostname") or not cfg.get("username"):
        logger.warning("SMTP not fully configured — email sends may fail")
        return False
    try:
        smtp = aiosmtplib.SMTP(
            hostname=cfg["hostname"],
            port=int(cfg["port"]),
            start_tls=bool(cfg.get("use_tls") or cfg.get("start_tls")),
        )
        await smtp.connect()
        if cfg.get("username"):
            await smtp.login(cfg["username"], cfg.get("password") or "")
        await smtp.quit()
        logger.info("SMTP verified (%s)", settings.EMAIL_SERVICE)
        return True
    except Exception as exc:  # noqa: BLE001
        logger.warning("SMTP verify failed (continuing): %s", exc)
        return False


async def send_email(
    *,
    to: str,
    subject: str,
    html: str,
    text: str,
    reply_to: str | None = None,
    settings: Settings | None = None,
) -> None:
    settings = settings or get_settings()
    cfg = resolve_smtp(settings)
    from_addr = settings.from_email
    if not from_addr or not cfg.get("hostname"):
        raise RuntimeError("Email is not configured")

    message = EmailMessage()
    message["From"] = f"The Giving Circle <{from_addr}>"
    message["To"] = to
    message["Subject"] = subject
    if reply_to:
        message["Reply-To"] = reply_to
    message.set_content(text)
    message.add_alternative(html, subtype="html")

    await aiosmtplib.send(
        message,
        hostname=cfg["hostname"],
        port=int(cfg["port"]),
        username=cfg.get("username") or None,
        password=cfg.get("password") or None,
        start_tls=bool(cfg.get("use_tls") or cfg.get("start_tls")),
    )
