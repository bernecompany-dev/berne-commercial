import Script from "next/script"
import { isProductionDeployment } from "@/lib/env"
import { site } from "@/lib/site"

/**
 * Google Ads conversion tag (gtag.js) — separate from the GA4 loader
 * (components/google-analytics.tsx) so Ads can be enabled/disabled
 * independently via env.
 *
 * IDs are baked in as defaults (they are public — present in the HTML of
 * every page), with env override via NEXT_PUBLIC_GADS_ID /
 * NEXT_PUBLIC_GADS_CALL_LABEL, so no Vercel dashboard changes are needed.
 * Gated to the production deployment like GA / Pixel / Clarity so previews
 * and localhost never register conversions.
 *
 * Coexistence with the GA4 loader: both push into the same
 * window.dataLayer, and `window.gtag = window.gtag || gtag` keeps
 * whichever stub installed first. The library tolerates being requested
 * with both a G- and an AW- id.
 *
 * "Calls from website" uses Google's website call tracking snippet — the
 * `config` with `phone_conversion_number` below. Google dynamically swaps
 * the displayed number for a forwarding number for ad-click visitors and
 * records calls (≥60s by default) as conversions; no click listener is
 * involved. `phone_conversion_number` must EXACTLY match how the number is
 * rendered on the page, hence the import from lib/site.ts (the single
 * source the navbar/hero/footer render from): "(754) 345-4515".
 *
 * "Lead form submit" (WEBPAGE) is fired as a gtag('event','conversion')
 * in components/dispatch-form.tsx (success path).
 */
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID ?? "AW-18232464152"
const CALL_LABEL =
  process.env.NEXT_PUBLIC_GADS_CALL_LABEL ??
  "AW-18232464152/Ou0TCMyJqL0cEJim9fVD"
const PHONE_DISPLAY = site.phone // "(754) 345-4515"

export function GoogleAdsTag() {
  if (!isProductionDeployment) return null

  const inline = `
    (function() {
      if (/^(localhost|127\\.|0\\.0\\.0\\.0)/.test(location.hostname)) return;
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = window.gtag || gtag;
      window.gtag('js', new Date());
      window.gtag('config', '${GADS_ID}');
      window.gtag('config', '${CALL_LABEL}', {
        'phone_conversion_number': '${PHONE_DISPLAY}'
      });
    })();
  `

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: inline }} />
      {/*
        lazyOnload (mobile LCP fix 2026-06-12, same pattern as berne-repair
        03e863b): afterInteractive started the 136KB gtag lib at ~160ms with
        High priority — parallel to the LCP-critical CSS/font — and dragged
        the linked GA4 config (160KB) + wcm/loader + call-tracking chain into
        the pre-LCP window (lab mobile LCP 8.4s on home). The raw inline stub
        above still runs during HTML parse, so config commands (incl.
        phone_conversion_number) queue in dataLayer and replay when the lib
        arrives at browser idle — no conversions lost; the ad-click
        phone-number swap just lands 1-2s later.
      */}
      <Script
        id="gads-lib"
        src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
        strategy="lazyOnload"
      />
    </>
  )
}
