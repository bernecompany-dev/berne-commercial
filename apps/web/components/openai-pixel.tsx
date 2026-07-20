import Script from "next/script"
import { isProductionDeployment } from "@/lib/env"

// OpenAI / ChatGPT Ads pixel (oaiq). The SDK auto-captures the `oppref` click
// ref for attribution. `lead_created` is emitted only by a delivered form via
// lib/lead-analytics.ts; tel:/mailto: intent is not a confirmed lead.
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
