import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card } from "@workspace/ui/components/card"
import { industries } from "@/lib/data/industries"
import { SectionHeading } from "./section-heading"

const featured = [
  "restaurants",
  "food-production",
  "grocery-stores",
  "hotels",
  "retail-chains",
  "property-management",
  "facility-management",
  "warehouses",
]

export function IndustriesSection() {
  const items = featured
    .map((s) => industries.find((i) => i.slug === s))
    .filter(Boolean) as typeof industries

  return (
    <section className="border-b border-border/60 bg-accent/30 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Industries"
            title="Built for commercial operations"
            description="Enterprise dispatch, vendor-ready reporting and high-volume operational coverage."
          />
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            All industries <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map(({ slug, name, blurb, icon: Icon }) => (
            <Card
              key={slug}
              className="gap-3 border-border/70 bg-card/80 p-5 backdrop-blur"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  {name}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {blurb}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
