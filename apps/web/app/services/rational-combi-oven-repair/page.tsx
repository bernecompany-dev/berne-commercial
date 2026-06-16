import {
  BrandServicePage,
  brandServiceMetadata,
} from "@/components/brand-service-page"

// Static brand-service route — combi-oven money cluster (2026-06-15). Content
// lives in lib/data/brand-services.ts. Deliberately NOT a services.ts entry:
// that would spawn 70 phantom /{city}/ combo routes. EN-only (esAlternate=false).

const SLUG = "rational-combi-oven-repair"

export const metadata = brandServiceMetadata(SLUG)

export default function Page() {
  return <BrandServicePage slug={SLUG} />
}
