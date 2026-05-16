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
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "/es" ? 0.9 : 0.6,
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

  return [
    ...staticPaths,
    ...esStaticPaths,
    ...serviceDetails,
    ...esServiceDetails,
    ...cityPages,
    ...esCityPages,
    ...cityServicePages,
    ...esCityServicePages,
  ]
}
