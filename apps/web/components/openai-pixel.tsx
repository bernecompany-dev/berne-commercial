import Script from "next/script"
import { isProductionDeployment } from "@/lib/env"

// OpenAI / ChatGPT Ads pixel (oaiq). Mirrors the Meta pixel: loads the SDK at
// idle and fires the `lead_created` conversion (registered in Ads Manager,
// data.type=customer_action) on tel:/mailto: clicks. WhatsApp + the dispatch
// form fire it from their own handlers. The SDK auto-captures the `oppref`
// click ref for attribution; the layout cookie capture is a backup.
const PIXEL_ID =
  process.env.NEXT_PUBLIC_OPENAI_PIXEL_ID ?? "SpLsNLeEy2QEwZQgH3uHkF"

export function OpenAIPixel() {
  if (!PIXEL_ID || !isProductionDeployment) return null

  return (
    <Script id="openai-pixel" strategy="lazyOnload">
      {`
        (function() {
          if (/^(localhost|127\\.|0\\.0\\.0\\.0)/.test(location.hostname)) return;
          !function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");
          oaiq('init', { pixelId: '${PIXEL_ID}' });
          document.addEventListener('click', function(e) {
            var t = e.target instanceof Element ? e.target.closest('a[href^="tel:"], a[href^="mailto:"]') : null;
            if (!t || typeof oaiq !== 'function') return;
            oaiq('measure', 'lead_created', { type: 'customer_action' });
          }, true);
        })();
      `}
    </Script>
  )
}

declare global {
  interface Window {
    oaiq?: (...args: unknown[]) => void
  }
}
