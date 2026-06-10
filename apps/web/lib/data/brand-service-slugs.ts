/**
 * Slugs of the static brand-service routes under app/services/<slug>/
 * (rendered by <BrandServicePage> from brand-services.ts). Kept in a
 * separate module because the client-side <LanguageSwitcher> needs the
 * slug list (these pages are EN-only — /es/services/<slug> would 404,
 * W3-P1.1) without pulling the full brand-services copy into the bundle.
 *
 * Type-synced: BrandService.slug is typed as BrandServiceSlug, so adding a
 * new entry to BRAND_SERVICES with a slug missing here fails typecheck —
 * the language switcher can no longer silently drift out of date.
 */
export const BRAND_SERVICE_SLUGS = [
  "manitowoc-ice-machine-repair",
  "hoshizaki-ice-machine-repair",
  "scotsman-ice-machine-repair",
  "hobart-dishwasher-repair",
  "true-refrigeration-repair",
  "la-marzocco-espresso-repair",
  "vulcan-oven-repair",
  "turbo-air-refrigeration-repair",
] as const

export type BrandServiceSlug = (typeof BRAND_SERVICE_SLUGS)[number]
