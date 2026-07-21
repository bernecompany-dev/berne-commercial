import type { Metadata } from "next"
import { CheckCircle2, MapPin, ShieldCheck, Wrench } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { JsonLd } from "@/components/json-ld"
import { CareersApplyForm } from "@/components/careers-apply-form"
import { metaFor } from "@/lib/seo"
import { site } from "@/lib/site"
import { JOB, POSTING_DATE, VALID_THROUGH } from "@/lib/data/careers"

export const metadata: Metadata = metaFor({
  title: "Careers — Commercial Appliance & Refrigeration Technician | Berne Commercial",
  description:
    "Berne Commercial is hiring a commercial appliance / refrigeration technician in South Florida. W-2, 18-tech team, steady order flow across Miami-Dade, Broward, and Palm Beach.",
  path: "/careers",
})

/**
 * Google for Jobs JobPosting schema. baseSalary is deliberately omitted —
 * pay is discussed at the interview and we don't publish figures.
 * https://developers.google.com/search/docs/appearance/structured-data/job-posting
 */
function jobPostingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "@id": `${site.url}/careers#${JOB.slug}`,
    title: JOB.title,
    description: `<p>${JOB.description}</p><h3>Requirements</h3><ul>${JOB.requirements
      .map((r) => `<li>${r}</li>`)
      .join("")}</ul>`,
    identifier: {
      "@type": "PropertyValue",
      name: site.name,
      value: `berne-commercial-careers-${JOB.slug}`,
    },
    datePosted: POSTING_DATE,
    validThrough: VALID_THROUGH,
    employmentType: JOB.employmentType,
    industry: "Commercial Equipment Service",
    occupationalCategory: "49-9031.00 Home Appliance Repairers",
    hiringOrganization: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      sameAs: site.url,
      logo: `${site.url}/opengraph-image`,
    },
    jobLocation: JOB.counties.map((county) => ({
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: county,
        addressRegion: "FL",
        addressCountry: "US",
      },
    })),
    skills: JOB.skills,
    qualifications: JOB.requirements.join("; "),
    directApply: true,
  }
}

export default function CareersPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Careers", item: `${site.url}/careers` },
    ],
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Careers"
        title="Commercial Appliance & Refrigeration Technician — South Florida"
        description="Berne Commercial has repaired commercial kitchen and refrigeration equipment since 2015. We're adding one more technician to an 18-tech W-2 crew working Miami-Dade, Broward, and Palm Beach."
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <ShieldCheck className="size-3.5" aria-hidden />
            Full-time, W-2
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/80">
            <MapPin className="size-3.5 text-primary" aria-hidden />
            Miami-Dade · Broward · Palm Beach
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/80">
            <Wrench className="size-3.5 text-primary" aria-hidden />
            Refrigeration · kitchen · laundry
          </span>
        </div>
      </PageHero>

      {/* EN article */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="space-y-6 text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              The job
            </h2>
            <p>
              Our customers are restaurants, hotel kitchens, condo towers, and
              property management companies. A typical week: a walk-in cooler
              losing temperature at a restaurant, an ice machine down at a
              hotel bar, a dishmachine that stopped mid-service, laundry
              equipment in a condo building. Dispatch hands you the route and
              the parts logistics, so you don&apos;t hunt for work. The flow of
              commercial orders has stayed steady since 2015, in season and
              out.
            </p>
            <p>
              Everyone on the crew is a W-2 employee. No 1099 arrangements, no
              &quot;rent our name and buy your own parts&quot; setups. 18
              technicians are on staff today; you would be number 19.
            </p>

            <h2 className="pt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              What you need
            </h2>
            <ul className="space-y-3">
              {[
                "Experience with commercial kitchen or commercial refrigeration equipment. A strong residential tech who wants to move into commercial work is also a fit — the commercial side can be taught, diagnostic habits can't.",
                "EPA Section 608 certification. Required for refrigeration work — walk-ins, ice machines, reach-ins.",
                "A valid driver's license.",
                "Conversational English — enough for customers and work orders. Half the team speaks Russian day to day, so English that is functional rather than polished is fine.",
              ].map((r) => (
                <li key={r} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-1 size-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <h2 className="pt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              How to apply
            </h2>
            <p>
              Use the form at the bottom of this page — name, phone, city, and
              a few lines about what you&apos;ve worked on. A dispatcher calls
              back, usually the same day. If you&apos;d rather talk first, call{" "}
              <a href={site.phoneHref} className="text-primary hover:underline">
                {site.phone}
              </a>{" "}
              and say you&apos;re calling about the technician position.
            </p>
          </article>
        </div>
      </section>

      {/* RU block */}
      <section
        id="ru"
        lang="ru"
        className="border-t border-border/60 bg-muted/30 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="space-y-6 text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Работа в Berne — приглашаем техников по коммерческому оборудованию
            </h2>
            <p>
              Berne Commercial ремонтирует коммерческое кухонное и холодильное
              оборудование в Южной Флориде с 2015 года. Клиенты — рестораны,
              отели, кондо-башни, управляющие компании. Работаем в трёх округах:
              Miami-Dade, Broward и Palm Beach. Сейчас в штате 18 техников,
              оформление W-2 — ищем ещё одного.
            </p>
            <p>
              Что в работе: walk-in холодильные и морозильные камеры,
              льдогенераторы, коммерческие печи и плиты, посудомоечные машины,
              прачечное оборудование. Маршрут и запчасти — на диспетчерской,
              самому искать заказы не нужно. Поток коммерческих заявок
              стабильный круглый год.
            </p>
            <p className="font-medium text-foreground">Что нужно от вас:</p>
            <ul className="space-y-3">
              {[
                "Опыт с коммерческим кухонным или холодильным оборудованием. Сильного «бытовика», готового переучиваться на коммерцию, тоже рассмотрим.",
                "Сертификат EPA-608 — для холодильных работ обязателен.",
                "Водительские права.",
                "Разговорный английский — для клиентов и нарядов. Внутри команды русский в ходу, так что «рабочего» английского достаточно.",
              ].map((r) => (
                <li key={r} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-1 size-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <p>
              Откликнуться просто: форма ниже — имя, телефон, город, пара строк
              об опыте. Перезвоним, как правило, в тот же день. Или звоните
              сразу:{" "}
              <a href={site.phoneHref} className="text-primary hover:underline">
                {site.phone}
              </a>
              .
            </p>
          </article>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="border-t border-border/60 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CareersApplyForm locale="en" />
        </div>
      </section>

      <JsonLd data={[jobPostingJsonLd(), breadcrumb]} />
    </PageShell>
  )
}
