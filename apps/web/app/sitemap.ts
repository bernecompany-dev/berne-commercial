import type { MetadataRoute } from "next"
import { site } from "@/lib/site"
import { cities } from "@/lib/data/cities"
import { primaryServices, services } from "@/lib/data/services"
import { brandProfiles } from "@/lib/data/brand-profiles"
import { BRAND_SERVICES } from "@/lib/data/brand-services"
import { BRAND_COMPARISONS } from "@/lib/data/brand-comparisons"
import { INDUSTRY_PROFILES } from "@/lib/data/industry-profiles"
import { publishedArticles } from "@/lib/blog/articles"
import { team } from "@/lib/data/team"
import { BACK_OFFICE } from "@/lib/data/team-bios"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url
  const now = new Date()

  // ---- Sitemap priority + changefreq matrix (2026-05-20 tuning) ----
  // Google docs (and 2017 Mueller statement) confirm Google IGNORES the
  // <priority> field — but Bing, Yandex, DuckDuckGo, and several non-google
  // crawlers still respect it. Cost: zero. Upside: small. We set the matrix
  // honestly so secondary crawlers prioritise the same pages humans do.
  //
  // | Page type                       | priority | changefreq |
  // | Home (en + es)                  | 1.0 / .95| weekly     |
  // | Top service hubs                | 0.9      | weekly     |
  // | Industry hubs                   | 0.85     | monthly    |
  // | Brand pages                     | 0.85     | monthly    |
  // | City hubs                       | 0.85     | monthly    |
  // | City+service combos             | 0.8      | monthly    |
  // | /service-areas, /industries idx | 0.8      | monthly    |
  // | /about, /credentials, /team idx | 0.7      | monthly    |
  // | /contact, /request-dispatch     | 0.7      | yearly     |
  // | /blog index                     | 0.7      | weekly     |
  // | Blog posts (≤90 days)           | 0.7      | weekly     |
  // | Blog posts (older)              | 0.6      | monthly    |
  // | Team bios                       | 0.6      | yearly     |
  // | ES counterparts                 | -0.05    | same       |

  const STATIC_MATRIX: Record<
    string,
    { priority: number; changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" }
  > = {
    "": { priority: 1.0, changeFrequency: "weekly" },
    "/about": { priority: 0.7, changeFrequency: "monthly" },
    "/services": { priority: 0.9, changeFrequency: "weekly" },
    "/industries": { priority: 0.85, changeFrequency: "monthly" },
    "/brands": { priority: 0.85, changeFrequency: "monthly" },
    "/service-areas": { priority: 0.8, changeFrequency: "monthly" },
    "/become-a-client": { priority: 0.7, changeFrequency: "monthly" },
    "/careers": { priority: 0.7, changeFrequency: "monthly" },
    "/request-dispatch": { priority: 0.7, changeFrequency: "yearly" },
    "/contact": { priority: 0.7, changeFrequency: "yearly" },
    "/blog": { priority: 0.7, changeFrequency: "weekly" },
    "/team": { priority: 0.7, changeFrequency: "monthly" },
    "/credentials": { priority: 0.7, changeFrequency: "monthly" },
    "/privacy": { priority: 0.4, changeFrequency: "yearly" },
    "/terms": { priority: 0.4, changeFrequency: "yearly" },
    "/cookies": { priority: 0.4, changeFrequency: "yearly" },
  }
  const ES_DROP = 0.05
  const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000

  const staticPaths = Object.entries(STATIC_MATRIX).map(([p, cfg]) => ({
    url: `${base}${p}`,
    changeFrequency: cfg.changeFrequency,
    priority: cfg.priority,
  }))

  const esStaticPaths = Object.entries(STATIC_MATRIX)
    // /es is the home counterpart — emit it separately so we can priority=0.95
    // /es/team does not exist (team pages are EN-only) — listing it 404'd.
    .filter(([p]) => p !== "" && p !== "/team")
    .map(([p, cfg]) => ({
      url: `${base}/es${p}`,
      changeFrequency: cfg.changeFrequency,
      priority: Math.max(0.1, +(cfg.priority - ES_DROP).toFixed(2)),
    }))
  esStaticPaths.unshift({
    url: `${base}/es`,
    changeFrequency: "weekly" as const,
    priority: 0.95,
  })

  const blogPosts = publishedArticles(now).map((a) => {
    const ts = new Date(a.updatedAt ?? a.publishedAt)
    const isRecent = now.getTime() - ts.getTime() < NINETY_DAYS_MS
    return {
      url: `${base}/blog/${a.slug}`,
      lastModified: ts,
      changeFrequency: (isRecent ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: isRecent ? 0.7 : 0.6,
    }
  })

  const serviceDetails = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))
  // Static EN-only service page (not in services.ts by design — a services.ts
  // entry would spawn 140 phantom /{city}/ combo routes; see page comment).
  serviceDetails.push({
    url: `${base}/services/medical-lab-refrigeration-repair`,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  })

  // Brand-specific service pages (Content_Plan 2026-06-10) — same static
  // EN-only machinery as medical-lab. Honest lastmod from the data layer.
  const brandServicePages = BRAND_SERVICES.map((b) => ({
    url: `${base}/services/${b.slug}`,
    lastModified: new Date(`${b.datePublished}T12:00:00Z`),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  // City-specific medical/lab page (static route, outside the combo matrix).
  const specialtyCityPages = [
    {
      url: `${base}/fort-lauderdale/medical-lab-refrigeration-repair`,
      lastModified: new Date("2026-06-11T12:00:00Z"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  const esServiceDetails = services.map((s) => ({
    url: `${base}/es/services/${s.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }))

  const brandPages = brandProfiles.map((b) => ({
    url: `${base}/brands/${b.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  const esBrandPages = brandProfiles.map((b) => ({
    url: `${base}/es/brands/${b.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Brand comparison pages — long-form informational ("X vs Y") content.
  // English only for now; Spanish translations can follow.
  const compareIndex = [
    {
      url: `${base}/compare`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
  ]
  const comparePages = BRAND_COMPARISONS.map((c) => ({
    url: `${base}/compare/${c.slug}`,
    // Honest lastmod from the content layer (datePublished/dateModified) —
    // these are the site's strongest organic earners.
    lastModified: new Date(`${c.dateModified ?? c.datePublished}T12:00:00Z`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const industryPages = INDUSTRY_PROFILES.map((p) => ({
    url: `${base}/industries/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  const esIndustryPages = INDUSTRY_PROFILES.map((p) => ({
    url: `${base}/es/industries/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const cityPages = cities.map((c) => ({
    url: `${base}/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  const esCityPages = cities.map((c) => ({
    url: `${base}/es/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const cityServicePages = cities.flatMap((c) =>
    primaryServices.map((s) => ({
      url: `${base}/${c.slug}/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  )

  const esCityServicePages = cities.flatMap((c) =>
    primaryServices.map((s) => ({
      url: `${base}/es/${c.slug}/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  )

  const teamPages = [
    ...team.map((t) => `/team/${t.slug}`),
    ...BACK_OFFICE.map((b) => `/team/${b.slug}`),
  ].map((p) => ({
    url: `${base}${p}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }))

  return [
    ...staticPaths,
    ...esStaticPaths,
    ...blogPosts,
    ...serviceDetails,
    ...brandServicePages,
    ...specialtyCityPages,
    ...esServiceDetails,
    ...brandPages,
    ...esBrandPages,
    ...compareIndex,
    ...comparePages,
    ...industryPages,
    ...esIndustryPages,
    ...cityPages,
    ...esCityPages,
    ...cityServicePages,
    ...esCityServicePages,
    ...teamPages,
  ]
}
