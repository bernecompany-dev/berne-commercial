import type { Metadata } from "next"
import Link from "next/link"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Cómo ${site.name} recopila, usa y protege información comercial y de contacto de clientes corporativos y visitantes del sitio.`,
  alternates: {
    canonical: "/es/privacy",
    languages: {
      "en-US": `${site.url}/privacy`,
      "es-US": `${site.url}/es/privacy`,
      "x-default": `${site.url}/privacy`,
    },
  },
  robots: { index: true, follow: true },
}

export default function PrivacyPageES() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/es" className="hover:text-foreground">Inicio</Link>
        <span aria-hidden>/</span>
        <span className="text-foreground/80">Privacidad</span>
      </nav>
      <h1 className="text-4xl font-semibold tracking-tight">Política de Privacidad</h1>
      <p className="mt-3 text-sm text-muted-foreground">Última actualización: 2026-05-20</p>

      <div className="mt-10 space-y-6 text-base leading-relaxed">
        <p>
          {site.name} ("nosotros," "nuestro") opera un servicio de reparación
          de equipo comercial para restaurantes, hoteles, administradores de
          propiedad, instalaciones de salud, cocinas de producción y otros
          negocios del Sur de Florida. Esta política explica qué información
          recopilamos cuando usted envía una solicitud de despacho a través de{" "}
          <a className="text-primary hover:underline" href={site.url}>{site.url}</a>,
          envía una orden de compra o nos contacta por teléfono o correo — y
          cómo la manejamos.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Qué recopilamos</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Datos de contacto comercial</strong> — nombre de la
            empresa, nombre de la sucursal, dirección de facturación, contacto
            en el sitio (nombre, cargo, teléfono, correo) y contacto de
            emergencia fuera de horario para despacho.
          </li>
          <li>
            <strong>Datos de solicitud de servicio</strong> — tipo de equipo,
            marca, modelo, número de serie, códigos de error, notas de
            servicios previos, instrucciones de acceso, ventana de urgencia y
            su descripción libre del problema.
          </li>
          <li>
            <strong>Datos de vendor / procurement</strong> — W-9, solicitud de
            Certificado de Seguro, formularios de vendor onboarding, datos
            bancarios para pagaderos y cualquier NDA o MSA que envíe para
            firma.
          </li>
          <li>
            <strong>Datos técnicos</strong> — dirección IP anonimizada, tipo
            de navegador, páginas visitadas y fuente de referencia vía Google
            Analytics 4.
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Cómo la usamos</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Despachar un técnico calificado y completar el servicio solicitado.</li>
          <li>Enviar confirmaciones, actualizaciones de ETA, reportes post-visita y facturas a los contactos que designe.</li>
          <li>Mantener registros de garantía e historial de servicio del equipo para que la próxima visita comience con contexto.</li>
          <li>Proveer documentación de vendor onboarding (COI, W-9, EPA 608) a su equipo de procurement.</li>
          <li>Mejorar nuestro servicio mediante analítica agregada (no identificable) de industrias y tipos de equipo que servimos.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Confidencialidad y NDAs</h2>
        <p>
          Para clientes de hospitalidad, salud y corporativos firmamos
          rutinariamente NDAs mutuos que cubren planos, inventario de equipo,
          recetas de cocina, datos de ocupación y cualquier información que
          nuestros técnicos observen en el sitio. Donde un NDA esté en vigor,
          prevalece sobre esta política en caso de conflicto. Incluso sin NDA
          firmado, tratamos toda observación en sitio como confidencial por
          defecto — nuestros técnicos no fotografían interiores, equipo ni
          personal sin autorización escrita por visita.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Lo que no hacemos</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>No vendemos, alquilamos ni comerciamos con información de contacto comercial.</li>
          <li>No compartimos inventario de equipo ni historial de servicio con competidores, brokers o listas de marketing.</li>
          <li>No corremos rastreadores publicitarios de terceros en este sitio.</li>
          <li>No enviamos correo ni SMS de marketing no solicitado; las comunicaciones se relacionan solo con su servicio solicitado o relación de vendor activa.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Terceros que usamos</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li><strong>Resend</strong> — entrega de correo transaccional para confirmaciones de despacho y notificaciones de leads.</li>
          <li><strong>Vercel</strong> — hosting del sitio. Logs de request retenidos ~30 días.</li>
          <li><strong>Google Analytics 4</strong> — analítica agregada con IP anonimizada.</li>
          <li><strong>HousecallPro</strong> — CRM de despacho; almacena work orders, equipo e historial de visitas.</li>
          <li><strong>Stripe / Square</strong> — procesamiento de pagos con tarjeta.</li>
          <li><strong>Google Maps</strong> — mapas embebidos en páginas de áreas de servicio.</li>
        </ul>
        <p>
          Cada proveedor se rige por sus propios términos; los usamos
          estrictamente para el propósito operacional listado y no los
          autorizamos a usar sus datos para su propio marketing.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Retención</h2>
        <p>
          Historial de servicio y facturas se conservan 7 años para cumplir
          con el estatuto de limitaciones de Florida y requisitos de auditoría
          de procurement. Los envíos de formulario que no se convierten en
          clientes se purgan después de 12 meses. Puede solicitar eliminación
          antes escribiendo a{" "}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>{site.email}</a>,
          sujeto a obligaciones legales y fiscales.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Sus derechos</h2>
        <p>
          Residentes de Florida y California (CCPA) pueden solicitar copia de
          sus datos personales, corregir inexactitudes o solicitar eliminación
          sujeto a la retención anterior. Escriba a{" "}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>{site.email}</a>{" "}
          con descripción breve de su solicitud; respondemos dentro de 30 días.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Seguridad</h2>
        <p>
          Alojamos en Vercel (cifrado en tránsito y en reposo). Credenciales
          de vendor, datos bancarios y cualquier acuerdo firmado se almacenan
          en sistemas con control de acceso. No almacenamos números completos
          de tarjeta en nuestros servidores — el pago es procesado
          directamente por Stripe/Square.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Niños</h2>
        <p>
          Nuestro servicio es B2B; no recopilamos conscientemente datos
          personales de menores de 16 años.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Actualizaciones</h2>
        <p>
          Podemos actualizar esta política. Los cambios materiales se publican
          aquí con nueva fecha de "Última actualización." El uso continuado
          del sitio o servicio después de la fecha publicada constituye
          aceptación.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Contacto</h2>
        <p>
          Correo{" "}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>{site.email}</a>{" "}
          · teléfono{" "}
          <a className="text-primary hover:underline" href={site.phoneHref}>{site.phone}</a>{" "}
          · dirección: {site.address.streetAddress}, {site.address.locality},{" "}
          {site.address.region} {site.address.postalCode}.
        </p>
        <p className="text-xs text-muted-foreground">
          Vea también: <Link href="/es/terms" className="hover:text-primary">Términos de Servicio</Link>{" "}
          · <Link href="/es/cookies" className="hover:text-primary">Política de Cookies</Link>
        </p>
      </div>
    </article>
  )
}
