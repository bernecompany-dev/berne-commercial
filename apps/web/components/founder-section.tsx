import Image from "next/image"
import { Quote } from "lucide-react"
import { site } from "@/lib/site"
import { t } from "@/lib/i18n/dict"
import type { Locale } from "@/lib/i18n/config"

export function FounderSection({ locale = "en" }: { locale?: Locale }) {
  const tr = t(locale)
  return (
    <section className="border-b border-border/60 bg-accent/30 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <Image
                src={site.founder.photo}
                alt={site.founder.name}
                fill
                priority={false}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
              {tr.sections.founderEyebrow}
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {tr.sections.founderTitle}
            </h2>
            <div className="mt-6 flex items-start gap-3 text-base text-muted-foreground sm:text-lg">
              <Quote className="mt-1 size-5 shrink-0 text-primary" />
              <p>{tr.sections.founderQuote}</p>
            </div>
            <div className="mt-8">
              <div className="text-sm font-semibold">
                {site.founder.name}
              </div>
              <div className="text-sm text-muted-foreground">
                {site.founder.title}, {site.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
