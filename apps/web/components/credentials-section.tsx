import { FileText, ShieldCheck, Award, Stamp, Building2, Receipt, FileSignature, ShieldHalf, Network, GraduationCap } from "lucide-react"
import { Card } from "@workspace/ui/components/card"
import { SectionHeading } from "./section-heading"
import { t } from "@/lib/i18n/dict"
import type { Locale } from "@/lib/i18n/config"

export function CredentialsSection({ locale = "en" }: { locale?: Locale }) {
  const tr = t(locale)
  const credentials =
    locale === "es"
      ? [
          {
            icon: ShieldCheck,
            title: "Certificado de seguro (COI)",
            body: "Cobertura de responsabilidad general en archivo. Proveemos un COI nombrando a su propiedad o cadena como additional insured a solicitud.",
            file: "/credentials/coi.pdf",
            fileLabel: "Ver COI (PDF)",
          },
          {
            icon: Award,
            title: "Certificación EPA Section 608",
            body: "Certificación federal del equipo para manejar refrigerantes (cert # 16-8019803514-2). Requerido para sistemas sellados comerciales.",
            file: "/credentials/epa-certificate.pdf",
            fileLabel: "Ver certificado EPA (PDF)",
          },
          {
            icon: FileText,
            title: "Licencia de técnico (FL DBPR)",
            body: "Técnico senior con licencia del Florida Department of Business and Professional Regulation. Documentación adicional disponible a solicitud.",
            file: "/credentials/technician-license.jpg",
            fileLabel: "Ver licencia",
          },
          {
            icon: Stamp,
            title: "DBA · Berne Appliance Repair",
            body: "Entidad de negocio registrada. Facturamos y firmamos contratos como vendor legítimo de Florida.",
            file: "/credentials/dba-berne-appliance-repair.pdf",
            fileLabel: "Ver DBA (PDF)",
          },
          {
            icon: ShieldHalf,
            title: "Exención FL Workers' Comp",
            body: "Exención oficial de compensación laboral del estado de Florida. Asegura cumplimiento para onboarding con propiedades comerciales.",
            file: "/credentials/wc-exemption.pdf",
            fileLabel: "Ver exención WC (PDF)",
          },
          {
            icon: Receipt,
            title: "Certificado de reventa FL",
            body: "Florida Annual Resale Certificate for Sales Tax. Compras de partes y materiales libres de impuestos para trabajos facturables.",
            file: "/credentials/florida-resale-certificate.pdf",
            fileLabel: "Ver certificado de reventa (PDF)",
          },
          {
            icon: Building2,
            title: "Asignación IRS EIN (CP 575)",
            body: "Carta oficial del IRS confirmando el número EIN. Solicitada frecuentemente por equipos de procurement corporativos.",
            file: "/credentials/ein-cp575.pdf",
            fileLabel: "Ver carta EIN (PDF)",
          },
          {
            icon: FileSignature,
            title: "IRS W-9",
            body: "Formulario W-9 firmado y vigente — listo para enviar al departamento de cuentas por pagar.",
            file: "/credentials/w9.pdf",
            fileLabel: "Ver W-9 (PDF)",
          },
          {
            icon: Network,
            title: "Miembro de MSA World",
            body: "Miembro de Marcone Servicers Association (MSA), la principal asociación industrial de contratistas de servicio de electrodomésticos en Norteamérica.",
            file: "https://msaworld.com/",
            fileLabel: "Visitar MSA World →",
          },
          {
            icon: GraduationCap,
            title: "Capacitación continua del fabricante",
            body: "Nuestros técnicos completan capacitación continua sobre tecnología emergente de electrodomésticos a través de cursos de MSA World y actualizaciones de OEM (Sub-Zero, Wolf, Miele, LG, Samsung, GE).",
            file: "https://msaworld.com/",
            fileLabel: "Programa MSA →",
          },
        ]
      : [
          {
            icon: ShieldCheck,
            title: "Certificate of Insurance",
            body: "General liability coverage on file. We provide a COI naming your property or chain as additional insured on request.",
            file: "/credentials/coi.pdf",
            fileLabel: "View COI (PDF)",
          },
          {
            icon: Award,
            title: "EPA Section 608 Certification",
            body: "Federal certification for handling refrigerants in sealed commercial systems (cert # 16-8019803514-2). Required for refrigeration work.",
            file: "/credentials/epa-certificate.pdf",
            fileLabel: "View EPA certificate (PDF)",
          },
          {
            icon: FileText,
            title: "Florida Technician License",
            body: "Licensed by the Florida Department of Business and Professional Regulation. Per-technician documentation available on request.",
            file: "/credentials/technician-license.jpg",
            fileLabel: "View license",
          },
          {
            icon: Stamp,
            title: "DBA · Berne Appliance Repair",
            body: "Registered business entity. We invoice and contract as a legitimate Florida service vendor.",
            file: "/credentials/dba-berne-appliance-repair.pdf",
            fileLabel: "View DBA filing (PDF)",
          },
          {
            icon: ShieldHalf,
            title: "FL Workers' Comp Exemption",
            body: "Florida workers' compensation exemption on file. Cleared for commercial property and hospitality vendor onboarding.",
            file: "/credentials/wc-exemption.pdf",
            fileLabel: "View WC exemption (PDF)",
          },
          {
            icon: Receipt,
            title: "Florida Resale Certificate",
            body: "Florida Annual Resale Certificate for Sales Tax. Lets us purchase parts and materials tax-exempt for billable repairs.",
            file: "/credentials/florida-resale-certificate.pdf",
            fileLabel: "View resale cert (PDF)",
          },
          {
            icon: Building2,
            title: "IRS EIN Assignment (CP 575)",
            body: "Official IRS letter confirming our Employer Identification Number. Commonly requested by corporate procurement.",
            file: "/credentials/ein-cp575.pdf",
            fileLabel: "View EIN letter (PDF)",
          },
          {
            icon: FileSignature,
            title: "IRS Form W-9",
            body: "Signed, current W-9 — ready to drop into your accounts-payable workflow.",
            file: "/credentials/w9.pdf",
            fileLabel: "View W-9 (PDF)",
          },
          {
            icon: Network,
            title: "MSA World Member",
            body: "Member of Marcone Servicers Association (MSA), the leading industry association for appliance service contractors in North America. Verifiable industry tie-in for procurement onboarding.",
            file: "https://msaworld.com/",
            fileLabel: "Visit MSA World →",
          },
          {
            icon: GraduationCap,
            title: "Continuous Manufacturer Training",
            body: "Our technicians complete ongoing training on emerging appliance technology through MSA World coursework and OEM programs (Sub-Zero, Wolf, Miele, LG, Samsung, GE).",
            file: "https://msaworld.com/",
            fileLabel: "MSA training program →",
          },
        ]

  return (
    <section className="border-b border-border/60 bg-accent/30 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={tr.sections.credentialsEyebrow}
          title={tr.sections.credentialsTitle}
          description={tr.sections.credentialsDescription}
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((c) => (
            <Card key={c.title} className="gap-3 p-6">
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="size-5" />
              </span>
              <div className="text-sm font-semibold">{c.title}</div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {c.body}
              </p>
              <a
                href={c.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                {c.fileLabel} →
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
