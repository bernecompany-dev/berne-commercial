import type { Metadata } from "next"
import Image from "next/image"
import { PageHero, PageShell } from "@/components/page-shell"
import { LinkButton } from "@/components/link-button"
import { ReviewsSection } from "@/components/reviews-section"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, metaFor } from "@/lib/seo"
import { site } from "@/lib/site"
import { REVIEW_AGGREGATE } from "@/lib/data/reviews"

export const metadata: Metadata = metaFor({
  title: "Customer Reviews",
  description: `${REVIEW_AGGREGATE.ratingValue}★ from ${REVIEW_AGGREGATE.reviewCount} customers across the Berne family of appliance-repair brands. Real Google and Yelp reviews.`,
  path: "/reviews",
})

export default function ReviewsPage() {
  // The 4.79/871 AggregateRating lives on exactly ONE node sitewide — the
  // #localbusiness node emitted from app/layout.tsx. Redefining a rating here
  // on a second #organization node created two conflicting nodes (and two
  // AggregateRatings across #organization + #localbusiness), which trips
  // Google's "Review has multiple aggregate ratings" error. Reference the
  // canonical node by bare @id instead — no rating is restated.
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/reviews#webpage`,
    url: `${site.url}/reviews`,
    name: `${site.name} — Customer Reviews`,
    about: { "@id": `${site.url}/#localbusiness` },
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: { "@id": `${site.url}/#localbusiness` },
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Reviews"
        title={`${REVIEW_AGGREGATE.ratingValue}★ from ${REVIEW_AGGREGATE.reviewCount} customers`}
        description="Real Google and Yelp reviews from the Berne family of appliance-repair brands — the same team, technicians and standard behind Berne Commercial."
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/become-a-client">Become a commercial client</LinkButton>
          <LinkButton href="/contact" variant="outline">
            Talk to dispatch
          </LinkButton>
        </div>
      </PageHero>

      <ReviewsSection />

      {/* Awards & written recognition — the Yelp award is issued to the
          Berne Appliance Repair listing; same company, team and dispatch
          behind Berne Commercial. */}
      <section className="border-b border-border/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Awards &amp; recognition
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recognized by Yelp in 2025 — and thanked by mail.
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            In November 2025 Yelp named Berne Appliance Repair — the company behind
            Berne Commercial — one of the highest-rated, best-reviewed businesses on
            its platform. The same dispatch, the same technicians your kitchen line
            depends on.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <figure className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
              <Image
                src="/awards/yelp-people-love-us-2025-certificate.webp"
                alt="People Love Us on Yelp 2025 certificate awarded to Berne Appliance Repair"
                width={1233}
                height={960}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="w-full rounded-lg border border-border/60"
              />
              <figcaption className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  &ldquo;People Love Us on Yelp&rdquo; 2025.
                </span>{" "}
                Yelp&rsquo;s annual award for its highest-rated, best-reviewed
                businesses, signed by CEO Jeremy Stoppelman.
              </figcaption>
            </figure>
            <figure className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
              <Image
                src="/awards/yelp-people-love-you-2025-letter.webp"
                alt="Official 2025 People Love You on Yelp recognition letter to Berne Appliance Repair, Hallandale Beach FL"
                width={992}
                height={1255}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="w-full rounded-lg border border-border/60"
              />
              <figcaption className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Yelp&rsquo;s recognition letter.
                </span>{" "}
                &ldquo;One of the highest-rated and best reviewed businesses on
                Yelp&rdquo; — out of nearly 8 million active business pages.
              </figcaption>
            </figure>
            <figure className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
              <Image
                src="/awards/customer-letter-refrigerator-cooper-city.webp"
                alt="Hand-signed thank-you letter from a Cooper City customer after a refrigerator repair by a Berne technician"
                width={900}
                height={505}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="w-full rounded-lg border border-border/60"
              />
              <figcaption className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">A letter, not a click.</span>{" "}
                A customer mailed this hand-signed note after a refrigerator repair —
                &ldquo;I would refer him without any hesitation.&rdquo; Home address
                removed for privacy.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <JsonLd data={reviewsSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Reviews", url: `${site.url}/reviews` },
        ])}
      />
    </PageShell>
  )
}
