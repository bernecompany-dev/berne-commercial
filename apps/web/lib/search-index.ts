/**
 * Static search index for berne-commercial.com.
 *
 * Compile-time index over services, industries, brands, blog articles, and
 * top-level pages. No DB — /search filters this in-memory on every request.
 *
 * Scoring weights:
 *   title exact phrase    : +12
 *   title token match     : +6/token
 *   slug token match      : +4/token
 *   tag exact match       : +3/token
 *   description token     : +1/token
 */

import { publishedArticles } from "./blog/articles"
import { cities } from "./data/cities"
import { industries } from "./data/industries"
import { services } from "./data/services"
import { brands } from "./data/brands"
import { brandProfiles } from "./data/brand-profiles"

export type SearchKind =
  | "service"
  | "industry"
  | "city"
  | "brand"
  | "article"
  | "page"

export type SearchEntry = {
  kind: SearchKind
  title: string
  slug: string
  text: string
  url: string
  tags?: string[]
}

export type SearchHit = SearchEntry & { score: number }

const STATIC_PAGES: SearchEntry[] = [
  {
    kind: "page",
    title: "Home",
    slug: "/",
    text: "Commercial appliance and equipment repair across South Florida. Refrigeration, ice machines, dishwashers, fryers, espresso.",
    url: "/",
    tags: ["home", "commercial"],
  },
  {
    kind: "page",
    title: "All commercial services",
    slug: "/services",
    text: "Commercial refrigeration, ice machines, restaurant equipment, ventilation, vending, laundry.",
    url: "/services",
    tags: ["services", "commercial"],
  },
  {
    kind: "page",
    title: "Industries served",
    slug: "/industries",
    text: "Restaurants, hotels, grocery, food production, hospitals, schools, condo buildings, franchises.",
    url: "/industries",
    tags: ["industries"],
  },
  {
    kind: "page",
    title: "Brands we service",
    slug: "/brands",
    text: "Hobart, Vulcan, True, Manitowoc, Hoshizaki, Rational, Garland, Traulsen, Scotsman, Beverage-Air.",
    url: "/brands",
    tags: ["brands"],
  },
  {
    kind: "page",
    title: "Service areas",
    slug: "/service-areas",
    text: "Miami-Dade, Broward, and Palm Beach commercial coverage map.",
    url: "/service-areas",
    tags: ["areas", "coverage"],
  },
  {
    kind: "page",
    title: "Field notes blog",
    slug: "/blog",
    text: "Commercial equipment repair guides written by the technicians on our trucks.",
    url: "/blog",
    tags: ["blog", "guides"],
  },
  {
    kind: "page",
    title: "Request dispatch",
    slug: "/request-dispatch",
    text: "Describe the equipment issue and we'll dispatch a commercial technician.",
    url: "/request-dispatch",
    tags: ["dispatch", "request"],
  },
  {
    kind: "page",
    title: "Become a client",
    slug: "/become-a-client",
    text: "Service contracts, scheduled maintenance, and priority dispatch for multi-site clients.",
    url: "/become-a-client",
    tags: ["client", "contract"],
  },
  {
    kind: "page",
    title: "About Berne Commercial",
    slug: "/about",
    text: "Commercial division of the Berne family — same techs, parts, and dispatch infrastructure.",
    url: "/about",
    tags: ["about"],
  },
  {
    kind: "page",
    title: "Our team",
    slug: "/team",
    text: "Meet the commercial dispatch + technician team.",
    url: "/team",
    tags: ["team"],
  },
  {
    kind: "page",
    title: "Credentials",
    slug: "/credentials",
    text: "Florida technician licenses, EPA 608, insurance, MSA World membership.",
    url: "/credentials",
    tags: ["credentials", "license", "insurance"],
  },
  {
    kind: "page",
    title: "Contact",
    slug: "/contact",
    text: "Phone, dispatch email, address.",
    url: "/contact",
    tags: ["contact"],
  },
]

let cached: SearchEntry[] | null = null

