import { SiteNavbar } from "./site-navbar"
import { SiteFooter } from "./site-footer"
import { MobileCtaBar } from "./mobile-cta-bar"
import { TrustStrip } from "./trust-strip"
import type { Locale } from "@/lib/i18n/config"

/**
 * PageShell is the chrome for every inner route (about, services, brands,
 * industries, contact, team, credentials, city pages, blog).
 *
 * `showTrustStrip` defaults to `true` so the rating/dispatch/licensed strip
 * surfaces sitewide directly under the navbar — matching home + about. Pages
 * that already mount their own hero-adjacent trust strip (or that intentionally
 * skip it) can pass `showTrustStrip={false}`.
 */
export function PageShell({
  children,
  locale = "en",
  showTrustStrip = true,
}: {
  children: React.ReactNode
  locale?: Locale
  showTrustStrip?: boolean
}) {
  return (
    <>
      <SiteNavbar locale={locale} />
      {showTrustStrip ? <TrustStrip /> : null}
      <main id="main" tabIndex={-1} className="pb-20 md:pb-0 focus:outline-none">{children}</main>
      <SiteFooter locale={locale} />
      <MobileCtaBar locale={locale} />
    </>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string
  title: string
  description?: string
  children?: React.ReactNode
}) {
  return (
    <section className="border-b border-border/60 bg-gradient-to-b from-background to-accent/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow ? (
            <div className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
              {eyebrow}
            </div>
          ) : null}
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}
