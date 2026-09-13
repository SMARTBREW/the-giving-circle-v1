from __future__ import annotations

from html import escape
from zoneinfo import ZoneInfo
from datetime import datetime


IST = ZoneInfo("Asia/Kolkata")


def submitted_at_label(when: datetime | None = None) -> str:
    dt = when or datetime.now(tz=IST)
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=IST)
    else:
        dt = dt.astimezone(IST)
    # en-IN style
    return dt.strftime("%d %b %Y, %I:%M:%S %p IST")


def build_form_email_html(*, title: str, fields: dict[str, str], submitted_at: str) -> str:
    rows = "".join(
        f"<tr><td style='padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;width:36%'>{escape(label)}</td>"
        f"<td style='padding:8px 12px;border:1px solid #e5e7eb'>{escape(value or '—')}</td></tr>"
        for label, value in fields.items()
    )
    return f"""<!DOCTYPE html>
<html><body style="font-family:Segoe UI,Arial,sans-serif;color:#212121;background:#f8fafc;padding:24px">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
    <div style="background:#00A3BE;color:#fff;padding:16px 20px">
      <h1 style="margin:0;font-size:20px">{escape(title)}</h1>
      <p style="margin:8px 0 0;opacity:.9;font-size:13px">Submitted {escape(submitted_at)}</p>
    </div>
    <div style="padding:20px">
      <table style="width:100%;border-collapse:collapse;font-size:14px">{rows}</table>
      <p style="margin-top:20px;font-size:12px;color:#64748b">The Giving Circle · automated form notification</p>
    </div>
  </div>
</body></html>"""


def build_form_email_text(*, title: str, fields: dict[str, str], submitted_at: str) -> str:
    lines = [title, f"Submitted: {submitted_at}", ""]
    for label, value in fields.items():
        lines.append(f"{label}: {value or '—'}")
    return "\n".join(lines)
