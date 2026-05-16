import type { Metadata } from "next"
import { PageHero, PageShell } from "@/components/page-shell"
import { DispatchForm } from "@/components/dispatch-form"
import { metaFor } from "@/lib/seo"

export const metadata: Metadata = metaFor({
  title: "Request Commercial Dispatch",
  description:
    "Submit a dispatch request for commercial refrigeration, ice, restaurant equipment or commercial laundry service.",
  path: "/request-dispatch",
})

type SearchParams = { searchParams: Promise<{ city?: string; service?: string }> }

export default async function RequestDispatchPage({ searchParams }: SearchParams) {
  const params = await searchParams
  return (
    <PageShell>
      <PageHero
        eyebrow="Dispatch"
        title="Request commercial dispatch"
        description="Submit equipment details and a dispatcher will follow up to confirm the service window. Commercial service call: $89."
      />
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <DispatchForm defaults={{ city: params.city, service: params.service }} />
        </div>
      </section>
    </PageShell>
  )
}
