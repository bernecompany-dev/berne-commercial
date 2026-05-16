import { CheckCircle2 } from "lucide-react"
import { DispatchForm } from "./dispatch-form"

const points = [
  "Commercial service call: $89",
  "Same-day emergency dispatch",
  "Refrigeration, ice machines, ovens, fryers, laundry",
  "Licensed and insured technicians",
  "Vendor-ready: COI, multi-location reporting",
]

export function DispatchSection() {
  return (
    <section
      id="dispatch"
      className="border-b border-border/60 bg-gradient-to-b from-background to-accent/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
              Online Dispatch
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Request commercial service
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Submit a dispatch request and a coordinator will follow up to
              confirm the service window. For emergency outages, please call
              dispatch directly.
            </p>

            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <DispatchForm />
          </div>
        </div>
      </div>
    </section>
  )
}
