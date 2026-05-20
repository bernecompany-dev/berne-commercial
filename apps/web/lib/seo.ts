import type { Metadata } from "next"
import { site } from "./site"
import type { TeamMember } from "./data/team"

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

/**
 * Verifiable credentials surfaced via Organization.hasCredential and
 * LocalBusiness.hasCredential. Files served from /public/credentials/. Keep
 * in sync with components/credentials-section.tsx.
 */
export const HAS_CREDENTIAL = [
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "Florida Technician License",
    recognizedBy: {
      "@type": "Organization",
      name: "Florida Department of Business and Professional Regulation",
    },
    url: `${site.url}/credentials/technician-license.jpg`,
  },
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: "EPA Section 608 Universal",
    identifier: "16-8019803514-2",
    recognizedBy: {
      "@type": "Organization",
      name: "U.S. Environmental Protection Agency",
    },
    url: `${site.url}/credentials/epa-certificate.pdf`,
  },
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "DBA Registration — Berne Appliance Repair",
    url: `${site.url}/credentials/dba-berne-appliance-repair.pdf`,
  },
  {
    "@type": "InsurancePolicy",
    name: "Certificate of Insurance",
    url: `${site.url}/credentials/coi.pdf`,
  },
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "exemption",
    name: "Florida Workers' Compensation Exemption",
    recognizedBy: {
      "@type": "Organization",
      name: "Florida Division of Workers' Compensation",
    },
    url: `${site.url}/credentials/wc-exemption.pdf`,
  },
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "registration",
    name: "Florida Annual Resale Certificate for Sales Tax",
    identifier: "16-8019803514-2",
    recognizedBy: {
      "@type": "Organization",
      name: "Florida Department of Revenue",
    },
    url: `${site.url}/credentials/florida-resale-certificate.pdf`,
  },
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "registration",
    name: "IRS EIN Assignment (CP 575)",
    recognizedBy: {
      "@type": "Organization",
      name: "Internal Revenue Service",
    },
    url: `${site.url}/credentials/ein-cp575.pdf`,
  },
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "registration",
    name: "IRS Form W-9 — Request for Taxpayer Identification Number",
    url: `${site.url}/credentials/w9.pdf`,
  },
]

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
    hasCredential: HAS_CREDENTIAL,
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
  "https://www.yelp.com/biz/berne-appliance-repair-hallandale-beach-4",
  "https://www.yelp.com/biz/berne-repair-sarasota",
  "https://www.yelp.com/biz/berne-repair-hallandale-beach-3",
  "https://www.yelp.com/biz/berne-repair-fort-myers",
  // Thumbtack
  "https://www.thumbtack.com/fl/tampa/appliance-repair/norma-appliance-repair/service/485458498671689761",
  "https://www.thumbtack.com/fl/naples/appliance-repair/berne-appliance-repair-naples-fort-myers/service/566337571507380237",
  // BBB (A+ rating profile, verified 2026-05-20)
  "https://www.bbb.org/us/fl/hallandale-beach/profile/appliance-repair/berne-inc-0633-92031029",
  // Miami Shores Chamber of Commerce member listing
  "https://business.miamishores.com/list/member/berne-appliance-repair-miami-2346",
  // Google Business
  "https://share.google/sSDq9B0xar89bItSq",
  "https://share.google/6GQjQFqxDvYeOWZIp",
  "https://share.google/VCXebzL4hfcPcu3P5",
  "https://share.google/gH0RfcApFEEwD6zpy",
  "https://share.google/c2j6LHKohujVnmXge",
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
    founder: { "@id": `${site.url}/#founder` },
    foundingDate: "2015",
    hasCredential: HAS_CREDENTIAL,
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

/**
 * Standalone Person schema for Eugene Bernitsky, founder of the Berne
 * family of brands. Emit on the homepage only — search engines stitch the
 * node into the Organization graph via the shared #founder @id reference.
 */
export function founderSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#founder`,
    name: "Eugene Bernitsky",
    jobTitle: "Founder & CEO",
    worksFor: { "@id": `${site.url}/#organization` },
    sameAs: [
      "https://bernerepair.com/",
      "https://berne-repair.com/",
      "https://www.linkedin.com/in/eugene-bernitsky-b52763364/",
    ],
  }
}

