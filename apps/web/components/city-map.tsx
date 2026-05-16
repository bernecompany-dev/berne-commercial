import { MapPin } from "lucide-react"

export function CityMap({ city }: { city: string }) {
  const q = encodeURIComponent(`${city}, FL`)
  const src = `https://www.google.com/maps?q=${q}&t=&z=12&ie=UTF8&iwloc=&output=embed`

  return (
    <section className="border-b border-border/60 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col items-start gap-1">
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
            <MapPin className="size-3.5" /> Service area
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Dispatch coverage in {city}
          </h2>
          <p className="text-sm text-muted-foreground">
            Same-day commercial response across {city} and surrounding service
            zones.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="aspect-[16/9] w-full sm:aspect-[21/9]">
            <iframe
              src={src}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${city}, Florida`}
              className="size-full"
              allowFullScreen={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
