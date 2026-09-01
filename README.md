# The Giving Circle

India-based community giving platform — [thegivingcircle.in](https://thegivingcircle.in). Founded in 2022.

We connect **Cause Champions** (people who pool donations with their network) to **verified NGOs** running live causes in education, women’s empowerment, animal welfare, and disaster relief. Donations go **directly to NGOs**. TGC verifies partners, enables the giving-circle model, and reports impact.

**Young Champions** are students running school and college fundraising and volunteering projects.

This is not a generic donation portal. It is a movement for collective social impact in India: real causes, real people, measurable change.

## Voice

Warm, transparent, trust-first, community-driven. Prefer “we / our circle / together” over charity-portal language (“donate now”, “browse NGOs”, “checkout”).

## Product language

Use these terms in copy, APIs, and UI we build from Figma:

| Use | Avoid |
|-----|--------|
| Cause Champion | donor cart, fundraiser SKU |
| Young Champion | student campaign widget |
| verified NGO | vendor / listing |
| cause | product / SKU |
| giving circle | checkout / cart |
| impact | conversion |

Do not invent impact numbers or NGO names. Site copy is English.

## Design

UI and layout follow **Figma**. This repo holds the product story, engineering conventions, and a thin placeholder until screens are implemented from the file.

## Repo

```
frontend/          Next.js 15 (port 3000)
backend/           Express + Mongo API (port 4000, /v1)
.cursor/rules/     Frontend, backend, and product conventions
```

```bash
cd frontend && npm run dev
cd backend && cp .env.example .env && npm run dev
```

## Who we serve

- **Cause Champions** — pool with their circle and fund a live cause
- **Verified NGOs** — run causes; receive funds directly
- **Young Champions** — students leading campus giving and volunteering
- **The circle** — everyone who shows up so small gifts become lasting change
