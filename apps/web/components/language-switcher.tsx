"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Languages } from "lucide-react"
import { altLocale, type Locale } from "@/lib/i18n/config"

function detectLocale(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en"
}

function toAlt(pathname: string, target: Locale): string {
  if (target === "es") {
    if (pathname === "/") return "/es"
    return `/es${pathname}`
  }
  // target = en
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
