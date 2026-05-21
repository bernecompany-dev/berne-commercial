import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"

export type BreadcrumbItem = {
  /** Display label. */
  name: string
  /** Optional href — omit for the current (last) page. */
  href?: string
}

/**
 * Visible breadcrumbs UI — pairs with breadcrumbSchema() in lib/seo.ts so
 * the visible nav + the JSON-LD agree (Google penalises drift).
 *
 * Convention: pass a list where the LAST item is the current page (no href).
 * All earlier items must have href set. Renders an ordered list with
 * aria-current="page" on the last item.
 *
 * The component is server-friendly (no client hooks) and renders inline-flex
 * with subtle muted styling so it fits cleanly above PageHero.
 */
export function Breadcrumbs({
  items,
  className,
}: {
  items: BreadcrumbItem[]
  className?: string
}) {
  if (!items?.length) return null
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "border-b border-border/40 bg-background/60 py-3",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
          {items.map((it, i) => {
            const isLast = i === items.length - 1
            return (
              <li key={`${it.name}-${i}`} className="flex items-center gap-1.5">
                {i > 0 ? (
                  <ChevronRight
                    aria-hidden="true"
                    className="size-3 shrink-0 text-muted-foreground/60"
                  />
                ) : null}
                {isLast || !it.href ? (
                  <span
                    aria-current="page"
                    className="font-medium text-foreground"
                  >
                    {it.name}
                  </span>
                ) : (
                  <Link
                    href={it.href}
                    className="hover:text-foreground hover:underline"
                  >
                    {it.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
