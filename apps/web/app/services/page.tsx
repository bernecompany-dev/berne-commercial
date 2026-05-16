import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { metaFor } from "@/lib/seo"
import { servicesByCategory } from "@/lib/data/services"

export const metadata: Metadata = metaFor({
  title: "Commercial Repair Services",
  description:
    "Refrigeration, ice machines, restaurant equipment, commercial laundry — full commercial repair coverage across South Florida.",
  path: "/services",
})

export default function ServicesPage() {
  const groups = servicesByCategory()
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Commercial repair services"
        description="Refrigeration, restaurant equipment, ice machines, commercial laundry and back-of-house systems."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          {groups.map((g) => (
            <div key={g.category}>
              <h2 className="text-xl font-semibold tracking-tight">
                {g.label}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="group">
                    <Card className="h-full gap-3 p-5 transition-all hover:border-primary/40 hover:shadow-md">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-semibold">{s.title}</span>
                        <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">{s.summary}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
