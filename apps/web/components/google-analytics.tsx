import Script from "next/script"

export function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-S9GYTM7YRJ"
  if (!id) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${id}', {
            page_path: window.location.pathname,
          });
          document.addEventListener('click', function(e) {
            var t = e.target instanceof Element ? e.target.closest('a[href^="tel:"], a[href^="mailto:"]') : null;
            if (!t) return;
            var href = t.getAttribute('href') || '';
            if (href.indexOf('tel:') === 0) {
              gtag('event', 'call_click', {
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
        `}
      </Script>
    </>
  )
}
