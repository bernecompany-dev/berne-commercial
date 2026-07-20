import Script from "next/script"
import { isProductionDeployment } from "@/lib/env"

export function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-S9GYTM7YRJ"
  // Production only — localhost dev / Vercel previews were polluting GA4.
  if (!id || !isProductionDeployment) return null

  // Split architecture (lead-review fix 2026-06-11):
  // - The init below is a RAW inline <script> that executes during HTML
  //   parse, before hydration. It sets Consent Mode defaults, queues
  //   js/config, and wires the delegated tel:/mailto: click listener — so
  //   the very first sticky-bar "Call" tap (second 0-1 on mobile) is
  //   captured. Commands accumulate on window.dataLayer.
  // - gtag.js itself (~160KB) still loads with strategy="lazyOnload" at
  //   browser idle, off the LCP/TBT critical path, and drains the queue on
  //   arrival (and hijacks dataLayer.push for live processing afterwards).
  // This is the ONLY tel:/mailto: GA listener — do not add another one or
  // call_click will double-fire.
  //
  // Consent Mode v2 — US/Florida B2B audience (CCPA opt-out model, GDPR does
  // not apply): analytics_storage is GRANTED by default so the silent
  // majority who never touch the banner stays measurable (was deny-by-default
  // → every no-interaction session shipped gcs=G100 and vanished from GA4).
  // ad_* stays opt-in. The cookie banner is a notice with a working
  // "Decline" opt-out (localStorage 'berne-consent' = 'essential-only' →
  // analytics_storage denied, here on load + live in cookie-banner.tsx).
  const inline = `
    (function() {
      // Belt-and-suspenders: never report from localhost even on a
      // production build run locally.
      if (/^(localhost|127\\.|0\\.0\\.0\\.0)/.test(location.hostname)) return;
      if (window.__berneGaWired) return;
      window.__berneGaWired = true;
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('consent', 'default', {
        ad_storage: 'denied',
        analytics_storage: 'granted',
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
      } else if (stored === 'essential-only') {
        gtag('consent', 'update', { analytics_storage: 'denied' });
      }
      gtag('js', new Date());
      gtag('config', '${id}', {
        page_path: window.location.pathname,
      });
      document.addEventListener('click', function(e) {
        var t = e.target instanceof Element ? e.target.closest('a[href^="tel:"], a[href^="mailto:"]') : null;
        if (!t) return;
        var href = t.getAttribute('href') || '';
        var linkLocation = t.getAttribute('data-analytics-location') ||
          t.getAttribute('data-analytics') ||
          t.getAttribute('aria-label') ||
          (t.textContent || '').trim().slice(0, 80) ||
          'unknown';
        if (href.indexOf('tel:') === 0) {
          gtag('event', 'call_click', {
            site_id: 'berne-commercial',
            page_path: window.location.pathname,
            link_location: linkLocation,
            tracking_number: href.replace('tel:', ''),
          });
        } else if (href.indexOf('mailto:') === 0) {
          gtag('event', 'email_click', {
            site_id: 'berne-commercial',
            page_path: window.location.pathname,
            link_location: linkLocation,
          });
        }
      }, true);
    })();
  `

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: inline }} />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="lazyOnload"
      />
    </>
  )
}
