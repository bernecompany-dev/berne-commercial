# berne-commercial

Berne Commercial Repair — commercial equipment repair website for South Florida.
Next.js 16 + Tailwind 4 + shadcn/ui in a Turborepo workspace.

## Stack

- `apps/web` — Next.js 16 App Router (Turbopack)
- `packages/ui` — shadcn/ui components, Tailwind 4 tokens, shared utilities
- Programmatic SEO: 70 cities × 7 primary services = 490 location-service pages,
  plus 17 service-detail pages, all statically generated.

## Run

```bash
npm install
npm run dev    # next dev (turbo)
npm run build  # next build
```

Dev server runs `apps/web` on http://localhost:3000.

## Project layout

```
apps/web/
  app/
    page.tsx                   # homepage
    [city]/page.tsx            # /miami, /fort-lauderdale, …
    [city]/[service]/page.tsx  # /miami/walk-in-cooler-repair, …
    services/[slug]/page.tsx   # /services/<service>
    sitemap.ts robots.ts
    api/dispatch/route.ts      # form receiver
  components/                  # site sections (hero, navbar, forms, …)
  lib/
    data/                      # cities, services, industries, brands
    seo.ts site.ts
packages/ui/
  src/components/              # shadcn primitives (base-vega style)
  src/styles/globals.css       # brand tokens
```

## Configuration

- Brand: `apps/web/lib/site.ts` — phone, email, address, OG image, service-call price
- Cities: `apps/web/lib/data/cities.ts`
- Services + FAQ: `apps/web/lib/data/services.ts`
- Industries: `apps/web/lib/data/industries.ts`
- Brands serviced: `apps/web/lib/data/brands.ts`

## Dispatch form

`POST /api/dispatch` validates and logs to the server (placeholder transport).
Wire up Resend or SMTP in `app/api/dispatch/route.ts` and add credentials via
`apps/web/.env.local`.

## TODO (post-launch)

- Email transport (Resend / SMTP) for `/api/dispatch`
- GTM / GA4 / Google Ads conversion IDs (env-driven)
- Real photos and equipment imagery
- City-specific narrative content where it improves rankings
