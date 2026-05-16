import type { Metadata } from "next"
import { PageHero, PageShell } from "@/components/page-shell"
import { brands } from "@/lib/data/brands"
import { metaFor } from "@/lib/seo"

export const metadata: Metadata = metaFor({
  title: "Commercial Brands We Service",
  description:
    "Hoshizaki, Manitowoc, Scotsman, Turbo Air, True and other commercial brands — South Florida service coverage.",
  path: "/brands",
})

export default function BrandsPage() {
  const primary = brands.filter((b) => b.primary)
  const others = brands.filter((b) => !b.primary)

  return (
    <PageShell>
      <PageHero
        eyebrow="Brands"
        title="Commercial brands we service"
        description="Factory-trained technicians for the brands that run commercial kitchens, ice machines, refrigeration and commercial laundry across South Florida."
      />
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold tracking-tight">Primary brands</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {primary.map((b) => (
              <span
                key={b.name}
                className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold tracking-tight">
            Additional brands
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {others.map((b) => (
              <span
                key={b.name}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
