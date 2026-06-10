import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { BRAND_COMPARISONS } from "@/lib/data/brand-comparisons"

/**
 * Compact homepage teaser for the /compare equipment guides — these pages
 * are the site's strongest organic earners and were otherwise orphaned
 * (zero internal links). EN-only, matching the EN-only /compare section.
 */
export function CompareTeaser() {
  return (
    <section className="border-b border-border/60 bg-accent/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Equipment guides"
            title="Choosing between commercial brands?"
            description="Field-tech comparisons built from real South Florida service tickets — reliability, parts availability, and cost of ownership."
          />
          <Link
            href="/compare"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            All equipment guides <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BRAND_COMPARISONS.map((c) => (
            <Link
              key={c.slug}
              href={`/compare/${c.slug}`}
              className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-foreground group-hover:text-primary">
                {c.h1.split(" — ")[0]}
              </span>
              <span className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                {c.teaser}
              </span>
              <span className="mt-auto inline-flex items-center gap-1 pt-1 text-xs font-medium text-primary">
                Read the comparison <ArrowRight className="size-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
