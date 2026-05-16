import type { MetadataRoute } from "next"
import { site } from "@/lib/site"
import { cities } from "@/lib/data/cities"
import { primaryServices, services } from "@/lib/data/services"

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
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }))

  const serviceDetails = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
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

  const cityServicePages = cities.flatMap((c) =>
    primaryServices.map((s) => ({
      url: `${base}/${c.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  )

  return [...staticPaths, ...serviceDetails, ...cityPages, ...cityServicePages]
}
