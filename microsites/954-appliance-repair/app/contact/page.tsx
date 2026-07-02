import type { Metadata } from "next"
import { site } from "@/lib/site"
import { LeadForm } from "@/components/lead-form"
import { metaFor } from "@/lib/seo"

export const metadata: Metadata = metaFor({
  title: "Contact — Broward County Appliance Repair",
  description:
    "Book appliance repair in Broward County. Call 954 Appliance Repair or send the form and we'll call back with a time and a price.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <section className="section">
      <div className="wrap split">
        <div className="prose">
          <p className="eyebrow">Get in touch</p>
          <h1>Book your Broward appliance repair</h1>
          <p className="lede">
            The fastest way to get on the schedule is to call. Prefer to type it
            out? Send the form and we'll call you right back.
          </p>

          <h2>Call or text</h2>
          <p>
            <a className="btn btn--phone btn--lg" href={site.phoneHref}>
              {site.phone}
            </a>
          </p>

          <h2>Hours</h2>
          <p>{site.hours}. After-hours messages are returned first thing the
            next morning.</p>

          <h2>Service area</h2>
          <p>
            {site.serviceArea} — including Fort Lauderdale, Hollywood, Pembroke
            Pines, Pompano Beach, Coral Springs, and Davie. We're a
            service-area business, so we come to you; there's no walk-in
            storefront.
          </p>

          <h2>Email</h2>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>

        <aside>
          <div className="sticky">
            <LeadForm />
          </div>
        </aside>
      </div>
    </section>
  )
}
