"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Languages } from "lucide-react"
import { altLocale, type Locale } from "@/lib/i18n/config"
import { BRAND_SERVICE_SLUGS } from "@/lib/data/brand-service-slugs"

function detectLocale(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en"
}

/**
 * EN sections that have NO Spanish counterpart. Blindly prefixing these with
 * /es produced sitewide 404 links (/es/compare/*, /es/team/*, /es/blog/<slug>).
 * Keep in sync with the app/es/ route tree.
 */
const EN_ONLY_PREFIXES = [
  "/compare",
  "/team",
  // No /es/reviews or /es/service-map route exists — fall back to /es home
  // instead of emitting a 404 link from the language switcher.
  "/reviews",
  "/service-map",
  "/services/medical-lab-refrigeration-repair",
  "/fort-lauderdale/medical-lab-refrigeration-repair",
  // Static brand-service routes (manitowoc, hoshizaki, …) — EN-only by
  // design. Slug list is type-synced with lib/data/brand-services.ts, so
  // future brand pages are covered automatically (W3-P1.1).
  ...BRAND_SERVICE_SLUGS.map((slug) => `/services/${slug}`),
]

function toAlt(pathname: string, target: Locale): string {
  if (target === "es") {
    if (pathname === "/") return "/es"
    if (
      EN_ONLY_PREFIXES.some(
        (p) => pathname === p || pathname.startsWith(`${p}/`),
      )
    ) {
      return "/es"
    }
    // Individual blog posts are EN-only; the ES blog index exists.
    if (pathname.startsWith("/blog/")) return "/es/blog"
    return `/es${pathname}`
  }
  // target = en — every ES route has an EN counterpart.
  if (pathname === "/es") return "/"
  if (pathname.startsWith("/es/")) return pathname.replace(/^\/es/, "")
  return pathname
}

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname() ?? "/"
  const current = detectLocale(pathname)
  const target = altLocale(current)
  const href = toAlt(pathname, target)

  return (
    <Link
      href={href}
      hrefLang={target}
      aria-label={target === "es" ? "Ver en español" : "View in English"}
      className={
        compact
          ? "inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-card px-2.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          : "inline-flex h-9 items-center gap-2 rounded-md border border-border bg-card px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      }
    >
      <Languages className={compact ? "size-3.5" : "size-4"} />
      {target === "es" ? "Español" : "English"}
    </Link>
  )
}
