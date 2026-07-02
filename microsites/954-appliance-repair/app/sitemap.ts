import type { MetadataRoute } from "next"
import { site } from "@/lib/site"
import { SERVICES } from "@/lib/services"
import { CITIES } from "@/lib/cities"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-07-02")
  const staticPaths = ["/", "/about", "/contact", "/reviews"]
  const servicePaths = SERVICES.map((s) => `/services/${s.slug}`)
  const cityPaths = CITIES.map((c) => `/areas/${c.slug}`)

  return [...staticPaths, ...servicePaths, ...cityPaths].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services") ? 0.8 : 0.7,
  }))
}
