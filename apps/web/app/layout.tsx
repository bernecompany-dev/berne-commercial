import { Inter } from "next/font/google"
import type { Metadata, Viewport } from "next"

import "@workspace/ui/globals.css"
import { cn } from "@workspace/ui/lib/utils"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { JsonLd } from "@/components/json-ld"
import { GoogleAnalytics } from "@/components/google-analytics"
import {
  organizationSchema,
  localBusinessSchema,
} from "@/lib/seo"
import { site } from "@/lib/site"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Commercial Equipment Repair in South Florida`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
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
      <body className="font-sans antialiased">
        {children}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <GoogleAnalytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
