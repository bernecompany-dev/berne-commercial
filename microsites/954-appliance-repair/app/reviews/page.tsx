import type { Metadata } from "next"
import { site } from "@/lib/site"
import { CtaBand } from "@/components/cta-band"
import { metaFor } from "@/lib/seo"

export const metadata: Metadata = metaFor({
  title: "Reviews — Broward County Appliance Repair",
  description:
    "See what to expect from 954 Appliance Repair and leave a review after your Broward-County service call.",
  path: "/reviews",
})

// Honest placeholder. We do NOT fabricate reviews or emit a fake
// aggregateRating (that's a structured-data violation and a trust problem).
// Once the Google Business Profile has verified reviews, wire real testimonials
// here and set site.reviews.reviewCount to enable the rating schema.
export default function ReviewsPage() {
  return (
    <>
      <section className="section">
        <div className="wrap prose">
          <p className="eyebrow">Reviews</p>
          <h1>What to expect from a 954 Appliance Repair visit</h1>
          <p className="lede">
            We're building our public review profile the honest way — one
            completed job at a time. Here's the standard every Broward call is
            held to.
          </p>

          <h2>Our service standard</h2>
          <ul>
            <li>A firm, up-front quote before any work begins.</li>
            <li>Same-day or next-day scheduling whenever possible.</li>
            <li>Common parts on the truck for first-visit fixes.</li>
            <li>Straight answers on repair-vs-replace — no upselling.</li>
          </ul>

          <div className="callout">
            <strong>Recently served by us?</strong> Your feedback helps other
            Broward homeowners find honest repair. Call{" "}
            <a href={site.phoneHref} style={{ color: "#ffd9c7" }}>
              {site.phone}
            </a>{" "}
            and we'll send you a link to leave a Google review.
          </div>

          <p className="muted">
            We publish only genuine, verified customer reviews here — no stock
            quotes, no invented names.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
