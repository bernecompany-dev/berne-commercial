// Brand config for 954 Appliance Repair — an independent Broward-County
// micro-brand. Deliberately NOT cross-referenced to the Berne properties in
// any public-facing schema or copy (see plan: minimal, natural footprint only).

export const site = {
  name: "954 Appliance Repair",
  legalNote: "954 Appliance Repair — a Broward County appliance service",
  areaCode: "954",
  county: "Broward County",
  region: "FL",
  tagline: "Same-day appliance repair across Broward County",
  // Env-overridable so prod can point at 954appliancerepair.com without a code change.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://954appliancerepair.com").replace(/\/$/, ""),
  // Swap for a dedicated 954 CallRail tracking number in prod. Falls back to
  // the shared dispatch line so the site still converts on day one.
  phone: process.env.NEXT_PUBLIC_PHONE ?? "(754) 345-4515",
  get phoneHref() {
    return "tel:+1" + this.phone.replace(/[^\d]/g, "")
  },
  email: "bernerepair@gmail.com",
  hours: "Mon–Sat, 8:00 AM – 8:00 PM",
  // Service-area business (SAB): no storefront address is published.
  serviceArea: "Broward County, Florida",
  // Marketing attribution — stamped on every lead so the shared inbox can tell
  // which micro-site produced it.
  utmSource: "954appliancerepair",
  leadSubjectPrefix: "954 LEAD",
  reviews: {
    // Placeholder aggregate — replace with real GBP numbers once the profile
    // has verified reviews. Kept modest and honest until then.
    ratingValue: "4.9",
    reviewCount: 0,
  },
} as const

export const NAV = [
  { label: "Services", href: "/#services" },
  { label: "Service Areas", href: "/#areas" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const
