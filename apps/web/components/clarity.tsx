import Script from "next/script"
import { isProductionDeployment } from "@/lib/env"

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? ""

/**
 * Microsoft Clarity loader.
 *
 * Reads NEXT_PUBLIC_CLARITY_ID from env. To enable, set it in Vercel project
 * environment variables (see _docs/analytics/clarity-setup.md).
 *
 * - Empty / missing env  → renders nothing.
 * - "BERNE_PLACEHOLDER"  → renders a <meta name="berne-clarity"> marker so
 *                          the integration is verifiably wired without a 404.
 * - Real ID              → injects the official Clarity snippet via
 *                          next/script with strategy="afterInteractive".
 */
export function Clarity() {
  // Production only — keep session recordings free of dev/preview noise.
  if (!CLARITY_ID || !isProductionDeployment) return null

  if (CLARITY_ID === "BERNE_PLACEHOLDER") {
    return (
      <meta
        name="berne-clarity"
        content="placeholder: set NEXT_PUBLIC_CLARITY_ID in Vercel to a real Microsoft Clarity project ID"
      />
    )
  }

  // Defensive: allow only alnum/underscore/hyphen, max 64 chars.
  if (!/^[A-Za-z0-9_-]{1,64}$/.test(CLARITY_ID)) return null

  // Clarity is session-recording for UX research, not conversion-critical.
  // `lazyOnload` defers it until the browser is idle so it stays off the
  // TBT / INP critical path on the initial interaction.
  return (
    <Script id="ms-clarity" strategy="lazyOnload">
      {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `}
    </Script>
  )
}
