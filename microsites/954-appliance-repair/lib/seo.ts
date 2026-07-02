import type { Metadata } from "next"
import { site } from "./site"

const MAX_DESC = 155

export function clampDescription(text: string, max = MAX_DESC): string {
  const t = text.trim()
  if (t.length <= max) return t
  const slice = t.slice(0, max + 1)
  const wordEnd = slice.lastIndexOf(" ", max - 1)
  const cut = t.slice(0, wordEnd > 0 ? wordEnd : max - 1).replace(/[,;:\s]+$/, "")
  return `${cut}…`
}

export function metaFor({
  title,
  description,
  path = "/",
  noindex = false,
}: {
  title: string
  description: string
  path?: string
  noindex?: boolean
}): Metadata {
  const url = `${site.url}${path}`
  const desc = clampDescription(description)
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title, description: desc },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
  }
}

// --- JSON-LD ----------------------------------------------------------------
// All nodes hang off @id anchors on this brand's own domain. The Service and
// FAQ nodes reference the LocalBusiness by bare @id rather than repeating the
// business fields, so there's exactly one LocalBusiness node in the graph.

export function localBusinessSchema() {
  const node: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    areaServed: { "@type": "AdministrativeArea", name: "Broward County, FL" },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
  }
  // Only emit aggregateRating once there are real reviews behind it —
  // a review count of 0 is a structured-data violation.
  if (site.reviews.reviewCount > 0) {
    node.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: site.reviews.ratingValue,
      reviewCount: site.reviews.reviewCount,
      bestRating: 5,
      worstRating: 1,
    }
  }
  return node
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "en-US",
  }
}

export function serviceSchema(args: {
  name: string
  description: string
  path: string
  city?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${args.path}#service`,
    name: args.name,
    serviceType: args.name,
    description: args.description,
    url: `${site.url}${args.path}`,
    provider: { "@id": `${site.url}/#localbusiness` },
    areaServed: args.city
      ? { "@type": "City", name: `${args.city}, FL` }
      : { "@type": "AdministrativeArea", name: "Broward County, FL" },
  }
}

export function faqSchema(path: string, faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${site.url}${path}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  }
}
