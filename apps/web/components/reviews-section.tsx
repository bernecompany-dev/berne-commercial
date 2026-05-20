import { Star, Quote } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { REVIEWS, REVIEW_AGGREGATE } from "@/lib/data/reviews"
import type { Locale } from "@/lib/i18n/config"

/**
 * Renders a customer reviews section that backs the AggregateRating JSON-LD
 * schema (4.79 / 871). Without rendered reviews, Google may flag the
 * structured data as unsupported. Reviews are sourced from the parent
 * Berne family Google listings (see `lib/data/reviews.ts`).
 */
export function ReviewsSection({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es"
  const heading = isEs
    ? {
        eyebrow: "Reseñas",
        title: `${REVIEW_AGGREGATE.ratingValue}★ de ${REVIEW_AGGREGATE.reviewCount} clientes en la familia Berne`,
        description:
          "Reseñas reales de Google de Berne Appliance Repair — la organización matriz que respalda Berne Commercial. Mismo equipo, mismo estándar, mismos técnicos.",
      }
    : {
        eyebrow: "Reviews",
        title: `${REVIEW_AGGREGATE.ratingValue}★ from ${REVIEW_AGGREGATE.reviewCount} customers across the Berne family`,
        description:
          "Real Google reviews from Berne Appliance Repair — the parent organization backing Berne Commercial. Same team, same standard, same technicians.",
      }

  return (
    <section className="border-b border-border/60 bg-accent/20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
          align="center"
        />

        <div
          className="mt-10 flex items-center justify-center gap-3"
          aria-label={`${REVIEW_AGGREGATE.ratingValue} out of 5 stars, ${REVIEW_AGGREGATE.reviewCount} reviews`}
        >
          <div className="flex" aria-hidden>
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="size-5 fill-primary text-primary"
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">
            {REVIEW_AGGREGATE.ratingValue} / 5
          </span>
          <span className="text-sm text-muted-foreground">
            · {REVIEW_AGGREGATE.reviewCount}{" "}
            {isEs ? "reseñas" : "reviews"}
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.slice(0, 5).map((r) => (
            <figure
              key={r.author}
              className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-background p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex" aria-hidden>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <Quote className="size-5 text-primary/50" aria-hidden />
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center justify-between border-t border-border/60 pt-3 text-xs">
                <span className="font-semibold text-foreground">
                  {r.author}
                </span>
                <span className="text-muted-foreground">
                  {new Date(r.datePublished).toLocaleDateString(
                    isEs ? "es-US" : "en-US",
                    { year: "numeric", month: "short" },
                  )}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
