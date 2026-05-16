import Image from "next/image"
import { team } from "@/lib/data/team"
import { SectionHeading } from "./section-heading"
import { t } from "@/lib/i18n/dict"
import type { Locale } from "@/lib/i18n/config"

export function TeamGrid({
  compact = false,
  locale = "en",
}: {
  compact?: boolean
  locale?: Locale
}) {
  const tr = t(locale)
  const techs = team.filter((t) => t.role !== "Founder & Operator")
  return (
    <section className="border-b border-border/60 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={tr.sections.teamEyebrow}
          title={tr.sections.teamTitle}
          description={tr.sections.teamDescription}
          align="center"
        />
        <div
          className={`mx-auto mt-12 grid gap-x-5 ${
            compact
              ? "grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6"
              : "grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {techs.map((m) => (
            <div
              key={m.photo}
              className={
                compact
                  ? "flex flex-col items-center text-center"
                  : "flex gap-4"
              }
            >
              <div
                className={`relative shrink-0 overflow-hidden rounded-xl border border-border bg-card ${
                  compact ? "aspect-square w-full" : "size-24"
                }`}
              >
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  sizes={compact ? "(min-width: 1024px) 16vw, 40vw" : "96px"}
                  className="object-cover"
                />
              </div>
              <div className={compact ? "mt-3" : "min-w-0"}>
                <div className="text-sm font-semibold leading-snug">
                  {m.name}
                </div>
                <div className="text-xs text-muted-foreground">{m.role}</div>
                {!compact && m.bio ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
