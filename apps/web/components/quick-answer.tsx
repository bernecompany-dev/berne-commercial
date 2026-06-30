import { site } from "@/lib/site"

/**
 * Self-contained "quick answer" block (GEO / AI-citation).
 *
 * Rendered directly under the hero on top money pages so AI engines
 * (AI Overviews, ChatGPT, Perplexity) have a single extractable passage that
 * answers who / what / where / how much without stitching the page together.
 * The `answer` is 2–4 concrete sentences; `facts` are scannable data points.
 * This is NOT a FAQ — it carries no FAQPage schema and must not restate the
 * page's FAQ verbatim (the FAQ remains the single Q&A source for schema).
 */
export function QuickAnswer({
  heading = "Quick answer",
  answer,
  facts,
}: {
  heading?: string
  answer: string
  facts?: { label: string; value: string }[]
}) {
  const items = facts ?? [
    { label: "Service call", value: `${site.serviceCall} — free with approved repair` },
    { label: "Response", value: "Same-day · 24/7 emergency" },
    { label: "Coverage", value: "Miami-Dade · Broward · Palm Beach" },
    { label: "Rating", value: "4.79★ · 871 reviews" },
  ]
  return (
    <section className="border-b border-border/60 bg-accent/30 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary">
            {heading}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground">
            {answer}
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {items.map((f) => (
              <div key={f.label}>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {f.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
