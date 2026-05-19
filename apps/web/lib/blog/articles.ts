import { iceMachineNotMakingIce } from "./content/ice-machine-not-making-ice-restaurant"
import { walkInCoolerTemperature } from "./content/commercial-walk-in-cooler-temperature-issues"
import { commercialDishwasherLowPressure } from "./content/commercial-dishwasher-low-pressure"
import { espressoMachineNoPressure } from "./content/espresso-machine-no-pressure-cafe"
import { commercialFryerThermostat } from "./content/commercial-fryer-thermostat-issues"

export type ArticleSection = {
  heading: string
  body: string[]
}

export type ArticleLink = {
  label: string
  href: string
}

export type Article = {
  slug: string
  title: string
  description: string
  publishedAt: string // ISO yyyy-mm-dd
  updatedAt?: string
  readingMinutes: number
  category: string
  tags: string[]
  lede: string
  sections: ArticleSection[]
  internalLinks: ArticleLink[]
  relatedSlugs?: string[]
}

export const articles: Article[] = [
  iceMachineNotMakingIce,
  walkInCoolerTemperature,
  commercialDishwasherLowPressure,
  espressoMachineNoPressure,
  commercialFryerThermostat,
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function publishedArticles(now: Date = new Date()): Article[] {
  return articles
    .filter((a) => new Date(a.publishedAt).getTime() <= now.getTime())
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
}

export function isPublished(article: Article, now: Date = new Date()): boolean {
  return new Date(article.publishedAt).getTime() <= now.getTime()
}

export function formatPublishDate(iso: string, locale: "en" | "es" = "en") {
  const d = new Date(iso)
  return d.toLocaleDateString(locale === "es" ? "es-US" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
