import {
  BrandServicePage,
  brandServiceMetadata,
} from "@/components/brand-service-page"

// Static brand-service route (Content_Plan 2026-06-10) — content lives in
// lib/data/brand-services.ts. Deliberately NOT a services.ts entry: that
// would spawn 70 phantom /{city}/ combo routes. EN-only (esAlternate=false).

const SLUG = "turbo-air-refrigeration-repair"

export const metadata = brandServiceMetadata(SLUG)

export default function Page() {
  return <BrandServicePage slug={SLUG} />
}
