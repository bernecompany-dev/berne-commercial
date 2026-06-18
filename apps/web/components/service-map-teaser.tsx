import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { SectionHeading } from "./section-heading"

/**
 * Lightweight homepage band that points to /service-map. Static text + CTA
 * only — NO map is rendered here, to protect the homepage LCP.
 */
export function ServiceMapTeaser() {
  return (
    <section className="border-b border-border/60 bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Proof of work"
            title="21,000+ service calls across Florida, mapped"
            description="From the Miami metro through Palm Beach and across to Tampa Bay and Sarasota — see the neighborhoods where our techs have actually worked."
          />
          <Link
            href="/service-map"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <MapPin className="size-4" /> See where we&apos;ve worked{" "}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
