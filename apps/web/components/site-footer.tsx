import Link from "next/link"
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react"
import { site } from "@/lib/site"
import { citiesByCounty } from "@/lib/data/cities"
import { primaryServices } from "@/lib/data/services"

const quick = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/brands", label: "Brands" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/become-a-client", label: "Become a Client" },
  { href: "/request-dispatch", label: "Request Dispatch" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function SiteFooter() {
  const counties = citiesByCounty()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-background text-foreground font-semibold"
              >
                B
              </span>
              <span className="text-base font-semibold tracking-tight">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
              Commercial equipment repair across South Florida — refrigeration,
              restaurant equipment, ice machines and commercial laundry.
              Enterprise dispatch and vendor-ready service.
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
                <span>{site.address.locality}, {site.address.region}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="mt-0.5 size-4 shrink-0" />
                <span>{site.licenses}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-background/60">
              Services
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {primaryServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
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
              Company
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {quick.map((q) => (
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
              Service Areas
            </div>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-xs sm:grid-cols-3">
              {counties.map((c) =>
                c.items.slice(0, 8).map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="text-background/70 hover:text-background"
                  >
                    {city.name}
                  </Link>
                )),
              )}
            </div>
            <Link
              href="/service-areas"
              className="mt-3 inline-block text-xs font-medium text-background hover:underline"
            >
              View all service areas →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-background/10 pt-6 text-xs text-background/60 sm:flex-row sm:items-center">
          <span>© {year} {site.name}. All rights reserved.</span>
          <span>Commercial service call: {site.serviceCall}</span>
        </div>
      </div>
    </footer>
  )
}
