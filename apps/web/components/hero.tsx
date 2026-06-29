import Link from "next/link"
import { ArrowRight, Phone, Shield, Snowflake, Star, Wrench } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { AnchorButton, LinkButton } from "./link-button"
import { site } from "@/lib/site"
import { REVIEW_AGGREGATE } from "@/lib/data/reviews"
import { t } from "@/lib/i18n/dict"
import type { Locale } from "@/lib/i18n/config"

export function Hero({ locale = "en" }: { locale?: Locale }) {
  const tr = t(locale)
  const p = locale === "es" ? "/es" : ""

  const highlights = [
    { icon: Wrench, label: tr.hero.highlights.serviceCall },
    { icon: Phone, label: tr.hero.highlights.sameDay },
    { icon: Shield, label: tr.hero.highlights.licensed },
    { icon: Snowflake, label: tr.hero.highlights.refrigeration },
  ]

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
            <span className="size-1.5 rounded-full bg-primary" /> {tr.hero.eyebrow}
          </Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {tr.hero.title}
          </h1>
          <p className="mt-6 text-balance text-base text-muted-foreground sm:text-lg">
            {tr.hero.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Anchor to the on-page form (DispatchSection id="dispatch") —
                one scroll instead of a full navigation. */}
            <LinkButton href="#dispatch" size="lg" className="h-11 gap-2">
              {tr.cta.requestService} <ArrowRight className="size-4" />
            </LinkButton>
            <AnchorButton
              href={site.phoneHref}
              size="lg"
              variant="outline"
              className="h-11 gap-2"
            >
              <Phone className="size-4" /> {tr.cta.callNow}
            </AnchorButton>
          </div>
          {/* Above-the-fold social proof — the 4.79★/871 aggregate is the
              site's strongest trust asset but otherwise first appears ~7
              sections down. Surfacing it under the hero CTA lifts form starts. */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <span
              className="flex"
              role="img"
              aria-label={`${REVIEW_AGGREGATE.ratingValue} ${locale === "es" ? "de 5 estrellas" : "out of 5 stars"}`}
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  aria-hidden
                  className="size-4 fill-primary text-primary"
                />
              ))}
            </span>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {REVIEW_AGGREGATE.ratingValue}★
              </span>{" "}
              {locale === "es" ? "de" : "from"} {REVIEW_AGGREGATE.reviewCount}{" "}
              {locale === "es" ? "reseñas · familia Berne" : "reviews · Berne family"}
            </span>
          </div>
          {/* B2B onboarding is a different journey — keep the path, drop the
              third competing button (it's already in the navbar + footer). */}
          <div className="mt-4">
            <Link
              href={`${p}/become-a-client`}
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {tr.cta.becomeClient} →
            </Link>
          </div>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {highlights.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4 text-left shadow-sm"
            >
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
