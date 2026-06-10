/**
 * Spanish segment layout.
 *
 * The <html lang> attribute lives in the root layout (app/layout.tsx) and is
 * hard-coded to "en" — nested layouts can't re-render <html>, and the site is
 * fully prerendered (no headers()/cookies(), which would force every page
 * dynamic). Fix: a tiny inline script that runs synchronously during HTML
 * parsing, BEFORE first paint and before any hydration, flipping the already
 * parsed <html> element to lang="es". Same pattern the sister berne-repair
 * site ships. Screen readers, translation prompts and search engines that
 * execute JS all see lang="es"; crawlers that don't still get the correct
 * hreflang alternates from metaFor().
 */
export default function EsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="es"`,
        }}
      />
      {children}
    </>
  )
}
