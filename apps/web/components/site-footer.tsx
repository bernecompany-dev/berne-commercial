import Link from "next/link"
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react"
import { BrandMark } from "./brand-mark"
import { SocialIcons } from "./social-icons"
import { site } from "@/lib/site"
import { citiesByCounty } from "@/lib/data/cities"
import { primaryServices } from "@/lib/data/services"
import { t } from "@/lib/i18n/dict"
import type { Locale } from "@/lib/i18n/config"

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const tr = t(locale)
  const counties = citiesByCounty()
  const year = new Date().getFullYear()
  const p = locale === "es" ? "/es" : ""

  // Two scannable buckets instead of one 13-link "Company" drawer:
  // browse = site sections (Services/Service Areas live in their own
  // columns already, so no duplicates here), company = who we are.
  const browse = [
    { href: `${p}/industries`, label: tr.nav.industries },
    { href: `${p}/brands`, label: tr.nav.brands },
    { href: `${p}/become-a-client`, label: tr.nav.becomeClient },
    { href: `${p}/request-dispatch`, label: tr.nav.requestDispatch },
    // /compare is EN-only — no /es prefix (avoids a sitewide 404 link).
    {
      href: "/compare",
      label: locale === "es" ? "Guías de equipos" : "Equipment guides",
    },
  ]
  const company = [
    { href: `${p}/about`, label: tr.nav.about },
    // /team is EN-only — no /es prefix (avoids a sitewide 404 link on every
    // ES page; same rationale as /compare in `browse` below).
    { href: "/team", label: locale === "es" ? "Equipo" : "Team" },
    // /reviews is EN-only (indexable, sitemapped) — was previously orphaned
    // with zero internal links. Same EN-only treatment as /team & /compare.
    { href: "/reviews", label: locale === "es" ? "Reseñas" : "Reviews" },
    { href: `${p}/careers`, label: locale === "es" ? "Carreras" : "Careers" },
    {
      href: `${p}/credentials`,
      label: locale === "es" ? "Credenciales" : "Credentials",
    },
    { href: `${p}/blog`, label: "Blog" },
    { href: `${p}/contact`, label: tr.nav.contact },
  ]

  return (
    <footer aria-label={locale === "es" ? "Pie de página" : "Footer"} className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <BrandMark tone="light" />
            <div className="mt-2 text-base font-semibold tracking-tight">
              {site.name}
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
              {locale === "es"
                ? "Reparación de equipo comercial en el Sur de Florida — refrigeración, equipo de restaurante, máquinas de hielo y lavandería comercial. Despacho corporativo y servicio listo para vendors."
                : "Commercial equipment repair across South Florida — refrigeration, restaurant equipment, ice machines and commercial laundry. Enterprise dispatch and vendor-ready service."}
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0" />
                <a href={site.phoneHref} className="hover:underline">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>{site.officeAddress}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="mt-0.5 size-4 shrink-0" />
                <span>{site.licenses}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="mt-0.5 size-4 shrink-0" />
                <a
                  href="https://msaworld.com/"
                  target="_blank"
                  rel="noopener noreferrer external"
                  className="hover:underline"
                >
                  {locale === "es" ? "Miembro de MSA World" : "MSA World Member"}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-background/60">
              {tr.footer.services}
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {primaryServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`${p}/services/${s.slug}`}
                    className="text-background/80 hover:text-background"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-background/60">
              {tr.footer.company}
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {company.map((q) => (
                <li key={q.href}>
                  <Link
                    href={q.href}
                    className="text-background/80 hover:text-background"
                  >
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-xs font-semibold uppercase tracking-wider text-background/60">
              {locale === "es" ? "Explorar" : "Browse"}
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {browse.map((q) => (
                <li key={q.href}>
                  <Link
                    href={q.href}
                    className="text-background/80 hover:text-background"
                  >
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-background/60">
              {tr.footer.serviceAreas}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs sm:grid-cols-3">
              {counties.map((c) =>
                c.items.slice(0, 8).map((city) => (
                  <Link
                    key={city.slug}
                    href={`${p}/${city.slug}`}
                    className="inline-block py-0.5 text-background/70 hover:text-background"
                  >
                    {city.name}
                  </Link>
                )),
              )}
            </div>
            <Link
              href={`${p}/service-areas`}
              className="mt-3 inline-block text-xs font-medium text-background hover:underline"
            >
              {tr.footer.viewAll}
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-background/60">
            {locale === "es" ? "Otras divisiones de Berne" : "Other Berne divisions"}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="https://bernerepair.com/"
              rel="noopener"
              className="group flex flex-col gap-1 rounded-lg border border-background/15 bg-background/5 p-4 transition-colors hover:border-background/40"
            >
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-background group-hover:underline">
                Berne Appliance Repair <ArrowUpRight className="size-3.5" aria-hidden />
              </span>
              <span className="text-xs leading-relaxed text-background/65">
                {locale === "es"
                  ? "Servicio residencial general en el Sur de Florida"
                  : "General residential service across South Florida"}
              </span>
            </a>
            <a
              href="https://www.berne-repair.com/"
              rel="noopener"
              className="group flex flex-col gap-1 rounded-lg border border-background/15 bg-background/5 p-4 transition-colors hover:border-background/40"
            >
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-background group-hover:underline">
                Berne Repair <ArrowUpRight className="size-3.5" aria-hidden />
              </span>
              <span className="text-xs leading-relaxed text-background/65">
                {locale === "es"
                  ? "Reparación premium de electrodomésticos — Sub-Zero, Wolf, Viking, Miele"
                  : "Premium appliance repair — Sub-Zero, Wolf, Viking, Miele"}
              </span>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6">
          <SocialIcons tone="light" locale={locale} />
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-background/10 pt-6 text-xs text-background/60 sm:flex-row sm:items-center">
          <span>{tr.footer.copyright(year)}</span>
          <span>{tr.footer.serviceCall}</span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-background/60">
          <Link href={`${p}/privacy`} className="hover:text-background">
            {locale === "es" ? "Privacidad" : "Privacy"}
          </Link>
          <span aria-hidden>·</span>
          <Link href={`${p}/terms`} className="hover:text-background">
            {locale === "es" ? "Términos" : "Terms"}
          </Link>
          <span aria-hidden>·</span>
          <Link href={`${p}/cookies`} className="hover:text-background">
            Cookies
          </Link>
          {/* "Sitemap" for humans = the service-areas index; crawlers find
              sitemap.xml via robots.txt and don't need an anchor. */}
          <span aria-hidden>·</span>
          <Link href={`${p}/service-areas`} className="hover:text-background">
            {locale === "es" ? "Mapa del sitio" : "Sitemap"}
          </Link>
          <span aria-hidden>·</span>
          <span className="text-background/70">
            {locale === "es"
              ? "GDPR / CCPA — escriba a "
              : "GDPR / CCPA — email "}
            <a href={`mailto:${site.email}`} className="hover:text-background">
              {site.email}
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
