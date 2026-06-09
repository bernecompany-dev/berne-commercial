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

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    // S13: keep home <title> at <=60 chars (Google SERP cutoff). The suffix
    // template applies to every child page via Metadata.title — keep it short
    // ("· Berne", 7 chars) so per-page base titles up to 53 chars stay within
    // the SERP cutoff. The full canonical brand name lives in site.name and
    // is emitted via Organization / LocalBusiness JSON-LD, not the <title>.
    default: `${site.name} · South Florida Dispatch`,
    template: `%s · Berne`,
  },
  description: site.description,
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
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
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
