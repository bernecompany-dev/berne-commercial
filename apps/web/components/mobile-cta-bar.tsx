import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { site } from "@/lib/site"

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 md:hidden">
      <div className="mx-auto flex max-w-7xl items-stretch gap-2 px-3 py-2.5">
        <a
          href={site.phoneHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm"
        >
          <Phone className="size-4" />
          Call {site.phone}
        </a>
        <Link
          href="/request-dispatch"
          className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-card px-3 py-2.5 text-sm font-medium text-foreground"
        >
          Dispatch <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  )
}
