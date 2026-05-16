import { trustedBy } from "@/lib/data/brands"
import { BrandLogo } from "./brand-logo"

export function TrustedBy() {
  return (
    <section className="border-b border-border/60 bg-accent/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by commercial clients and national brands
        </p>
        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-4">
          {trustedBy.map((name) => (
            <BrandLogo key={name} name={name} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-balance text-center text-xs text-muted-foreground">
          Our team has provided service for locations associated with these
          brands.
        </p>
      </div>
    </section>
  )
}
