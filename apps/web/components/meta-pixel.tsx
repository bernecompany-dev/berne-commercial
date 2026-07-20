import Script from "next/script"
import { isProductionDeployment } from "@/lib/env"

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1716381219719739"

export function MetaPixel() {
  // Production only — localhost dev / Vercel previews must not fire the pixel.
  if (!PIXEL_ID || !isProductionDeployment) return null

  // strategy="lazyOnload" — fbevents.js (~155KB) loads at browser idle, off
  // the LCP/TBT critical path. Consent state is read from localStorage inside
  // the script (before init) so a deferred load still respects the banner.
  return (
    <>
      <Script id="meta-pixel" strategy="lazyOnload">
        {`
          (function() {
            if (/^(localhost|127\\.|0\\.0\\.0\\.0)/.test(location.hostname)) return;
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            var stored = null;
            try { stored = window.localStorage.getItem('berne-consent'); } catch (e) {}
            fbq('consent', stored === 'accepted' ? 'grant' : 'revoke');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
            document.addEventListener('click', function(e) {
              var t = e.target instanceof Element ? e.target.closest('a[href^="tel:"], a[href^="mailto:"]') : null;
              if (!t || typeof fbq !== 'function') return;
              var href = t.getAttribute('href') || '';
              var linkLocation = t.getAttribute('data-analytics-location') || t.getAttribute('data-analytics') || t.getAttribute('aria-label') || (t.textContent || '').trim().slice(0, 80) || 'unknown';
              if (href.indexOf('tel:') === 0) {
                fbq('trackCustom', 'call_click', { site_id: 'berne-commercial', page_path: location.pathname, link_location: linkLocation, tracking_number: href.replace('tel:', '') });
              } else if (href.indexOf('mailto:') === 0) {
                fbq('trackCustom', 'EmailClick', { site_id: 'berne-commercial', page_path: location.pathname, link_location: linkLocation });
              }
            }, true);
          })();
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}
