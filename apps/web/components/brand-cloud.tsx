import { brands } from "@/lib/data/brands"
import { SectionHeading } from "./section-heading"

export function BrandCloud() {
  return (
    <section className="border-b border-border/60 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Brands"
          title="Commercial brands we service"
          description="Factory-trained technicians for the brands that run commercial operations across South Florida."
          align="center"
        />

        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-2">
          {brands.map((b) => (
            <span
              key={b.name}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                b.primary
                  ? "border-primary/30 bg-primary/5 font-medium text-primary"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {b.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
