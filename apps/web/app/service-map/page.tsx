import type { Metadata } from "next"
import { PageHero, PageShell } from "@/components/page-shell"
import { LinkButton } from "@/components/link-button"
import { ServiceMap } from "@/components/service-map"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, metaFor } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata: Metadata = metaFor({
  title: "Service Map — Where We Work",
  description:
    "An interactive map of completed appliance repairs across Miami-Dade, Broward and Palm Beach. 13,000+ repairs since 2022, neighborhood-level coverage.",
  path: "/service-map",
})

export default function ServiceMapPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Coverage"
        title="Where Berne has been working"
        description="An interactive heat map of completed appliance repairs across South Florida. Locations are approximated to the neighborhood level for customer privacy — it shows how many places we've serviced and where, not whose home."
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/become-a-client">Become a commercial client</LinkButton>
          <LinkButton href="/contact" variant="outline">
            Talk to dispatch
          </LinkButton>
        </div>
      </PageHero>

      <ServiceMap />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Service Map", url: `${site.url}/service-map` },
        ])}
      />
    </PageShell>
  )
}