/**
 * Per-technician Person JSON-LD. Adds verifiable E-E-A-T signals:
 *   - hasCredential (EPA Section 608, FL technician license)
 *   - knowsAbout (specialties)
 *   - knowsLanguage (en / ru / es)
 *   - worksFor reference to the #organization node
 *
 * Emit array of these on /about (all techs) and top 5 on home.
 */
export function personJsonLd(tech: TeamMember) {
  const node: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/about#person-${tech.slug}`,
    name: tech.name,
    image: `${site.url}${tech.photo}`,
    jobTitle: tech.role,
    worksFor: { "@id": `${site.url}/#organization` },
    knowsAbout: ["Appliance Repair", ...tech.specialties],
    knowsLanguage: tech.languages,
    hasCredential: tech.credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: c.category,
      name: c.name,
    })),
    url: `${site.url}/about`,
  }
  if (tech.givenName) node.givenName = tech.givenName
  if (tech.familyName) node.familyName = tech.familyName
  if (tech.sameAs && tech.sameAs.length > 0) node.sameAs = tech.sameAs
  if (tech.bio) node.description = tech.bio
  return node
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
    serviceType: args.name,
    description: args.description,
    url: args.url,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#localbusiness`,
      name: site.name,
      telephone: site.phone,
      url: site.url,
    },
    areaServed: args.city
      ? { "@type": "City", name: args.city }
      : [
          { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" },
          { "@type": "AdministrativeArea", name: "Broward County, FL" },
          { "@type": "AdministrativeArea", name: "Palm Beach County, FL" },
        ],
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "USD",
      description: "$89 commercial service call",
    },
  }
}

/**
 * Enriched BlogPosting schema for /blog/[slug] pages. Centralized so every
 * article emits the same structured fields (mainEntityOfPage, articleSection,
 * wordCount, keywords, alternativeHeadline, author Person + publisher) without
 * each page hand-rolling the shape.
 */
export function blogPostingSchema(args: {
  url: string
  headline: string
  alternativeHeadline?: string
  description: string
  image?: string
  datePublished: string
  dateModified: string
  authorName: string
  articleSection?: string
  wordCount?: number
  keywords?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${args.url}#blogposting`,
    headline: args.headline.slice(0, 110),
    ...(args.alternativeHeadline && args.alternativeHeadline !== args.headline
      ? { alternativeHeadline: args.alternativeHeadline }
      : {}),
    description: args.description,
    image: args.image ?? `${site.url}/opengraph-image`,
    datePublished: args.datePublished,
    dateModified: args.dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": args.url,
    },
    author: {
      "@type": "Person",
      name: args.authorName,
      url: "https://berne-repair.com/about",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/opengraph-image`,
      },
    },
    inLanguage: "en-US",
    ...(args.articleSection ? { articleSection: args.articleSection } : {}),
    ...(typeof args.wordCount === "number" ? { wordCount: args.wordCount } : {}),
    ...(args.keywords && args.keywords.length > 0
      ? { keywords: args.keywords.join(", ") }
      : {}),
  }
}

/**
 * HowTo schema. Step text must reflect the actual procedure copy from the
 * article body. Fabricated or mis-extracted steps trigger a structured-data
 * mismatch penalty in Search Console.
 */
export type HowToStepInput = {
  name: string
  text: string
  url?: string
  image?: string
}

export function howToSchema(args: {
  url: string
  name: string
  description: string
  totalTimeISO: string
  estimatedCostUSD?: string
  supply?: string[]
  tool?: string[]
  steps: HowToStepInput[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${args.url}#howto`,
    name: args.name,
    description: args.description,
    totalTime: args.totalTimeISO,
    ...(args.estimatedCostUSD
      ? {
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "USD",
            value: args.estimatedCostUSD,
          },
        }
      : {}),
    ...(args.supply && args.supply.length > 0
      ? {
          supply: args.supply.map((s) => ({ "@type": "HowToSupply", name: s })),
        }
      : {}),
    ...(args.tool && args.tool.length > 0
      ? {
          tool: args.tool.map((t) => ({ "@type": "HowToTool", name: t })),
        }
      : {}),
    step: args.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: s.url ?? `${args.url}#step${i + 1}`,
      ...(s.image ? { image: s.image } : {}),
    })),
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

