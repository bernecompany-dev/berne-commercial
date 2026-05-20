import type { MetadataRoute } from "next"
import { site } from "@/lib/site"
import { cities } from "@/lib/data/cities"
import { primaryServices, services } from "@/lib/data/services"
import { brandProfiles } from "@/lib/data/brand-profiles"
import { INDUSTRY_PROFILES } from "@/lib/data/industry-profiles"
import { publishedArticles } from "@/lib/blog/articles"
import { team } from "@/lib/data/team"
import { BACK_OFFICE } from "@/lib/data/team-bios"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url
  const now = new Date()

  const staticPaths = [
    "",
    "/about",
    "/services",
    "/industries",
    "/brands",
    "/service-areas",
    "/become-a-client",
    "/request-dispatch",
    "/contact",
    "/blog",
    "/team",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }))

  const esStaticPaths = [
    "/es",
    "/es/about",
    "/es/services",
    "/es/industries",
    "/es/brands",
    "/es/service-areas",
    "/es/become-a-client",
    "/es/contact",
    "/es/request-dispatch",
    "/es/blog",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "/es" ? 0.9 : 0.6,
  }))

  const blogPosts = publishedArticles(now).map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.updatedAt ?? a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const serviceDetails = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  const esServiceDetails = services.map((s) => ({
    url: `${base}/es/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }))

  const brandPages = brandProfiles.map((b) => ({
    url: `${base}/brands/${b.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  const industryPages = INDUSTRY_PROFILES.map((p) => ({
    url: `${base}/industries/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  const esIndustryPages = INDUSTRY_PROFILES.map((p) => ({
    url: `${base}/es/industries/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  const cityPages = cities.map((c) => ({
    url: `${base}/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  const esCityPages = cities.map((c) => ({
    url: `${base}/es/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  const cityServicePages = cities.flatMap((c) =>
    primaryServices.map((s) => ({
      url: `${base}/${c.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  )

  const esCityServicePages = cities.flatMap((c) =>
    primaryServices.map((s) => ({
      url: `${base}/es/${c.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
  )

  const teamPages = [
    ...team.map((t) => `/team/${t.slug}`),
    ...BACK_OFFICE.map((b) => `/team/${b.slug}`),
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [
    ...staticPaths,
    ...esStaticPaths,
    ...blogPosts,
    ...serviceDetails,
    ...esServiceDetails,
    ...brandPages,
    ...industryPages,
    ...esIndustryPages,
    ...cityPages,
    ...esCityPages,
    ...cityServicePages,
    ...esCityServicePages,
    ...teamPages,
  ]
}
