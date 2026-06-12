import Script from "next/script"
import { isProductionDeployment } from "@/lib/env"

/**
 * Microsoft Advertising UET tag — separate from the Google Ads loader
 * (components/google-ads-tag.tsx) so either can be toggled via env.
 *
 * Tag id is baked in as a default (public — present in page HTML), with
 * env override via NEXT_PUBLIC_MS_UET_ID. Gated to the production
 * deployment like GA / Pixel / Clarity.
 *
 * Conversion goal "Phone click" (Microsoft Ads goal id 47545659, account
 * scope) counts a custom event `phone_click` — fired by the inline
 * listener below on any click of an a[href^="tel:"]. Microsoft has no
 * dynamic number-swap call tracking like Google, so tel: clicks are the
 * closest call proxy on this site.
 *
 * bat.js (~30KB) loads at `lazyOnload` (mobile LCP contract, same tier as
 * gtag); the uetq stub + click listener stay `afterInteractive` — events
 * queue in uetq and bat.js replays them on load.
 */
const UET_ID = process.env.NEXT_PUBLIC_MS_UET_ID ?? "97251280"

export function MicrosoftUetTag() {
  if (!isProductionDeployment) return null

  return (
    <>
      <Script
        id="ms-uet-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              if (/^(localhost|127\\.|0\\.0\\.0\\.0)/.test(location.hostname)) return;
              window.uetq = window.uetq || [];
              document.addEventListener('click', function (e) {
                var t = e.target;
                var a = t && t.closest ? t.closest('a[href^="tel:"]') : null;
                if (a) { window.uetq.push('event', 'phone_click', {}); }
              }, true);
            })();
          `,
        }}
      />
      <Script
        id="ms-uet-lib"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"${UET_ID}", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
          `,
        }}
      />
    </>
  )
}
