export const site = {
  name: "Berne Commercial Repair",
  shortName: "Berne Commercial",
  domain: "bernecommercial.com",
  url: "https://bernecommercial.com",
  description:
    "Commercial equipment repair across South Florida — refrigeration, restaurant equipment, ice machines, commercial laundry, and enterprise dispatch.",
  phone: "+1 (305) 000-0000",
  phoneHref: "tel:+13050000000",
  email: "bernerepair@gmail.com",
  serviceCall: "$89",
  address: {
    locality: "Miami",
    region: "FL",
    country: "US",
  },
  hours: "24/7 Emergency Dispatch",
  licenses: "Licensed & Insured",
  social: {
    google: "",
    facebook: "",
    instagram: "",
  },
  ogImage: "/og.jpg",
} as const

export type SiteConfig = typeof site
