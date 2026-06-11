import type { Metadata } from "next"
import Link from "next/link"
import { PageHero, PageShell } from "@/components/page-shell"
import { CredentialsSection } from "@/components/credentials-section"
import { LinkButton } from "@/components/link-button"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, HAS_CREDENTIAL, metaFor } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata: Metadata = metaFor({
  title: "Credenciales, Licencia y Seguro",
  description:
    "Licencia de técnico de Florida, EPA 608, COI, DBA, W-9, exención de Workers' Comp, EIN, certificado de reventa y membresía MSA World — Berne Commercial Repair.",
  path: "/es/credentials",
  locale: "es",
})

export default function CredentialsPageES() {
  const credentialPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/es/credentials#webpage`,
    url: `${site.url}/es/credentials`,
    name: "Berne Commercial Repair — Credenciales y Seguro",
    inLanguage: "es-US",
    about: { "@id": `${site.url}/#localbusiness` },
    mainEntity: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      hasCredential: HAS_CREDENTIAL,
    },
    isPartOf: { "@id": `${site.url}/#website` },
  }

  return (
    <PageShell locale="es">
      <PageHero
        eyebrow="Credenciales"
        title="Licencia, seguro y documentación"
        description={`${site.name} está licenciado, asegurado y certificado por EPA — listo para onboarding con property managers y equipos corporativos de procurement en Florida. Cada credencial es descargable para cumplimiento de vendor.`}
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/es/become-a-client">
            Hacerse cliente comercial
          </LinkButton>
          <LinkButton href="/es/contact" variant="outline">
            Hablar con despacho
          </LinkButton>
        </div>
      </PageHero>

      <CredentialsSection locale="es" />

      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            ¿Necesita otro documento?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Enviamos rutinariamente COI nombrando la propiedad o cadena como
            additional insured, paquetes de vendor, W-9s en papel membretado y
            uploads a portales de procurement (Compliance Depot, NetVendor,
            RealPage, Yardi). Escriba a{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-primary underline-offset-2 hover:underline"
            >
              {site.email}
            </a>{" "}
            o{" "}
            <Link
              href="/es/contact"
              className="text-primary underline-offset-2 hover:underline"
            >
              contacte a despacho
            </Link>{" "}
            y lo enviamos el mismo día hábil.
          </p>
        </div>
      </section>

      <JsonLd data={credentialPageSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", url: `${site.url}/es` },
          { name: "Credenciales", url: `${site.url}/es/credentials` },
        ])}
      />
    </PageShell>
  )
}
