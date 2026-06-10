import { Inter } from "next/font/google"
import type { Metadata, Viewport } from "next"

import "@workspace/ui/globals.css"
import { cn } from "@workspace/ui/lib/utils"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { JsonLd } from "@/components/json-ld"
import { GoogleAnalytics } from "@/components/google-analytics"
import { MetaPixel } from "@/components/meta-pixel"
import { Clarity } from "@/components/clarity"
import { CookieBanner } from "@/components/cookie-banner"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import { SkipToContent } from "@/components/skip-to-content"
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "@/lib/seo"
import { site } from "@/lib/site"

// display:"swap" — explicit (it is next/font's default, but it's load-bearing
// for hero LCP: the H1 paints immediately in the size-adjusted fallback while
// Inter streams in, instead of blocking on the webfont).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    // S13: keep home <title> at <=60 chars (Google SERP cutoff). The suffix
    // template applies to every child page via Metadata.title — keep it short
    // ("· Berne", 7 chars) so per-page base titles up to 53 chars stay within
    // the SERP cutoff. The full canonical brand name lives in site.name and
    // is emitted via Organization / LocalBusiness JSON-LD, not the <title>.
    // 53 chars — leads with brand, adds the 24/7 dispatch hook (CTR pass
    // 2026-06-09).
    default: `${site.name} — 24/7 South Florida Dispatch`,
    template: `%s · Berne`,
  },
  // CTR-tuned home description (146 chars): 24/7 + enterprise hooks
  // (W-2 techs, COI, rating). site.description stays as the neutral
  // brand blurb for schema/other surfaces.
  description:
    "24/7 commercial equipment repair across South Florida — refrigeration, ice machines, restaurant equipment. 18 W-2 techs, COI-ready, 4.79★ rated.",
  applicationName: site.name,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      "x-default": "/",
    },
  },
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  verification: {
    google: "fMD6AcM0yZbZmegQqXtjxXdepiktoGdsg6L9tReQRaI",
  },
  other: {
    "facebook-domain-verification": "i9d9nw28c7i5upydggyrouqqqx5bmq",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#13161d" },
  ],
  width: "device-width",
  initialScale: 1,
  // Exposes env(safe-area-inset-*) so the fixed bottom CTA bar can pad past
  // the iOS home indicator.
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.variable)}>
      <head>
        {/*
          Core Web Vitals — analytics scripts (gtag / fbevents / clarity) now
          load with strategy="lazyOnload" (browser idle), so full preconnects
          here would open TCP+TLS during the LCP-critical window for origins
          we only contact seconds later. dns-prefetch is near-free and still
          shaves the DNS lookup when the deferred scripts do load.
        */}
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.clarity.ms" />
      </head>
      <body className="font-sans antialiased">
        <SkipToContent />
        {children}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <GoogleAnalytics />
        <MetaPixel />
        <Clarity />
        <WhatsAppFab />
        <CookieBanner />
        <SpeedInsights />
      </body>
    </html>
  )
}
