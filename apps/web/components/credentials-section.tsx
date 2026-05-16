import { FileText, ShieldCheck, Award, Stamp } from "lucide-react"
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
            icon: Stamp,
            title: "DBA · Berne Appliance Repair",
            body: "Entidad de negocio registrada. Facturamos y firmamos contratos como vendor legítimo de Florida.",
            file: "/credentials/dba-berne-appliance-repair.pdf",
            fileLabel: "Ver DBA (PDF)",
          },
          {
            icon: Award,
            title: "Certificación EPA Section 608",
            body: "Certificación federal requerida para manejar refrigerantes en sistemas comerciales. Nuestro equipo de refrigeración está certificado.",
            file: "/credentials/epa-certificate.pdf",
            fileLabel: "Ver certificado EPA (PDF)",
          },
          {
            icon: FileText,
            title: "Licencia de técnico",
            body: "Técnico senior con licencia en el equipo — documentación adicional disponible a solicitud.",
            file: "/credentials/technician-license.jpg",
            fileLabel: "Ver licencia",
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
            icon: Stamp,
            title: "DBA · Berne Appliance Repair",
            body: "Registered business entity. We invoice and contract as a legitimate Florida service vendor.",
            file: "/credentials/dba-berne-appliance-repair.pdf",
            fileLabel: "View DBA filing (PDF)",
          },
          {
            icon: Award,
            title: "EPA Section 608 Certification",
            body: "Required federal certification for handling refrigerants in commercial systems. Our refrigeration team is certified.",
            file: "/credentials/epa-certificate.pdf",
            fileLabel: "View EPA certificate (PDF)",
          },
          {
            icon: FileText,
            title: "Technician License",
            body: "Licensed senior technician on the team — additional licensing documentation available on request.",
            file: "/credentials/technician-license.jpg",
            fileLabel: "View license",
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
