export const site = {
  name: "Berne Commercial Repair",
  shortName: "Berne Commercial",
  domain: "berne-commercial.com",
  url: "https://www.berne-commercial.com",
  description:
    "Commercial equipment repair across South Florida — refrigeration, restaurant equipment, ice machines, commercial laundry, and enterprise dispatch.",
  // Canonical primary dispatch line — see _docs/canonical-facts.md. The legacy
  // (305) 520-7833 number was retired 2026-05-20 after the GSC URL-Inspection
  // schema audit on /industries/laundromats.
  phone: "(754) 345-4515",
  phoneHref: "tel:+17543454515",
  email: "bernerepair@gmail.com",
  founder: {
    name: "Eugene Bernitsky",
    title: "Founder & Operator",
    photo: "/team/eugene-bernitsky.png",
  },
  serviceCall: "$89",
  // Hallandale Beach HQ — canonical office per _docs/canonical-facts.md.
  // Boca Raton (131 S Federal Hwy #533) is a secondary office; we surface the
  // HQ in schema and reserve Boca for a separate LocalBusiness node if needed.
  address: {
    streetAddress: "1001 N Federal Hwy #230",
    locality: "Hallandale Beach",
    region: "FL",
    postalCode: "33009",
    country: "US",
  },
  // Customer-facing copy. Schema emits canonical Mon-Sun 07:00-21:00 hours.
  hours: "Mon-Sun, 7:00 AM - 9:00 PM",
  licenses: "Licensed & Insured",
  social: {
    google: "",
    facebook: "",
    instagram: "",
  },
} as const

export type SiteConfig = typeof site
