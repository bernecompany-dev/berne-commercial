import { site } from "@/lib/site"

export function CtaBand({
  heading = "Appliance down? Let's get it running.",
  sub = "Same-day and next-day slots across Broward County.",
}: {
  heading?: string
  sub?: string
}) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <h2>{heading}</h2>
        <p style={{ fontSize: "1.1rem", opacity: 0.95 }}>{sub}</p>
        <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.2rem" }}>
          <a className="btn btn--phone btn--lg" href={site.phoneHref}>
            Call {site.phone}
          </a>
          <a className="btn btn--ghost btn--lg" href="/#quote">
            Request online
          </a>
        </div>
      </div>
    </section>
  )
}
