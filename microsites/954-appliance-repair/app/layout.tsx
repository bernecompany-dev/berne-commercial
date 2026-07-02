import type { Metadata, Viewport } from "next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Analytics } from "@/components/analytics"
import { JsonLd } from "@/components/json-ld"
import { localBusinessSchema, websiteSchema } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "954 Appliance Repair — Same-Day Service in Broward County",
    template: "%s · 954 Appliance Repair",
  },
  description:
    "Same-day appliance repair across Broward County — refrigerators, washers, dryers, dishwashers, ovens & ranges. Major brands, honest quotes. Call for service.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  formatDetection: { telephone: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
  },
}

export const viewport: Viewport = {
  themeColor: "#e8541e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <Analytics />
      </body>
    </html>
  )
}
