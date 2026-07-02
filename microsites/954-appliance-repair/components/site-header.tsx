import Link from "next/link"
import { Logo } from "./logo"
import { site, NAV } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap site-header__row">
        <Logo />
        <nav className="nav" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-cta">
          <a className="btn btn--phone" href={site.phoneHref}>
            {site.phone}
          </a>
        </div>
      </div>
    </header>
  )
}
