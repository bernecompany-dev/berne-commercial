"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import { AnchorButton, LinkButton } from "./link-button"
import { BrandMark } from "./brand-mark"
import { LanguageSwitcher } from "./language-switcher"
import { site } from "@/lib/site"
import { t } from "@/lib/i18n/dict"
import type { Locale } from "@/lib/i18n/config"
import { cn } from "@workspace/ui/lib/utils"

export function SiteNavbar({ locale = "en" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname() ?? "/"
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")
  const tr = t(locale)
  const p = locale === "es" ? "/es" : ""
  const home = locale === "es" ? "/es" : "/"

  const nav = [
    { href: `${p}/services`, label: tr.nav.services },
    { href: `${p}/industries`, label: tr.nav.industries },
    { href: `${p}/brands`, label: tr.nav.brands },
    { href: `${p}/service-areas`, label: tr.nav.serviceAreas },
    { href: `${p}/become-a-client`, label: tr.nav.becomeClient },
    { href: `${p}/about`, label: tr.nav.about },
    { href: `${p}/careers`, label: tr.nav.careers },
    { href: `${p}/contact`, label: tr.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href={home} className="flex items-center" aria-label={site.name}>
          <BrandMark />
        </Link>

        <nav aria-label={locale === "es" ? "Principal" : "Primary"} className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={cn(
                "text-sm transition-colors",
                isActive(n.href)
                  ? "font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Phone + dispatch surface from md so tablets (768–1023px) are never
            without a visible conversion CTA — the bottom bar is md:hidden. */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="hidden lg:block">
            <LanguageSwitcher compact />
          </div>
          <AnchorButton href={site.phoneHref} variant="ghost" size="sm" className="gap-2">
            <Phone className="size-4" />
            {site.phone}
          </AnchorButton>
          <LinkButton href={`${p}/request-dispatch`} size="sm">
            {tr.cta.requestDispatch}
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-md border border-border lg:hidden"
          aria-label={open ? (locale === "es" ? "Cerrar menú" : "Close menu") : (locale === "es" ? "Abrir menú" : "Open menu")}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border/60 bg-background lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav aria-label={locale === "es" ? "Móvil" : "Mobile"} className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={cn(
                "block rounded-md px-2 py-3 text-sm hover:bg-muted",
                isActive(n.href)
                  ? "font-medium text-foreground bg-muted/60"
                  : "text-foreground",
              )}
            >
              {n.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-3">
            <LanguageSwitcher />
            <AnchorButton href={site.phoneHref} variant="outline">
              <Phone className="size-4" /> {site.phone}
            </AnchorButton>
            <LinkButton
              href={`${p}/request-dispatch`}
              onClick={() => setOpen(false)}
            >
              {tr.cta.requestDispatch}
            </LinkButton>
          </div>
        </nav>
      </div>
    </header>
  )
}
