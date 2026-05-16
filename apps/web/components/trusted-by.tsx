import { trustedBy } from "@/lib/data/brands"
import { BrandLogo } from "./brand-logo"
import { t } from "@/lib/i18n/dict"
import type { Locale } from "@/lib/i18n/config"

export function TrustedBy({ locale = "en" }: { locale?: Locale }) {
  const tr = t(locale)
  return (
    <section className="border-b border-border/60 bg-accent/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {tr.sections.trustedBy}
        </p>
        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-4">
          {trustedBy.map((name) => (
            <BrandLogo key={name} name={name} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-balance text-center text-xs text-muted-foreground">
          {tr.sections.trustedByDisclaimer}
        </p>
      </div>
    </section>
  )
}
