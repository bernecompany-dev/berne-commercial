"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import { AnchorButton, LinkButton } from "./link-button"
import { site } from "@/lib/site"
import { cn } from "@workspace/ui/lib/utils"

const nav = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/brands", label: "Brands" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/become-a-client", label: "Become a Client" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function SiteNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-semibold"
          >
            B
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            {site.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <AnchorButton href={site.phoneHref} variant="ghost" size="sm" className="gap-2">
            <Phone className="size-4" />
            {site.phone}
          </AnchorButton>
          <LinkButton href="/request-dispatch" size="sm">
            Request Dispatch
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-md border border-border lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-border/60 bg-background lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2 text-sm text-foreground hover:bg-muted"
            >
              {n.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-3">
            <AnchorButton href={site.phoneHref} variant="outline">
              <Phone className="size-4" /> {site.phone}
            </AnchorButton>
            <LinkButton href="/request-dispatch" onClick={() => setOpen(false)}>
              Request Dispatch
            </LinkButton>
          </div>
        </div>
      </div>
    </header>
  )
}
