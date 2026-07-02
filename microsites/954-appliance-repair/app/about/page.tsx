import type { Metadata } from "next"
import { site } from "@/lib/site"
import { CtaBand } from "@/components/cta-band"
import { metaFor } from "@/lib/seo"

export const metadata: Metadata = metaFor({
  title: "About — Broward's Local Appliance Repair Team",
  description:
    "954 Appliance Repair is a Broward-County appliance service built on same-day response, honest quotes, and first-visit fixes. Meet the team behind the wrench.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="wrap prose">
          <p className="eyebrow">About us</p>
          <h1>Broward's local appliance repair team</h1>
          <p className="lede">
            954 Appliance Repair is a service-area business built around one
            idea: get your appliance working again fast, without the runaround
            or the padded bill.
          </p>

          <h2>Why homeowners call us</h2>
          <p>
            When a refrigerator quits or a washer floods the laundry room, you
            don't want a week-long wait and a vague "we'll take a look." Our
            technicians show up with the parts that fail most, diagnose the real
            problem, and quote a firm price before touching anything. Most common
            repairs are finished on the same visit.
          </p>

          <h2>Straightforward from the first call</h2>
          <ul>
            <li>
              <strong>Up-front pricing.</strong> You approve the repair cost
              before we start — no surprise charges after.
            </li>
            <li>
              <strong>First-visit fixes.</strong> Common parts ride on the truck,
              so we're not scheduling a second trip for a $30 component.
            </li>
            <li>
              <strong>Honest advice.</strong> If an old appliance isn't worth
              repairing, we'll tell you plainly instead of selling you a job.
            </li>
            <li>
              <strong>Local to Broward.</strong> We know the buildings, the
              coastal humidity, and the brands that dominate kitchens here.
            </li>
          </ul>

          <h2>What we work on</h2>
          <p>
            Refrigerators, washers, dryers, dishwashers, ovens, and ranges —
            gas and electric — across all major brands including Samsung, LG,
            Whirlpool, GE, Maytag, Frigidaire, Bosch, KitchenAid, and Sub-Zero.
          </p>

          <h2>Part of a South Florida network</h2>
          <p>
            954 Appliance Repair is one of several independent appliance-service
            brands operating across South Florida. That network means deeper
            parts availability and technician coverage — while your service, your
            quote, and your call stay local to Broward.
          </p>

          <p style={{ marginTop: "2rem" }}>
            <a className="btn btn--primary btn--lg" href={site.phoneHref}>
              Call {site.phone}
            </a>
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
