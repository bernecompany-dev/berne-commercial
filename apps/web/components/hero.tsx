import { ArrowRight, Phone, Shield, Snowflake, Wrench } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { AnchorButton, LinkButton } from "./link-button"
import { site } from "@/lib/site"

const highlights = [
  { icon: Wrench, label: `Commercial service call: ${site.serviceCall}` },
  { icon: Phone, label: "Emergency same-day service" },
  { icon: Shield, label: "Licensed & insured" },
  { icon: Snowflake, label: "Refrigeration specialists" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-background to-accent/30">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-[480px] max-w-5xl rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-6 gap-2 border-primary/20 bg-primary/5 px-3 py-1 text-primary"
          >
            <span className="size-1.5 rounded-full bg-primary" /> South Florida
            commercial dispatch
          </Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Commercial Equipment Repair in South Florida
          </h1>
          <p className="mt-6 text-balance text-base text-muted-foreground sm:text-lg">
            Fast dispatch for restaurants, production facilities, retail
            locations, commercial kitchens, property-managed buildings and
            enterprise clients.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton href="/request-dispatch" size="lg" className="gap-2">
              Request Service <ArrowRight className="size-4" />
            </LinkButton>
            <AnchorButton
              href={site.phoneHref}
              size="lg"
              variant="outline"
              className="gap-2"
            >
              <Phone className="size-4" /> Call Now
            </AnchorButton>
            <LinkButton href="/become-a-client" size="lg" variant="ghost">
              Become a Client
            </LinkButton>
          </div>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {highlights.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/70 p-4 text-left shadow-sm backdrop-blur"
            >
              <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="size-4" />
              </span>
              <span className="text-sm font-medium leading-snug text-foreground">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
