import Script from "next/script"
import { isProductionDeployment } from "@/lib/env"

export function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-S9GYTM7YRJ"
  // Production only — localhost dev / Vercel previews were polluting GA4.
  if (!id || !isProductionDeployment) return null

  // strategy="lazyOnload" — gtag.js (~160KB with GTM payload) loads at browser
  // idle, off the LCP/TBT critical path. Consent Mode v2 defaults are pushed
  // *inside* this script before `config`, so ordering is correct regardless of
  // when the cookie banner hydrates (the banner queues consent updates onto
  // the same dataLayer — see components/cookie-banner.tsx).
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="lazyOnload"
      />
      <Script id="ga-init" strategy="lazyOnload">
        {`
          (function() {
            // Belt-and-suspenders: never report from localhost even on a
            // production build run locally.
            if (/^(localhost|127\\.|0\\.0\\.0\\.0)/.test(location.hostname)) return;
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            // Consent Mode v2 — deny by default, before config.
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              functionality_storage: 'granted',
              security_storage: 'granted',
            });
            var stored = null;
            try { stored = window.localStorage.getItem('berne-consent'); } catch (e) {}
            if (stored === 'accepted') {
              gtag('consent', 'update', {
                ad_storage: 'granted',
                analytics_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
              });
            }
            gtag('js', new Date());
            gtag('config', '${id}', {
              page_path: window.location.pathname,
            });
            document.addEventListener('click', function(e) {
              var t = e.target instanceof Element ? e.target.closest('a[href^="tel:"], a[href^="mailto:"]') : null;
              if (!t) return;
              var href = t.getAttribute('href') || '';
              if (href.indexOf('tel:') === 0) {
                gtag('event', 'phone_call', {
                  phone: href.replace('tel:', ''),
                  location: window.location.pathname,
                });
              } else if (href.indexOf('mailto:') === 0) {
                gtag('event', 'email_click', {
                  email: href.replace('mailto:', ''),
                  location: window.location.pathname,
                });
              }
            }, true);
          })();
        `}
      </Script>
    </>
  )
}
