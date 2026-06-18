import type { Metadata } from "next"
import { PageHero, PageShell } from "@/components/page-shell"
import { LinkButton } from "@/components/link-button"
import { ReviewsSection } from "@/components/reviews-section"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, metaFor } from "@/lib/seo"
import { site } from "@/lib/site"
import { REVIEW_AGGREGATE } from "@/lib/data/reviews"

export const metadata: Metadata = metaFor({
  title: "Customer Reviews",
  description: `${REVIEW_AGGREGATE.ratingValue}★ from ${REVIEW_AGGREGATE.reviewCount} customers across the Berne family of appliance-repair brands. Real Google reviews.`,
  path: "/reviews",
})

export default function ReviewsPage() {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/reviews#webpage`,
    url: `${site.url}/reviews`,
    name: `${site.name} — Customer Reviews`,
    about: { "@id": `${site.url}/#localbusiness` },
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: REVIEW_AGGREGATE.ratingValue,
        reviewCount: REVIEW_AGGREGATE.reviewCount,
      },
    },
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Reviews"
        title={`${REVIEW_AGGREGATE.ratingValue}★ from ${REVIEW_AGGREGATE.reviewCount} customers`}
        description="Real Google reviews from the Berne family of appliance-repair brands — the same team, technicians and standard behind Berne Commercial."
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/become-a-client">Become a commercial client</LinkButton>
          <LinkButton href="/contact" variant="outline">
            Talk to dispatch
          </LinkButton>
        </div>
      </PageHero>

      <ReviewsSection />

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
