import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"

import { Card } from "@workspace/ui/components/card"
import { SectionHeading } from "./section-heading"
import { LinkButton } from "./link-button"

import { getBrandSpecialists } from "@/lib/data/brand-specialists"

type Props = {
  /** Brand slug — same value used in /brands/{slug} route param. */
  brandSlug: string
  /** Brand display name — used in the heading + fallback copy. */
  brandName: string
}

/**
 * "Specialists for this brand at Berne" — additive section that surfaces
 * 2-3 technician bio cards linking to /team/{slug}. Commercial-tone copy.
 *
 * Mapping lives in `lib/data/brand-specialists.ts`. When no mapping exists
 * we render a single fallback card so the page still has the section.
 */
export function BrandSpecialistsSection({ brandSlug, brandName }: Props) {
  const specialists = getBrandSpecialists(brandSlug)

  return (
    <section
      className="border-b border-border/60 bg-background py-16"
      aria-labelledby={`specialists-${brandSlug}-heading`}
      data-block="brand-specialists"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Specialists for this brand"
          title={`Berne technicians who run ${brandName} routes`}
          description={
            specialists.length > 0
              ? `These are the techs on the roster who carry ${brandName} factory training, model-specific parts on the truck, and the diagnostic discipline ${brandName} commercial equipment rewards.`
              : `Berne dispatches the right ${brandName} specialist from an 18-tech commercial roster — refrigeration, cooking-line, ice, and laundry coverage across South Florida.`
          }
        />

        {specialists.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specialists.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/team/${t.slug}`}
                  className="group block h-full"
                >
                  <Card className="flex h-full flex-row items-center gap-4 p-4 transition-colors hover:border-primary/40">
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={t.photo}
                        alt={`${t.name}, ${t.role} at Berne Commercial`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t.role}
                      </div>
                      <div className="line-clamp-1 text-xs text-muted-foreground/80">
                        {t.specialties.slice(0, 3).join(" · ")}
                      </div>
                    </div>
                    <ArrowRight
                      className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden
                    />
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Card className="mt-10 flex flex-row items-start gap-4 p-5">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Users className="size-5" />
            </span>
            <div>
              <div className="text-sm font-semibold">
                Berne dispatches the right {brandName} specialist.
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                18 full-time technicians across South Florida. Dispatch routes
                each {brandName} call to the tech with the closest match on
                model platform, parts inventory, and travel time.
              </p>
              <div className="mt-3">
                <LinkButton href="/team" variant="outline">
                  Meet the full team
                </LinkButton>
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  )
}
