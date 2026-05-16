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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: ["Miami-Dade County", "Broward County", "Palm Beach County"],
    priceRange: site.serviceCall,
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

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.svg`,
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

