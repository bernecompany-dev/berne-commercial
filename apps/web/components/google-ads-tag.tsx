import { isProductionDeployment } from "@/lib/env"
import { site } from "@/lib/site"

/**
 * Google Ads conversion config. GoogleAnalytics owns the site's single
 * gtag.js network loader; this component only queues the AW configuration.
 * Keeping one loader avoids duplicate downloads and main-thread work while
 * preserving the call-number swap and delivered-lead conversion queue.
 */
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID ?? "AW-18232464152"
const CALL_LABEL =
  process.env.NEXT_PUBLIC_GADS_CALL_LABEL ??
  "AW-18232464152/Ou0TCMyJqL0cEJim9fVD"
const PHONE_DISPLAY = site.phone

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

  return <script dangerouslySetInnerHTML={{ __html: inline }} />
}
