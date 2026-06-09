import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { DispatchForm } from "./dispatch-form"
import { t } from "@/lib/i18n/dict"
import type { Locale } from "@/lib/i18n/config"
import { BACK_OFFICE } from "@/lib/data/team-bios"

export function DispatchSection({ locale = "en" }: { locale?: Locale }) {
  const tr = t(locale)
  // The people who actually pick up this request — the dispatch desk.
  const dispatchDesk = BACK_OFFICE.filter((m) => m.role.startsWith("Dispatch"))
  const points =
    locale === "es"
      ? [
          "Llamada de servicio comercial: $89",
          "Despacho de emergencia el mismo día",
          "Refrigeración, máquinas de hielo, hornos, freidoras, lavandería",
          "Técnicos con licencia y asegurados",
          "Listos para vendors: COI, reportes multi-locación",
        ]
      : [
          "Commercial service call: $89",
          "Same-day emergency dispatch",
          "Refrigeration, ice machines, ovens, fryers, laundry",
          "Licensed and insured technicians",
          "Vendor-ready: COI, multi-location reporting",
        ]

  return (
    <section
      id="dispatch"
      className="border-b border-border/60 bg-gradient-to-b from-background to-accent/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
              {tr.sections.dispatchEyebrow}
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {tr.sections.dispatchTitle}
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              {tr.sections.dispatchDescription}
            </p>

            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/team"
              className="group mt-8 inline-flex items-center gap-4 rounded-2xl border border-border bg-card p-4 pr-5 transition-colors hover:border-primary/40"
            >
              <div className="flex -space-x-2.5">
                {dispatchDesk.map((m) => (
                  <span
                    key={m.slug}
                    className="relative size-10 overflow-hidden rounded-full border-2 border-card bg-muted"
                  >
                    <Image
                      src={m.photo}
                      alt={`${m.name}, ${m.role} at Berne Commercial Repair`}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <span className="text-sm">
                <span className="font-semibold text-foreground">
                  {locale === "es"
                    ? "Despacho interno — no un call center."
                    : "In-house dispatch desk — not a call center."}
                </span>{" "}
                <span className="inline-flex items-center gap-1 font-medium text-primary">
                  {locale === "es" ? "Conozca al equipo" : "Meet the team"}
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </span>
            </Link>
          </div>
          <div className="lg:col-span-3">
            <DispatchForm locale={locale} />
          </div>
        </div>
      </div>
    </section>
  )
}
