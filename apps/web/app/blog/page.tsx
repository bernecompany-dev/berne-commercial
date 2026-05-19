import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { metaFor, breadcrumbSchema } from "@/lib/seo"
import { JsonLd } from "@/components/json-ld"
import { site } from "@/lib/site"
import { publishedArticles, formatPublishDate } from "@/lib/blog/articles"

export const revalidate = 3600

export const metadata: Metadata = metaFor({
  title: "Commercial Equipment Repair Blog — Berne Commercial",
  description:
    "Field guides for restaurant operators, hotel kitchens, and property managers — ice machines, walk-in coolers, dishwashers, espresso, fryers, and more.",
  path: "/blog",
})

export default function BlogIndexPage() {
  const posts = publishedArticles()

  return (
    <PageShell>
      <PageHero
        eyebrow="Field Notes"
        title="Commercial Equipment Repair Blog"
        description="Practical diagnostic guides for the equipment that keeps South Florida kitchens, hotels, and food production lines running. Written by the technicians on our trucks."
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            Commercial service call: {site.serviceCall}
          </Badge>
          <Badge variant="outline">Same-day emergency dispatch</Badge>
          <Badge variant="outline">Licensed & insured</Badge>
        </div>
      </PageHero>

      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">
              New articles publishing soon. Call dispatch at{" "}
              <a href={site.phoneHref} className="text-primary hover:underline">
                {site.phone}
              </a>{" "}
              for service in the meantime.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                >
                  <Card className="h-full gap-4 p-6 transition-colors group-hover:ring-primary/40 group-focus-visible:ring-primary/60">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
                      <span>{post.category}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">
                        {post.readingMinutes} min read
                      </span>
                    </div>
                    <h2 className="text-balance text-lg font-semibold leading-snug tracking-tight">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {post.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-2 text-xs text-muted-foreground">
                      <time dateTime={post.publishedAt}>
                        {formatPublishDate(post.publishedAt, "en")}
                      </time>
                      <span className="inline-flex items-center gap-1 font-medium text-primary transition-all group-hover:gap-2">
                        Read <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Blog", url: `${site.url}/blog` },
        ])}
      />
    </PageShell>
  )
}
