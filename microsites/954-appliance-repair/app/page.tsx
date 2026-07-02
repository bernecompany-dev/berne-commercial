import Link from "next/link"
import { site } from "@/lib/site"
import { SERVICES } from "@/lib/services"
import { CITIES } from "@/lib/cities"
import { LeadForm } from "@/components/lead-form"
import { CtaBand } from "@/components/cta-band"
import { Faq } from "@/components/faq"
import { JsonLd } from "@/components/json-ld"
import { faqSchema } from "@/lib/seo"

const HOME_FAQS = [
  {
    q: "How soon can you repair my appliance?",
    a: "For most calls in Broward we offer same-day or next-morning appointments. No-cool refrigerator jobs get priority since food is on the line.",
  },
  {
    q: "Do you charge for a diagnosis?",
    a: "We give a firm repair quote before any work begins, so you always approve the price first. There are no surprise charges after the fact.",
  },
  {
    q: "Which brands do you work on?",
    a: "All the majors — Samsung, LG, Whirlpool, GE, Maytag, Frigidaire, Bosch, KitchenAid, Sub-Zero and more, across refrigerators, laundry, dishwashers, ovens and ranges.",
  },
  {
    q: "What areas do you cover?",
    a: "Broward County — Fort Lauderdale, Hollywood, Pembroke Pines, Pompano Beach, Coral Springs, Davie and the surrounding cities.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* hero */}
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <p className="eyebrow">Broward County · {site.areaCode}</p>
            <h1>Same-day appliance repair, done right the first time.</h1>
            <p className="lede">
              Fridge not cooling? Washer won't drain? Our Broward technicians
              carry the parts that fail most, so most repairs are finished on the
              first visit — with an honest quote before we start.
            </p>
            <ul className="hero__points">
              <li>
                <span className="tick">✓</span> Same-day &amp; next-day
                appointments across Broward
              </li>
              <li>
                <span className="tick">✓</span> Up-front pricing — you approve
                before we work
              </li>
              <li>
                <span className="tick">✓</span> All major brands, common parts on
                the truck
              </li>
            </ul>
            <div className="cta-row">
              <a className="btn btn--phone btn--lg" href={site.phoneHref}>
                Call {site.phone}
              </a>
              <a className="btn btn--ghost btn--lg" href="#quote">
                Get a quote
              </a>
            </div>
          </div>
          <div id="quote-anchor">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* services */}
      <section className="section" id="services">
        <div className="wrap">
          <p className="eyebrow">What we fix</p>
          <h2>Appliance repairs we handle every day</h2>
          <p className="lede">
            Six core repairs, one straightforward promise: a real diagnosis and a
            price you approve before any work starts.
          </p>
          <div className="grid grid--3" style={{ marginTop: "2rem" }}>
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card">
                <h3>{s.appliance} Repair</h3>
                <p>{s.short}</p>
                <span className="card__more">See common problems →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* areas */}
      <section className="section section--sand" id="areas">
        <div className="wrap">
          <p className="eyebrow">Where we work</p>
          <h2>Serving all of Broward County</h2>
          <p className="lede">
            Based in the {site.areaCode} and out across the county daily — from
            the coast to the western suburbs.
          </p>
          <div className="grid grid--3" style={{ marginTop: "2rem" }}>
            {CITIES.map((c) => (
              <Link key={c.slug} href={`/areas/${c.slug}`} className="card">
                <h3>{c.name}</h3>
                <p>{c.blurb}</p>
                <span className="card__more">Local service details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h2>Three steps to a working appliance</h2>
          <div className="grid grid--3" style={{ marginTop: "2rem" }}>
            <div className="card">
              <h3>1. Tell us what's wrong</h3>
              <p>Call or send the form. We ask a few questions so the tech arrives with the right parts.</p>
            </div>
            <div className="card">
              <h3>2. Diagnose &amp; quote</h3>
              <p>We find the actual fault and give you a firm price. You decide before any work begins.</p>
            </div>
            <div className="card">
              <h3>3. Fixed, usually same visit</h3>
              <p>Most common repairs are completed on the spot with parts from the truck.</p>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="section section--sand">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <p className="eyebrow">Good to know</p>
          <h2>Frequently asked questions</h2>
          <div style={{ marginTop: "1.5rem" }}>
            <Faq items={HOME_FAQS} />
          </div>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={faqSchema("/", HOME_FAQS)} />
    </>
  )
}
