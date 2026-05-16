export const site = {
  name: "Berne Commercial Repair",
  shortName: "Berne Commercial",
  domain: "berne-commercial.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://berne-commercial.com",
  description:
    "Commercial equipment repair across South Florida — refrigeration, restaurant equipment, ice machines, commercial laundry, and enterprise dispatch.",
  phone: "(305) 520-7833",
  phoneHref: "tel:+13055207833",
  email: "bernerepair@gmail.com",
  founder: {
    name: "Eugene Bernitsky",
    title: "Founder & Operator",
    photo: "/team/eugene-bernitsky.png",
  },
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
