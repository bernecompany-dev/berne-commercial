import type { Metadata } from "next"
import { PageHero, PageShell } from "@/components/page-shell"
import { TrustedBy } from "@/components/trusted-by"
import { WhyUs } from "@/components/why-us"
import { metaFor } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata: Metadata = metaFor({
  title: "About — Commercial Service Organization",
  description:
    "Berne Commercial Repair is a South Florida commercial service organization focused on refrigeration, restaurant equipment and enterprise dispatch.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="A commercial service organization for South Florida"
        description={`${site.name} provides enterprise-level commercial repair across Miami-Dade, Broward and Palm Beach — built to support restaurants, production facilities, retail, and property-managed buildings.`}
      />
      <section className="border-b border-border/60 bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Who we serve
            </h2>
            <p className="mt-4 text-muted-foreground">
              We operate as a vendor — not a handyman. Our dispatch model is
              designed for restaurants with downtime-critical kitchens,
              production facilities running 24/7 cold storage, hotels with
              ice machines and commercial laundry, and property managers
              responsible for distributed equipment across multiple buildings.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              How we operate
            </h2>
            <p className="mt-4 text-muted-foreground">
              Commercial service call of $89, same-day response on emergencies,
              licensed and insured technicians, and replacement coordination
              when repair is not viable. We support COI, vendor portals and
              multi-location reporting for enterprise accounts.
            </p>
          </div>
        </div>
      </section>
      <WhyUs />
      <TrustedBy />
    </PageShell>
  )
}
