import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { DispatchForm } from "@/components/dispatch-form"
import { metaFor } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata: Metadata = metaFor({
  title: "Become a Client — Enterprise Commercial Service",
  description:
    "Onboard your restaurants, production facilities or property-managed buildings to Berne Commercial Repair.",
  path: "/become-a-client",
})

const capabilities = [
  "Multi-location dispatch and reporting",
  "COI and vendor onboarding (W-9, insurance)",
  "Property management and facility management coverage",
  "Refrigeration, restaurant equipment, ice, laundry",
  "Replacement coordination when repair is not viable",
  "24/7 emergency commercial dispatch",
]

export default function BecomeAClientPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Become a Client"
        title="Enterprise commercial service partnership"
        description="Onboard restaurants, chains, production facilities and property-managed buildings with a dedicated dispatch relationship."
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Commercial capabilities
            </h2>
            <p className="mt-4 text-muted-foreground">
              Berne Commercial Repair operates as a vendor across South Florida
              — built for chains, restaurants, food production, hotels, retail
              and property managers.
            </p>
            <ul className="mt-6 space-y-3">
              {capabilities.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-border bg-muted/40 p-5 text-sm">
              <div className="font-semibold">Send onboarding to</div>
              <a
                href={`mailto:${site.email}`}
                className="text-primary hover:underline"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <DispatchForm />
          </div>
        </div>
      </section>
    </PageShell>
  )
}
