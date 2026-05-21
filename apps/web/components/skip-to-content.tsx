"use client"

/**
 * Skip-to-content link — WCAG 2.4.1 (Bypass Blocks).
 *
 * Hidden until focused; jumps to the page's <main id="main"> region so
 * keyboard / screen-reader users can skip the navbar.
 *
 * Rendered globally from `app/layout.tsx`. Pages MUST emit a `<main id="main">`
 * element for the anchor to land — `PageShell` + the home `<main>` in
 * `app/page.tsx` and `app/es/page.tsx` already meet this contract.
 *
 * Locale is detected from the pathname so the visible-on-focus label is
 * localized to ES on `/es/*` routes (`locale` prop is accepted for backwards
 * compat / SSR-test usage but `usePathname` wins at runtime).
 */
import { usePathname } from "next/navigation"
import type { Locale } from "@/lib/i18n/config"

export function SkipToContent({ locale }: { locale?: Locale } = {}) {
  const pathname = usePathname() ?? "/"
  const detectedIsEs = pathname.startsWith("/es")
  const isEs = locale ? locale === "es" : detectedIsEs
  const label = isEs ? "Saltar al contenido principal" : "Skip to main content"
  return (
    <a
      href="#main"
      className="
        sr-only
        focus:not-sr-only
        focus:fixed focus:top-2 focus:left-2 focus:z-[100]
        focus:rounded-md focus:bg-background focus:px-4 focus:py-2
        focus:text-sm focus:font-medium focus:text-foreground
        focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
        focus:shadow-lg focus:border focus:border-border
      "
    >
      {label}
    </a>
  )
}
