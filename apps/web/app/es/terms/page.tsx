import type { Metadata } from "next"
import Link from "next/link"
import { site } from "@/lib/site"
import { metaFor } from "@/lib/seo"

// metaFor keeps og:locale (es_US) and the hreflang cluster (en/es/x-default)
// consistent with every other ES page — the previous hand-rolled metadata
// inherited og:locale=en_US from the root layout.
export const metadata: Metadata = metaFor({
  title: "Términos de Servicio",
  description: `Alcance del servicio, despacho, precios, garantía, pago, NDA y términos de vendor para clientes comerciales de ${site.name}.`,
  path: "/es/terms",
  locale: "es",
})

export default function TermsPageES() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/es" className="hover:text-foreground">Inicio</Link>
        <span aria-hidden>/</span>
        <span className="text-foreground/80">Términos</span>
      </nav>
      <h1 className="text-4xl font-semibold tracking-tight">Términos de Servicio</h1>
      <p className="mt-3 text-sm text-muted-foreground">Última actualización: 2026-05-20</p>

      <div className="mt-10 space-y-6 text-base leading-relaxed">
        <p>
          Estos términos rigen el servicio de reparación de equipo comercial
          provisto por {site.name} ("nosotros," "nuestro") a su empresa
          ("Cliente"). Al enviar una solicitud de despacho, aceptar una visita
          programada o emitir una orden de compra, usted acepta estos términos.
          Donde exista un Master Service Agreement (MSA) firmado, el MSA
          prevalece en caso de conflicto.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">1. Alcance del servicio</h2>
        <p>
          Brindamos servicio en sitio de diagnóstico, reparación y
          mantenimiento de equipo comercial en Miami-Dade, Broward, Palm Beach
          y condados aledaños del Sur de Florida. Categorías de equipo
          incluyen refrigeración comercial (walk-ins, prep tables, máquinas
          de hielo, congelación profunda), equipo de restaurante (estufas,
          hornos, freidoras, salamandras, vaporizadores, lavavajillas),
          lavandería comercial y sistemas de back-of-house para restaurantes,
          hoteles, salud, multifamily y producción.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">2. Despacho y respuesta</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>El despacho de emergencia se ofrece el mismo día según capacidad. Las ventanas estándar son típicamente de 2 horas.</li>
          <li>Despacho fuera de horario y fines de semana disponible con tarifa premium; cotizado a solicitud.</li>
          <li>Confirmamos la ventana de servicio por teléfono antes de despachar un truck.</li>
          <li>El Cliente debe designar un contacto en sitio autorizado para dar acceso, aprobar reparaciones y firmar el work order.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">3. Tarifa de servicio y precios</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>La tarifa de llamada de servicio comercial (diagnóstico) es de <strong>{site.serviceCall}</strong>. Se aplica al costo de la reparación si autoriza el trabajo el mismo día.</li>
          <li>Precios de reparación se cotizan como tarifa plana o tiempo-y-materiales, divulgados por escrito antes de comenzar.</li>
          <li>Costos de partes se informan por adelantado. Partes de pedido especial, solo OEM o expeditadas pueden requerir depósito.</li>
          <li>El contacto en sitio autoriza reparaciones por escrito (estimado firmado o work order digital) antes de pedir partes o iniciar trabajo.</li>
          <li>Para cuentas con MSA firmado, los precios siguen el schedule del MSA.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">4. Garantía</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li><strong>90 días de garantía de mano de obra</strong> sobre el trabajo completado.</li>
          <li>Garantía del fabricante sobre partes OEM según se suministren (típicamente 1 año).</li>
          <li>La garantía se anula si el equipo es modificado o reparado por otro vendor después de nuestra reparación, si la falla no se relaciona con el trabajo original o si sufre daño por agua, sobretensión, abuso o plagas.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">5. Responsabilidades del Cliente</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Proveer acceso razonable al equipo, al desconectador eléctrico y a cualquier válvula de aislamiento requerida.</li>
          <li>Mantener logs de refrigerante y reportes de amoníaco/CO₂ donde aplique; documentaremos nuestro trabajo pero la obligación del log subyacente permanece con el operador.</li>
          <li>Divulgar peligros conocidos de seguridad (fugas de gas, fallas eléctricas, riesgos de resbalón) antes de la llegada del técnico.</li>
          <li>Notificarnos prontamente de problemas de garantía para re-despachar bajo el período de garantía.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">6. Vendor onboarding, COI y confidencialidad</h2>
        <p>
          Para cuentas con vendor onboarding proveemos W-9, certificación EPA
          Sección 608, Certificado de Seguro vigente nombrando al Cliente
          como asegurado adicional cuando se solicita, y cualquier registro
          requerido en portales de vendor. Firmaremos NDAs provistos por el
          Cliente y observamos rutinariamente confidencialidad respecto a
          planos, inventario de equipo, recetas, datos de ocupación y
          cualquier otro detalle operacional observado en sitio, sin importar
          si un NDA está en vigor.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">7. Términos de pago</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Términos de pago estándar: Net 15 para cuentas facturadas; al completar para visitas únicas sin MSA.</li>
          <li>Pagos aceptados: ACH, cheque, tarjeta de crédito/débito, Zelle.</li>
          <li>Saldos vencidos pueden acumular 1.5% mensual de interés después de 30 días.</li>
          <li>Cargo por pago rechazado: $50 por ocurrencia.</li>
          <li>Facturas disputadas deben presentarse por escrito dentro de 15 días de la fecha de factura; de lo contrario, la factura se considera aceptada.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">8. Cancelación y no-show</h2>
        <p>
          El Cliente puede cancelar o reprogramar una visita no-emergencia sin
          cargo hasta 2 horas antes de la ventana de llegada. Cancelaciones
          dentro de ese plazo o no-shows cuando el técnico llega pueden
          generar un cargo de viaje igual a la tarifa de servicio.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">9. Limitación de responsabilidad</h2>
        <p>
          Nuestra responsabilidad máxima por cualquier reclamo derivado de
          una visita se limita al monto pagado por esa visita, salvo lo
          requerido por la ley de Florida. No somos responsables por daños
          consecuentes (deterioro de alimentos, interrupción del negocio,
          noches de hotel perdidas, ingresos perdidos) salvo cuando sean
          causados por nuestra negligencia grave. Donde exista MSA firmado,
          las provisiones de responsabilidad del MSA controlan.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">10. Seguro</h2>
        <p>
          Mantenemos cobertura de Responsabilidad General y Workers'
          Compensation en límites estándar de la industria. El COI vigente
          está disponible a solicitud escribiendo a{" "}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">11. Resolución de disputas</h2>
        <p>
          La ley de Florida rige estos términos. Disputas que no puedan
          resolverse directamente con nuestro equipo de despacho y operaciones
          se someterán a arbitraje vinculante en el condado de Broward,
          Florida, antes de cualquier acción judicial. Cada parte asume sus
          propios costos de arbitraje salvo decisión contraria del árbitro.
          Donde un MSA firmado incluya distinto venue o proceso, esa provisión
          controla.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">12. Actualizaciones</h2>
        <p>
          Podemos actualizar estos términos; cambios materiales se publican
          aquí con nueva fecha de "Última actualización." Para cuentas con
          MSA, el control de cambios sigue al MSA.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Contacto</h2>
        <p>
          Correo{" "}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>{site.email}</a>{" "}
          · teléfono{" "}
          <a className="text-primary hover:underline" href={site.phoneHref}>{site.phone}</a>.
        </p>
        <p className="text-xs text-muted-foreground">
          Vea también: <Link href="/es/privacy" className="hover:text-primary">Política de Privacidad</Link>{" "}
          · <Link href="/es/cookies" className="hover:text-primary">Política de Cookies</Link>
        </p>
      </div>
    </article>
  )
}
