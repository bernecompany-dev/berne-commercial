import Link from "next/link"
import { site } from "@/lib/site"
import { SERVICES } from "@/lib/services"
import { CITIES } from "@/lib/cities"

export function SiteFooter() {
  const year = 2026
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <h4>{site.name}</h4>
            <p className="muted">
              Independent, same-day appliance repair serving {site.serviceArea}.
              Refrigerators, washers, dryers, dishwashers, ovens, and ranges —
              major brands, honest quotes.
            </p>
            <p>
              <a className="btn btn--primary" href={site.phoneHref}>
                Call {site.phone}
              </a>
            </p>
          </div>
          <div>
            <h4>Repairs</h4>
            <ul className="footer__links">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.appliance} repair</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Service areas</h4>
            <ul className="footer__links">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/areas/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bar">
          <span>
            © {year} {site.name}. Part of a South Florida appliance-service
            network.
          </span>
          <span>
            <Link href="/about">About</Link> · <Link href="/contact">Contact</Link>{" "}
            · {site.hours}
          </span>
        </div>
      </div>
    </footer>
  )
}
