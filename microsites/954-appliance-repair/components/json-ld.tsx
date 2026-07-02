// Renders a JSON-LD graph node. We stringify server-side; no user input flows
// in, but we escape "<" defensively so a stray value can't break out of the
// <script> element.
export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c")
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
