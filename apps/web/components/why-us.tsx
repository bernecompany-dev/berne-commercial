import {
  Clock,
  Building2,
  Snowflake,
  MapPin,
  Wrench,
  Award,
} from "lucide-react"
import { SectionHeading } from "./section-heading"
import { t } from "@/lib/i18n/dict"
import type { Locale } from "@/lib/i18n/config"

export function WhyUs({ locale = "en" }: { locale?: Locale }) {
  const tr = t(locale)
  const items = [
    { icon: Clock, ...tr.whyUs.fast },
    { icon: Building2, ...tr.whyUs.enterprise },
    { icon: Snowflake, ...tr.whyUs.refrigeration },
    { icon: MapPin, ...tr.whyUs.coverage },
    { icon: Wrench, ...tr.whyUs.repairs },
    { icon: Award, ...tr.whyUs.experienced },
  ]

  return (
    <section className="border-b border-border/60 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={tr.sections.whyUsEyebrow}
          title={tr.sections.whyUsTitle}
          description={tr.sections.whyUsDescription}
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col gap-3 bg-background p-6">
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
