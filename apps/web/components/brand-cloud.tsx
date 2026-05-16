import { brands } from "@/lib/data/brands"
import { BrandLogo } from "./brand-logo"
import { SectionHeading } from "./section-heading"
import { t } from "@/lib/i18n/dict"
import type { Locale } from "@/lib/i18n/config"

export function BrandCloud({ locale = "en" }: { locale?: Locale }) {
  const tr = t(locale)
  return (
    <section className="border-b border-border/60 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={tr.sections.brandsEyebrow}
          title={tr.sections.brandsTitle}
          description={tr.sections.brandsDescription}
          align="center"
        />

        <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-center gap-3">
          {brands.map((b) => (
            <BrandLogo
              key={b.name}
              name={b.name}
              tone={b.primary ? "primary" : "muted"}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
