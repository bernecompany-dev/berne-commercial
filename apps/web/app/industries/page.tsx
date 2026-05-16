import type { Metadata } from "next"
import { PageHero, PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { industries } from "@/lib/data/industries"
import { metaFor } from "@/lib/seo"

export const metadata: Metadata = metaFor({
  title: "Industries — Commercial Service Coverage",
  description:
    "Restaurants, production facilities, hotels, retail chains, property management — Berne Commercial Repair industries served.",
  path: "/industries",
})

export default function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industries"
        title="Built for commercial operations"
        description="Enterprise dispatch, vendor-ready reporting and high-volume operational coverage."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ slug, name, blurb, icon: Icon }) => (
              <Card key={slug} className="gap-3 p-6">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <div className="text-base font-semibold">{name}</div>
                <p className="text-sm text-muted-foreground">{blurb}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
