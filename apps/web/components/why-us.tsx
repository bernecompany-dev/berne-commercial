import {
  Clock,
  Building2,
  Snowflake,
  MapPin,
  Wrench,
  Award,
} from "lucide-react"
import { SectionHeading } from "./section-heading"

const items = [
  {
    icon: Clock,
    title: "Fast dispatch",
    body: "Emergency same-day response across Miami-Dade, Broward and Palm Beach.",
  },
  {
    icon: Building2,
    title: "Enterprise-ready",
    body: "Vendor onboarding, COI, multi-location reporting and chain coverage.",
  },
  {
    icon: Snowflake,
    title: "Commercial refrigeration specialists",
    body: "Walk-ins, prep tables, ice machines and deep freeze systems.",
  },
  {
    icon: MapPin,
    title: "South Florida coverage",
    body: "Miami, Fort Lauderdale, West Palm Beach and surrounding cities.",
  },
  {
    icon: Wrench,
    title: "Repairs & replacements",
    body: "From component-level service to full equipment replacement coordination.",
  },
  {
    icon: Award,
    title: "Experienced technicians",
    body: "Factory-trained on the brands that run commercial kitchens.",
  },
]

export function WhyUs() {
  return (
    <section className="border-b border-border/60 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Berne Commercial"
          title="A service organization, not a handyman"
          description="We operate like a commercial vendor — designed to support restaurants, production facilities and enterprise clients at scale."
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col gap-3 bg-background p-6"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <div className="text-sm font-semibold text-foreground">
                {title}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
