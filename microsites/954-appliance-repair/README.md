# 954 Appliance Repair

Standalone geo-microbrand site for **Broward County** appliance repair
(`954appliancerepair.com`). Phase 1 of the microsites network — see
`../../_docs/microsites_plan_2026-07-02.md`.

This is intentionally its **own** project: no Tailwind, no shadcn, no
`@workspace/*` packages, plain hand-written CSS. Keeping a different technical
footprint from the Berne properties is a deliberate SEO requirement, not an
accident — do not fold it back into the Turborepo.

## Stack

- Next.js 16 (App Router), React 19 — static-generated pages
- Plain CSS design system (`app/globals.css`)
- Resend for the lead form (`app/api/dispatch/route.ts`)
- GA4 + Microsoft Clarity (env-gated, **own** IDs per brand)

## Pages (16)

- `/` home
- `/services/*` — 6 core repairs (refrigerator, washer, dryer, dishwasher, oven, range)
- `/areas/*` — 6 Broward cities (Fort Lauderdale, Hollywood, Pembroke Pines, Pompano Beach, Coral Springs, Davie)
- `/about`, `/contact`, `/reviews`
- `robots.txt`, `sitemap.xml`, dynamic OG image

## Local dev

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY etc.
npm run dev                  # http://localhost:3000
npm run build                # production build
```

## Deploy (own repo + own Vercel project — required)

The footprint separation only works if this ships as an **independent property**:

1. Copy this `954-appliance-repair/` folder into a **new, separate GitHub repo**
   (not `berne-commercial`).
2. Create a **new Vercel project** linked to that repo (separate from the Berne
   projects).
3. Register `954appliancerepair.com` at a **different registrar** than the other
   brands and point it at the Vercel project.
4. Set env vars in Vercel:
   - `RESEND_API_KEY`, `DISPATCH_FROM_EMAIL` (on a Resend-verified domain),
     `DISPATCH_TO_EMAIL=bernerepair@gmail.com`
   - `NEXT_PUBLIC_SITE_URL=https://954appliancerepair.com`
   - `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_CLARITY_ID` — **new** IDs for this brand
   - `NEXT_PUBLIC_PHONE` — a dedicated 954 CallRail number (falls back to the
     shared dispatch line if unset)
5. Verify the domain in **Google Search Console** and submit `/sitemap.xml`.

## Content & SEO guardrails

- Every service/city page has unique copy — do **not** copy text between brands
  when replicating this pattern to Miami / Palm Beach; rewrite it.
- Lead emails are tagged `utm_source=954appliancerepair` and prefixed
  `954 LEAD —` so the shared inbox can attribute the source.
- No fabricated reviews and no `aggregateRating` until real reviews exist
  (`site.reviews.reviewCount` gates the schema).
- Interlinking to the other microsites stays minimal and natural; the Berne
  sites must **not** link here.
