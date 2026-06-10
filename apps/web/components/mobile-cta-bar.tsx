import { Phone, ArrowRight } from "lucide-react"
import { AnchorButton, LinkButton } from "./link-button"
import { site } from "@/lib/site"
import { t } from "@/lib/i18n/dict"
import type { Locale } from "@/lib/i18n/config"

export function MobileCtaBar({
  locale = "en",
  hideDispatch = false,
}: {
  locale?: Locale
  // On /request-dispatch and /contact the dispatch button would link to the
  // page the user is already on — render the Call button alone there.
  hideDispatch?: boolean
}) {
  const tr = t(locale)
  const p = locale === "es" ? "/es" : ""
  const callLabel = locale === "es" ? "Llamar" : "Call"

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur supports-[backdrop-filter]:bg-background/85 md:hidden">
      <div className="mx-auto flex max-w-7xl items-stretch gap-2 px-3 py-2.5">
        <AnchorButton
          href={site.phoneHref}
          className="h-11 flex-1 gap-2 font-semibold"
        >
          <Phone className="size-4" />
          {callLabel} {site.phone}
        </AnchorButton>
        {hideDispatch ? null : (
          <LinkButton
            href={`${p}/request-dispatch`}
            variant="outline"
            className="h-11 gap-1.5 bg-card"
          >
            {tr.nav.requestDispatch} <ArrowRight className="size-4" />
          </LinkButton>
        )}
      </div>
    </div>
  )
}
