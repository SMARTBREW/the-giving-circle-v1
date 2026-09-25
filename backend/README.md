# The Giving Circle — FastAPI public API

Drop-in behavioral replacement for the production Node API at `https://api.thegivingcircle.in/api/...`.

## Stack

- FastAPI + Uvicorn
- MongoDB via Motor (async)
- SMTP via aiosmtplib (Gmail / SES / SendGrid / custom)
- OpenAI for `/api/blog/generate`
- In-memory rate limits (global + forms)

## Quick start

Requires **Python 3.11+**.

```bash
cd backend
python3.11 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# set MONGODB_URI (required) + email / OpenAI as needed
uvicorn app.main:app --reload --port 3001
```

Health: `GET http://localhost:3001/api/health`

Point the frontend (or `VITE_API_URL` / production proxy) at this host. Paths stay under `/api/...`.

## Environment

See `.env.example`. Required to boot: `MONGODB_URI` or `MONGO_URI`.

| Key | Role |
|---|---|
| `PORT` | Default `3001` |
| `NODE_ENV` / `ENVIRONMENT` | `development` \| `production` |
| `MONGODB_DB_NAME` | Default `thegivingcircle` |
| `EMAIL_SERVICE` | `gmail` \| `aws-ses` \| `ses` \| `sendgrid` \| `custom` |
| `RECEIVER_EMAIL` | Inbox for form notifications |
| `BLOG_UPDATE_SECRET` | Header `x-blog-update-secret` or body `secret` |
| `TRUST_PROXY_HOPS` | Client IP for rate limits behind a proxy |

SMTP verify runs on startup (warn only). Mongo failure exits the process.

## Forms flow

1. Validate body  
2. Insert into `form_submissions` (fail → 500)  
3. Return `{ success: true, message }` immediately  
4. Send HTML email in background; update `emailSent` / `emailError`

Endpoints (fields match current frontend apply forms):

- `POST /api/submit/cause-champion` — `fullName`, `email`, `mobile`, `city`, `selectedCauseId`, `selectedReasonId`, `otherCauseDetail?`, `otherReasonDetail?`, `agreed`, optional `referredByInviteCode`, `visitorKey`. Response includes `inviteCode` + `inviteUrl`.
- `POST /api/submit/champion-referral-open` — `inviteCode`, `visitorKey` (records that someone opened a shared invite link before submitting)
- `POST /api/submit/ngo-partner` — `organizationName`, `country`, `contactPerson`, `email`, `phone`, `selectedFocusId`, `otherFocusDetail?`, `agreed`
- `POST /api/submit/animal-welfare-partner` — directory listing fields
- `POST /api/submit/pehli-class-champion` → stored as `formType: cause_champion` with `payload.campaign = "pehli-class"`

## Blog

- `GET /api/blog/posts` · `GET /api/blog/post/{slug}`
- `POST /api/blog/generate` (secret) — OpenAI refresh, upsert by slug
- `POST /api/blog/import-from-json` (secret) — load `data/blog-posts.json`

Seed: if `blog_posts` is empty on startup, import `data/blog-posts.json`.

## Animal welfare directory

- Seed: `data/animal-welfare-partners.json` (production snapshot) when collection empty
- `POST /api/animal-welfare/seed` · `POST /api/animal-welfare/seed/{citySlug}?force=true`
- `GET /api/animal-welfare/cities`
- `GET /api/animal-welfare/partners/{citySlug}?page&limit&q`
- `GET /api/animal-welfare/partner/{id}`
- `POST|PUT|DELETE /api/animal-welfare/partners...`

## Rate limits

- `/api/*`: 100 requests / 15 minutes / IP  
- `/api/submit/*`: 100 submissions / hour / IP → `429` JSON

## Role in the monorepo

This is the only backend: public marketing API (forms, blog, animal welfare) on port **3001** (`/api`). Frontend lives in `frontend/`.
