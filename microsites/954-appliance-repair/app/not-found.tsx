import Link from "next/link"
import { site } from "@/lib/site"

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap center" style={{ maxWidth: 620 }}>
        <p className="eyebrow">404</p>
        <h1>We couldn't find that page</h1>
        <p className="lede" style={{ margin: "0 auto 1.5rem" }}>
          The page may have moved. Let's get you back to a working appliance
          instead.
        </p>
        <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn--primary btn--lg" href="/">
            Back to home
          </Link>
          <a className="btn btn--phone btn--lg" href={site.phoneHref}>
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
