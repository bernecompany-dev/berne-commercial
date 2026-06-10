import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { IndustriesSection } from "@/components/industries-section"
import { WhyUs } from "@/components/why-us"
import { BrandCloud } from "@/components/brand-cloud"
import { FounderSection } from "@/components/founder-section"
import { TeamGrid } from "@/components/team-grid"
import { CredentialsSection } from "@/components/credentials-section"
import { TrustedBy } from "@/components/trusted-by"
import { ReviewsSection } from "@/components/reviews-section"
import { DispatchSection } from "@/components/dispatch-section"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { faqSchema, founderSchema } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Reparación de Equipo Comercial en el Sur de Florida",
  // 152ch — Google trunca ~160 (W3-P2.1); mantiene refrigeración comercial,
  // Miami y la llamada de servicio $89.
  description:
    "Reparación de equipo comercial en Miami y el sur de Florida — refrigeración comercial, máquinas de hielo, cocina y lavandería. Llamada de servicio: $89.",
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: `${site.url}/es`,
    siteName: site.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

const homepageFaqs = [
  {
    q: "¿Cuánto cuesta la llamada de servicio comercial?",
    a: "Nuestra llamada de servicio comercial es $89 y se aplica al costo de la reparación aprobada.",
  },
  {
    q: "¿Ofrecen servicio comercial de emergencia el mismo día?",
    a: "Sí — operamos despacho de emergencia en Miami-Dade, Broward y Palm Beach. Fallas de refrigeración y equipo crítico para food safety tienen prioridad.",
  },
  {
    q: "¿Qué equipo comercial reparan?",
    a: "Refrigeración comercial (walk-ins, reach-ins, prep tables, congelación profunda), máquinas de hielo, freidoras, hornos, ranges, steamers, lavandería comercial, garbage disposals y trash compactors.",
  },
  {
    q: "¿Qué marcas reparan?",
    a: "Hoshizaki, Manitowoc, Scotsman, Turbo Air, True, Traulsen, Beverage-Air, Continental, Delfield, Vulcan, Hobart, Rational, Blodgett, Garland, Southbend, Cleveland, Pitco, Frymaster, Middleby, Alto-Shaam, Hatco, Electrolux Professional, Speed Queen, Whirlpool Commercial, Maytag Commercial y más.",
  },
  {
    q: "¿Atienden cuentas multi-locación y cadenas?",
    a: "Sí. Hacemos onboarding de cadenas, franquicias y edificios administrados con COI, portales de vendor y reportes multi-locación. Visite la página Hacerse cliente para empezar.",
  },
  {
    q: "¿Están licenciados y asegurados?",
    a: "Sí. Berne Commercial Repair está licenciado y asegurado para servicio comercial en todo el Sur de Florida.",
  },
]

export default function HomePageES() {
  return (
    <>
      <SiteNavbar locale="es" />
      {/* Section order mirrors the EN home: dispatch form right after the
          core pitch, trust stack below. TrustStrip removed — the hero
          highlight cards above make the same claims. */}
      <main id="main" tabIndex={-1} className="pb-20 md:pb-0 focus:outline-none">
        <Hero locale="es" />
        <ServicesGrid locale="es" />
        <IndustriesSection locale="es" />
        <WhyUs locale="es" />
        <DispatchSection locale="es" />
        <ReviewsSection locale="es" />
        <CredentialsSection locale="es" />
        <FounderSection locale="es" />
        <TeamGrid compact locale="es" />
        <BrandCloud locale="es" />
        <TrustedBy locale="es" />
        <FAQSection
          faqs={homepageFaqs}
          title="Preguntas sobre reparación comercial"
          description="Preguntas frecuentes de restaurantes, plantas de producción y clientes corporativos."
        />
      </main>
      <SiteFooter locale="es" />
      <MobileCtaBar locale="es" />
      <JsonLd data={faqSchema(homepageFaqs)} />
      <JsonLd data={founderSchema()} />
    </>
  )
}
