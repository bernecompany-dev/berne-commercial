import { SiteNavbar } from "./site-navbar"
import { SiteFooter } from "./site-footer"
import { MobileCtaBar } from "./mobile-cta-bar"

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteNavbar />
      <main className="pb-20 md:pb-0">{children}</main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string
  title: string
  description?: string
  children?: React.ReactNode
}) {
  return (
    <section className="border-b border-border/60 bg-gradient-to-b from-background to-accent/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow ? (
            <div className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
              {eyebrow}
            </div>
          ) : null}
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}
