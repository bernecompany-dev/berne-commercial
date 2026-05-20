import type { ReactNode } from "react"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowRight, Phone } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { JsonLd } from "@/components/json-ld"
import {
  metaFor,
  breadcrumbSchema,
  blogPostingSchema,
  howToSchema,
} from "@/lib/seo"
import { site } from "@/lib/site"
import {
  articles,
  getArticle,
  isPublished,
  formatPublishDate,
  publishedArticles,
} from "@/lib/blog/articles"
import { HOWTO_BLUEPRINTS } from "@/lib/blog/howto-allowlist"

export const revalidate = 3600

type Params = { params: Promise<{ slug: string }> }

/**
 * Render inline markdown-style links `[text](url)` inside a paragraph string.
 * External (http/https) links rendered as <a target="_blank" rel="noopener">;
 * internal (relative) links rendered as next/link. Anything else passes through
 * as plain text. Intentionally minimal — body strings are otherwise plain text.
 */
function renderInline(text: string): ReactNode {
  // Pattern: [label](url) — non-greedy on label, url stops at whitespace or close paren
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)/g
  const out: ReactNode[] = []
  let lastIndex = 0
  let key = 0
  let m: RegExpExecArray | null
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > lastIndex) {
      out.push(text.slice(lastIndex, m.index))
    }
    const label = m[1] ?? ""
    const url = m[2] ?? ""
    if (/^https?:\/\//.test(url)) {
      out.push(
        <a
          key={`l-${key++}`}
          href={url}
          target="_blank"
          rel="noopener"
          className="text-primary underline-offset-2 hover:underline"
        >
          {label}
        </a>,
      )
    } else {
      out.push(
        <Link
          key={`l-${key++}`}
          href={url}
          className="text-primary underline-offset-2 hover:underline"
        >
          {label}
        </Link>,
      )
    }
    lastIndex = m.index + m[0].length
  }
  if (lastIndex < text.length) {
    out.push(text.slice(lastIndex))
  }
  return out
}

export function generateStaticParams() {
  // Generate params for all articles; date-gating happens at request time via notFound().
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const a = getArticle(slug)
  if (!a || !isPublished(a)) {
    return metaFor({
      title: "Article",
      description: "",
      path: `/blog/${slug}`,
      noindex: true,
    })
  }
  return metaFor({
    title: a.title,
    description: a.description,
    path: `/blog/${a.slug}`,
  })
}

export default async function BlogArticlePage({ params }: Params) {
  const { slug } = await params
  const a = getArticle(slug)
  if (!a) notFound()
  if (!isPublished(a)) notFound()

  const related = (a.relatedSlugs ?? [])
    .map((s) => getArticle(s))
    .filter((x): x is NonNullable<typeof x> => !!x && isPublished(x))
    .slice(0, 3)

  const fallbackRelated = publishedArticles()
    .filter((x) => x.slug !== a.slug)
    .slice(0, 3)

  const relatedFinal = related.length ? related : fallbackRelated

  const articleUrl = `${site.url}/blog/${a.slug}`

  // Word count derived from section bodies. Lede + section paragraphs.
  const wordCount =
    a.lede.trim().split(/\s+/).filter(Boolean).length +
    a.sections.reduce(
      (acc, s) =>
        acc +
        s.body.reduce(
          (sum, p) => sum + p.trim().split(/\s+/).filter(Boolean).length,
          0,
        ),
      0,
    )

  const blogPosting = blogPostingSchema({
    url: articleUrl,
    headline: a.title,
    description: a.description,
    datePublished: a.publishedAt,
    dateModified: a.updatedAt ?? a.publishedAt,
    authorName: "Eugene Bernitsky",
    articleSection: a.category,
    wordCount,
    keywords: a.tags,
  })

  const howtoBlueprint = HOWTO_BLUEPRINTS[a.slug]
  const howtoNode = howtoBlueprint
    ? howToSchema({ url: articleUrl, ...howtoBlueprint })
    : null

  return (
    <PageShell>
      <article>
        <header className="border-b border-border/60 bg-gradient-to-b from-background to-accent/30">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-primary">
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">{a.category}</span>
            </div>
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {a.title}
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              {a.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <time dateTime={a.publishedAt}>
                {formatPublishDate(a.publishedAt, "en")}
              </time>
              <span>·</span>
              <span>{a.readingMinutes} min read</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="border-primary/30 bg-primary/5 text-primary"
              >
                Commercial service call: {site.serviceCall}
              </Badge>
              <Badge variant="outline">Same-day dispatch</Badge>
            </div>
          </div>
        </header>

        <div className="border-b border-border/60 bg-background py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-lg leading-relaxed text-foreground/90">
              {a.lede}
            </p>

            {a.sections.map((section, idx) => (
              <section key={idx} className="mt-12">
                <h2 className="text-balance text-2xl font-semibold tracking-tight">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/85">
                  {section.body.map((p, i) => (
                    <p key={i}>{renderInline(p)}</p>
                  ))}
                </div>
              </section>
            ))}

            <Card className="mt-14 gap-4 border-primary/20 bg-primary/5 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                Related service pages
              </div>
              <ul className="grid gap-2 text-sm sm:grid-cols-2">
                {a.internalLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-flex items-center gap-1.5 text-foreground hover:text-primary hover:underline"
                    >
                      <ArrowRight className="size-3.5 text-primary" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="mt-6 gap-4 p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-semibold tracking-tight">
                    Need a commercial tech on site?
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {site.serviceCall} commercial service call, applied to the
                    approved repair. Same-day dispatch across South Florida.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <LinkButton href="/request-dispatch">
                    Request Dispatch
                  </LinkButton>
                  <AnchorButton href={site.phoneHref} variant="outline">
                    <Phone className="size-4" />
                    {site.phone}
                  </AnchorButton>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {relatedFinal.length ? (
          <section className="border-b border-border/60 bg-accent/20 py-16">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-semibold tracking-tight">
                More field guides
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedFinal.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Card className="h-full gap-3 p-5 transition-colors group-hover:ring-primary/40">
                      <div className="text-xs font-medium uppercase tracking-wider text-primary">
                        {r.category}
                      </div>
                      <h3 className="text-balance text-base font-semibold leading-snug">
                        {r.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {r.description}
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </article>

      <JsonLd data={blogPosting} />
      {howtoNode ? <JsonLd data={howtoNode} /> : null}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Blog", url: `${site.url}/blog` },
          { name: a.title, url: `${site.url}/blog/${a.slug}` },
        ])}
      />
    </PageShell>
  )
}
