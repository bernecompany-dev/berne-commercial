import type { Metadata } from "next"
import { site } from "./site"

export function metaFor({
  title,
  description,
  path = "/",
  noindex = false,
  locale = "en",
}: {
  title: string
  description: string
  path?: string
  noindex?: boolean
  locale?: "en" | "es"
}): Metadata {
  const url = `${site.url}${path}`
  // For canonical/alternates: if path starts with /es, EN equivalent strips it.
  const enPath = path.startsWith("/es/")
    ? path.replace(/^\/es/, "")
    : path.startsWith("/es")
      ? "/"
      : path
  const esPath = path.startsWith("/es") ? path : `/es${path === "/" ? "" : path}`
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: enPath,
        es: esPath,
        "x-default": enPath,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: locale === "es" ? "es_US" : "en_US",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/opengraph-image`,
    sameAs: SAME_AS,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.79",
      reviewCount: 871,
      bestRating: 5,
      worstRating: 1,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Miami-Dade County" },
      { "@type": "AdministrativeArea", name: "Broward County" },
      { "@type": "AdministrativeArea", name: "Palm Beach County" },
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: ["en-US", "es-US"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
}

const SAME_AS = [
  // Affiliated / sister sites (de-duped, no self-ref)
  "https://berne-repair.com",
  "https://bernerepair.com",
  "https://normarepair.com",
  // Social
  "https://www.tiktok.com/@berne.repair",
  "https://www.instagram.com/bernerepair/",
  "https://www.facebook.com/bernerepair",
  // Yelp
  "https://www.yelp.com/biz/berne-repair-sarasota",
  "https://www.yelp.com/biz/berne-repair-hallandale-beach-3",
  "https://www.yelp.com/biz/berne-repair-fort-myers",
  // Thumbtack
  "https://www.thumbtack.com/fl/tampa/appliance-repair/norma-appliance-repair/service/485458498671689761",
  "https://www.thumbtack.com/fl/naples/appliance-repair/berne-appliance-repair-naples-fort-myers/service/566337571507380237",
  // Google Business
  "https://share.google/sSDq9B0xar89bItSq",
  "https://share.google/6GQjQFqxDvYeOWZIp",
  "https://share.google/VCXebzL4hfcPcu3P5",
  "https://share.google/gH0RfcApFEEwD6zpy",
  "https://share.google/c2j6LHKohujVnmXge",
  // Apple Maps (canonical host)
  "https://maps.apple.com/p/7r_.dJpYdb5n6V",
]

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/opengraph-image`,
    sameAs: SAME_AS,
    parentOrganization: {
      "@type": "Organization",
      "@id": "https://bernerepair.com/#organization",
      name: "Berne Appliance Repair",
      url: "https://bernerepair.com/",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "dispatch",
        areaServed: "US-FL",
        availableLanguage: ["English", "Spanish"],
      },
    ],
  }
}

export function serviceSchema(args: {
  name: string
  description: string
  url: string
  city?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    url: args.url,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phone,
      url: site.url,
    },
    areaServed: args.city ? args.city : "South Florida",
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}

