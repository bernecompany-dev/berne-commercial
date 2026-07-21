/**
 * Open role for Berne Commercial. Surfaced on /careers (+ /es/careers) and
 * emitted as JobPosting JSON-LD for Google for Jobs.
 *
 * Facts policy (2026-07-21 rewrite): only verified company facts — in business
 * since 2015, 18 W-2 staff technicians, EPA 608 required for refrigeration
 * work, Miami-Dade / Broward / Palm Beach coverage. No salary figures: pay is
 * discussed at the interview, so baseSalary is intentionally absent from the
 * schema (Google treats it as recommended, not required).
 *
 * validThrough is 6 months out from POSTING_DATE. Refresh both together.
 */
export const POSTING_DATE = "2026-07-21"
export const VALID_THROUGH = "2027-01-21"

export const JOB = {
  slug: "commercial-appliance-refrigeration-technician",
  title: "Commercial Appliance / Refrigeration Technician",
  titleEs: "Técnico de equipos comerciales y refrigeración",
  employmentType: "FULL_TIME" as const,
  counties: ["Miami-Dade County", "Broward County", "Palm Beach County"],
  description:
    "Field technician for commercial kitchen and refrigeration equipment in South Florida. Berne Commercial has serviced restaurants, hotels, condo towers, and property management accounts since 2015 and runs 18 staff technicians on W-2 payroll. The route covers walk-in coolers and freezers, ice machines, commercial ovens, dishmachines, and laundry equipment across Miami-Dade, Broward, and Palm Beach counties. Dispatch assigns the work orders — the commercial order flow is steady year-round.",
  descriptionEs:
    "Técnico de campo para equipos de cocina comercial y refrigeración en el sur de Florida. Berne Commercial atiende restaurantes, hoteles, torres de condominios y administradores de propiedades desde 2015, con 18 técnicos de planta en nómina W-2. La ruta cubre cuartos fríos y congeladores, máquinas de hielo, hornos comerciales, lavavajillas y equipos de lavandería en los condados de Miami-Dade, Broward y Palm Beach. El despacho asigna las órdenes de trabajo — el flujo de órdenes comerciales es estable todo el año.",
  requirements: [
    "Hands-on experience with commercial kitchen or commercial refrigeration equipment — or strong residential appliance experience and the will to learn the commercial side",
    "EPA Section 608 certification (required for refrigeration work)",
    "Valid driver's license",
    "Conversational English for customers and work orders (Russian is widely spoken on the team)",
  ],
  requirementsEs: [
    "Experiencia práctica con equipos de cocina comercial o refrigeración comercial — o experiencia residencial sólida y disposición de aprender el lado comercial",
    "Certificación EPA Sección 608 (obligatoria para trabajos de refrigeración)",
    "Licencia de conducir válida",
    "Inglés conversacional para clientes y órdenes de trabajo (el ruso es común en el equipo)",
  ],
  skills:
    "Commercial refrigeration, walk-in coolers, ice machines, commercial ovens, dishmachines, commercial laundry equipment, EPA 608",
  skillsEs:
    "Refrigeración comercial, cuartos fríos, máquinas de hielo, hornos comerciales, lavavajillas, equipos de lavandería comercial, EPA 608",
}
