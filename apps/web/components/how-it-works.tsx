import { PhoneCall, Stethoscope, Wrench, ShieldCheck } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { LinkButton } from "./link-button"
import { t } from "@/lib/i18n/dict"
import type { Locale } from "@/lib/i18n/config"

/**
 * Visible "How It Works" flow. The conversion teardown found berne-commercial
 * had the process in schema only, never on the page — operators couldn't see
 * what happens after they hit "Request Service". Four steps: request →
 * on-site diagnosis ($89 service call, free with repair) → same-day repair →
 * verified + warrantied. Mirrors the WhyUs card grid for design consistency.
 */
export function HowItWorks({ locale = "en" }: { locale?: Locale }) {
  const tr = t(locale)
  const p = locale === "es" ? "/es" : ""
  const steps = [
    { icon: PhoneCall, ...tr.howItWorks.steps.request },
    { icon: Stethoscope, ...tr.howItWorks.steps.diagnose },
    { icon: Wrench, ...tr.howItWorks.steps.repair },
    { icon: ShieldCheck, ...tr.howItWorks.steps.warranty },
  ]

  return (
    <section className="border-b border-border/60 bg-accent/30 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={tr.howItWorks.eyebrow}
          title={tr.howItWorks.title}
          description={tr.howItWorks.description}
        />

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className="relative flex flex-col gap-3 rounded-2xl border border-border/60 bg-background p-6"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <span
                  className="text-3xl font-bold leading-none text-primary/15"
                  aria-hidden
                >
                  {i + 1}
                </span>
              </div>
              <div className="text-base font-semibold text-foreground">
                {title}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <LinkButton href={`${p}/request-dispatch`}>
            {tr.howItWorks.cta}
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
