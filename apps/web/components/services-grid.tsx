import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card } from "@workspace/ui/components/card"
import { services } from "@/lib/data/services"
import { SectionHeading } from "./section-heading"

const featured = [
  "commercial-refrigeration-repair",
  "walk-in-cooler-repair",
  "walk-in-freezer-repair",
  "ice-machine-repair",
  "fryer-repair",
  "commercial-oven-repair",
  "commercial-hood-repair",
  "espresso-machine-repair",
  "soda-machine-repair",
  "ice-cream-machine-repair",
  "commercial-laundry-repair",
  "vending-machine-repair",
]

export function ServicesGrid() {
  const items = featured
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as typeof services

  return (
    <section className="border-b border-border/60 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Commercial equipment we repair"
            description="Refrigeration, restaurant equipment, commercial laundry and back-of-house systems — across South Florida."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            All services <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group"
            >
              <Card className="h-full gap-3 p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-semibold text-foreground">
                    {s.shortTitle}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