export function buildIndex(): SearchEntry[] {
  if (cached) return cached
  const entries: SearchEntry[] = []

  // Services
  for (const s of services) {
    entries.push({
      kind: "service",
      title: s.title,
      slug: `/services/${s.slug}`,
      text: s.summary,
      url: `/services/${s.slug}`,
      tags: [s.shortTitle, s.category],
    })
  }

  // Industries
  for (const ind of industries) {
    entries.push({
      kind: "industry",
      title: `${ind.name} — equipment service`,
      slug: `/industries/${ind.slug}`,
      text: ind.blurb,
      url: `/industries/${ind.slug}`,
      tags: [ind.name],
    })
  }

  // Brand profiles (long-form pages)
  const profiled = new Set<string>()
  for (const bp of brandProfiles) {
    entries.push({
      kind: "brand",
      title: `${bp.name} commercial repair`,
      slug: `/brands/${bp.slug}`,
      text: bp.teaser,
      url: `/brands/${bp.slug}`,
      tags: [bp.name, ...bp.keywords.slice(0, 6)],
    })
    profiled.add(bp.name.toLowerCase())
  }

  // Other brands (no individual profile page yet — surface as /brands hits)
  for (const b of brands) {
    if (!profiled.has(b.name.toLowerCase())) {
      entries.push({
        kind: "brand",
        title: `${b.name} commercial repair`,
        slug: `/brands`,
        text: `Berne Commercial technicians service ${b.name} equipment across South Florida.`,
        url: `/brands`,
        tags: [b.name],
      })
    }
  }

  // Cities — commercial site renders /[city] route at root
  for (const c of cities) {
    entries.push({
      kind: "city",
      title: `${c.name} — commercial repair`,
      slug: `/${c.slug}`,
      text: `Commercial appliance and equipment repair in ${c.name}.`,
      url: `/${c.slug}`,
      tags: [c.county],
    })
  }

  // Blog articles
  for (const a of publishedArticles()) {
    entries.push({
      kind: "article",
      title: a.title,
      slug: `/blog/${a.slug}`,
      text: a.description,
      url: `/blog/${a.slug}`,
      tags: [a.category, ...(a.tags ?? [])],
    })
  }

  entries.push(...STATIC_PAGES)

  cached = entries
  return entries
}

export function tokenize(q: string): string[] {
  return q
    .toLowerCase()
    .split(/[^a-z0-9-]+/)
    .filter((t) => t.length >= 2)
}

export function scoreEntry(entry: SearchEntry, tokens: string[], rawQuery: string): number {
  if (tokens.length === 0) return 0

  const titleLc = entry.title.toLowerCase()
  const slugLc = entry.slug.toLowerCase()
  const textLc = entry.text.toLowerCase()
  const tagsLc = (entry.tags ?? []).map((t) => t.toLowerCase())
  const qLc = rawQuery.toLowerCase().trim()

  let score = 0
  if (qLc && titleLc.includes(qLc)) score += 12
  if (qLc && slugLc.includes(qLc)) score += 4

  for (const tok of tokens) {
    if (!tok) continue
    if (titleLc.includes(tok)) score += 6
    if (slugLc.includes(tok)) score += 4
    if (tagsLc.some((t) => t === tok || t.includes(tok))) score += 3
    if (textLc.includes(tok)) score += 1
  }

  if (entry.kind === "page" && qLc && entry.title.toLowerCase() === qLc) {
    score += 4
  }

  return score
}

export function search(q: string, limit = 20): SearchHit[] {
  const tokens = tokenize(q)
  if (tokens.length === 0) return []
  const index = buildIndex()
  const scored: SearchHit[] = []
  for (const e of index) {
    const score = scoreEntry(e, tokens, q)
    if (score > 0) scored.push({ ...e, score })
  }
  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, limit)
}

export function kindLabel(k: SearchKind): string {
  switch (k) {
    case "service": return "Service"
    case "industry": return "Industry"
    case "city": return "Service area"
    case "brand": return "Brand"
    case "article": return "Article"
    case "page": return "Page"
  }
}

export function kindLabelEs(k: SearchKind): string {
  switch (k) {
    case "service": return "Servicio"
    case "industry": return "Industria"
    case "city": return "Área de servicio"
    case "brand": return "Marca"
    case "article": return "Artículo"
    case "page": return "Página"
  }
}

export function toEsUrl(url: string): string {
  if (url === "/") return "/es"
  if (url.startsWith("/es")) return url
  if (url.startsWith("/blog")) return url
  return `/es${url}`
}
