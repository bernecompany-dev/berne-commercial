/**
 * Brand → technician mapping for berne-commercial.com.
 *
 * Surfaces 2-3 specialists in a "Specialists for this brand at Berne" block
 * on each /brands/{slug} page, linking to deployed /team/{slug} bio pages.
 *
 * Source of truth:
 *   - C:/Users/golds/Berne_Commercial/_data/technicians.json
 *   - apps/web/lib/data/team.ts (UI roster + photos)
 *   - apps/web/lib/data/team-bios.ts (deployed bio pages at /team/{slug})
 *
 * Commercial-tone mapping rules:
 *   - Hobart, Vulcan → restaurant/cooking-line techs (Maksim, Valerii, Nikita Sh.)
 *   - True, Manitowoc, Hoshizaki → ice + refrigeration techs (Boris, Viktor,
 *     Denis, Andrei)
 *   - Rational, Garland → cooking equipment (Maksim, Shokhrat, Nikita Sh.)
 *   - Traulsen → refrigeration (Andrei, Viktor, Denis)
 *
 * NOTE: Eugene (the owner) must never appear in technician/specialist lists —
 * founder schema lives in lib/seo.ts, not here.
 */

import { team, type TeamMember } from "./team"

/** Brand slug → ordered list of tech slugs (priority order, max 3 used). */
export const BRAND_SPECIALISTS: Record<string, string[]> = {
  // Cooking + dishwashing
  hobart: ["valerii-basov", "refat-bekirov", "maksim-shiryagin"],
  vulcan: ["nikita-shirshov", "maksim-shiryagin", "shokhrat-agabekov"],
  garland: ["nikita-shirshov", "shokhrat-agabekov", "valerii-basov"],
  rational: ["maksim-shiryagin", "shokhrat-agabekov", "andrei-lavrov"],

  // Refrigeration
  true: ["denis-novitskii", "andrei-lavrov", "viktor-kamenschikov"],
  traulsen: ["andrei-lavrov", "viktor-kamenschikov", "denis-novitskii"],

  // Ice machines
  manitowoc: ["boris", "nikita-maslakov", "viktor-kamenschikov"],
  hoshizaki: ["boris", "nikita-maslakov", "viktor-kamenschikov"],
}

const TEAM_BY_SLUG: Record<string, TeamMember> = Object.fromEntries(
  team.map((m) => [m.slug, m]),
)

/**
 * Resolve a brand slug to an ordered list of TeamMember objects (max 3).
 * Tech slugs that don't exist in the roster are silently dropped so the page
 * never breaks on a stale mapping.
 */
export function getBrandSpecialists(slug: string): TeamMember[] {
  const techSlugs = BRAND_SPECIALISTS[slug] ?? []
  return techSlugs
    .map((s) => TEAM_BY_SLUG[s])
    .filter((m): m is TeamMember => Boolean(m))
    .slice(0, 3)
}
