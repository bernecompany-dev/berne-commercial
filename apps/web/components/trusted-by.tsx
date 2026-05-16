import { trustedBy } from "@/lib/data/brands"

export function TrustedBy() {
  return (
    <section className="border-b border-border/60 bg-accent/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by commercial clients and national brands
        </p>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 items-center gap-x-8 gap-y-4 text-center sm:grid-cols-4 lg:grid-cols-8">
          {trustedBy.map((name) => (
            <span
              key={name}
              className="text-sm font-medium tracking-tight text-foreground/70"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-center text-xs text-muted-foreground">
          Our team has provided service for locations associated with these
          brands.
        </p>
      </div>
    </section>
  )
}
