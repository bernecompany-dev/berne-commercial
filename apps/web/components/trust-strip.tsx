import { Clock, ShieldCheck, Phone } from "lucide-react"
import { site } from "@/lib/site"

/**
 * Compact below-hero trust strip surfacing 24/7 dispatch + licensed + same-day.
 * Matches dispatcher voice copy.
 */
export function TrustStrip() {
  return (
    <section
      aria-label="Commercial dispatch trust signals"
      className="border-y border-border/60 bg-background"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-3 text-center text-sm font-medium text-foreground sm:flex-row sm:gap-6 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2">
          <Clock className="size-4 text-primary" aria-hidden />
          24/7 commercial dispatch
        </span>
        <span className="hidden text-muted-foreground sm:inline" aria-hidden>
          ·
        </span>
        <span className="inline-flex items-center gap-2">
          <Phone className="size-4 text-primary" aria-hidden />
          Same-day dispatch · within hours
        </span>
        <span className="hidden text-muted-foreground sm:inline" aria-hidden>
          ·
        </span>
        <span className="inline-flex items-center gap-2">
          <ShieldCheck className="size-4 text-primary" aria-hidden />
          {site.licenses}
        </span>
      </div>
    </section>
  )
}
