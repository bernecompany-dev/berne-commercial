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
  title: "Blog de Reparación de Equipo Comercial — Berne Commercial",
  description:
    "Guías de campo para operadores de restaurantes, cocinas de hotel y administradores de propiedades — máquinas de hielo, cuartos fríos, lavavajillas, espresso y freidoras.",
  path: "/es/blog",
  locale: "es",
})

export default function BlogIndexPageES() {
  const posts = publishedArticles()

  return (
    <PageShell locale="es">
      <PageHero
        eyebrow="Notas de campo"
        title="Blog de Reparación de Equipo Comercial"
        description="Guías de diagnóstico para el equipo que mantiene activas las cocinas, hoteles y plantas de producción del Sur de Florida. Escritas por los técnicos de nuestros camiones. (Artículos en inglés en v1 — traducción al español próximamente.)"
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            Llamada de servicio comercial: {site.serviceCall}
          </Badge>
          <Badge variant="outline">Despacho de emergencia el mismo día</Badge>
          <Badge variant="outline">Licenciados y asegurados</Badge>
        </div>
      </PageHero>

      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">
              Nuevos artículos pronto. Llame al despacho al{" "}
              <a href={site.phoneHref} className="text-primary hover:underline">
                {site.phone}
              </a>{" "}
              mientras tanto.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  hrefLang="en"
                >
                  <Card className="h-full gap-4 p-6 transition-colors group-hover:ring-primary/40">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
                      <span>{post.category}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">
                        {post.readingMinutes} min de lectura
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
                        {formatPublishDate(post.publishedAt, "es")}
                      </time>
                      <span className="inline-flex items-center gap-1 font-medium text-primary transition-all group-hover:gap-2">
                        Leer (EN) <ArrowRight className="size-3.5" />
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
          { name: "Inicio", url: `${site.url}/es` },
          { name: "Blog", url: `${site.url}/es/blog` },
        ])}
      />
    </PageShell>
  )
}
