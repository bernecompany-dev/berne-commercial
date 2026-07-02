import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SERVICES, getService } from "@/lib/services"
import { CITIES } from "@/lib/cities"
import { site } from "@/lib/site"
import { metaFor, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo"
import { LeadForm } from "@/components/lead-form"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return {}
  return metaFor({
    title: `${s.title} in Broward County`,
    description: s.short,
    path: `/services/${s.slug}`,
  })
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) notFound()

  const path = `/services/${s.slug}`

  return (
    <>
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> → <span>{s.appliance} Repair</span>
        </nav>
      </div>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap split">
          <div className="prose">
            <p className="eyebrow">{s.appliance} · Broward County</p>
            <h1>{s.title} in Broward County</h1>
            <p className="lede">{s.intro}</p>

            <h2>Common problems &amp; what usually causes them</h2>
            <div className="symptoms">
              {s.symptoms.map((row, i) => (
                <div className="symptoms__row" key={i}>
                  <div className="symptoms__sign">{row.sign}</div>
                  <div className="symptoms__cause">{row.cause}</div>
                </div>
              ))}
            </div>

            <div className="callout">
              <strong>What it costs.</strong> {s.priceNote}
            </div>

            <h2>Brands we service</h2>
            <p className="muted">
              We stock the parts that fail most on these brands, so most{" "}
              {s.appliance.toLowerCase()} repairs are done on the first visit.
            </p>
            <ul className="chips">
              {s.brands.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <h2>Book {s.appliance.toLowerCase()} repair near you</h2>
            <p>
              We cover every corner of Broward. Pick your city for local details,
              or just{" "}
              <a href={site.phoneHref}>
                <strong>call {site.phone}</strong>
              </a>
              .
            </p>
            <ul className="chips">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/areas/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
            </ul>

            <h2>{s.appliance} repair FAQ</h2>
            <Faq items={s.faqs} />
          </div>

          <aside>
            <div className="sticky">
              <LeadForm presetService={s.title} />
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        heading={`${s.appliance} trouble? We can help today.`}
        sub="Same-day and next-day appointments across Broward County."
      />

      <JsonLd
        data={serviceSchema({
          name: s.title,
          description: s.short,
          path,
        })}
      />
      <JsonLd data={faqSchema(path, s.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: `${s.appliance} Repair`, path },
        ])}
      />
    </>
  )
}
