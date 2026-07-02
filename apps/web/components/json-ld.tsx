export function JsonLd({ data }: { data: unknown }) {
  // Escape "<" so a "</script>" sequence inside any data string can never
  // close the tag and inject markup. "<" is valid JSON — parsers and
  // search engines read it identically.
  const json = JSON.stringify(data).replace(/</g, "\\u003c")
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
