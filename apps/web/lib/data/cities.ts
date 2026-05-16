export type County = "miami-dade" | "broward" | "palm-beach"

export type City = {
  slug: string
  name: string
  county: County
}

export const COUNTIES: Record<County, string> = {
  "miami-dade": "Miami-Dade",
  broward: "Broward",
  "palm-beach": "Palm Beach",
}

const raw: { name: string; county: County }[] = [
  // Miami-Dade
  { name: "Miami", county: "miami-dade" },
  { name: "Miami Beach", county: "miami-dade" },
  { name: "North Miami", county: "miami-dade" },
  { name: "North Miami Beach", county: "miami-dade" },
  { name: "Sunny Isles Beach", county: "miami-dade" },
  { name: "Aventura", county: "miami-dade" },
  { name: "Bal Harbour", county: "miami-dade" },
  { name: "Surfside", county: "miami-dade" },
  { name: "Bay Harbor Islands", county: "miami-dade" },
  { name: "Coral Gables", county: "miami-dade" },
  { name: "Coconut Grove", county: "miami-dade" },
  { name: "Brickell", county: "miami-dade" },
  { name: "Downtown Miami", county: "miami-dade" },
  { name: "Edgewater", county: "miami-dade" },
  { name: "Wynwood", county: "miami-dade" },
  { name: "Design District", county: "miami-dade" },
  { name: "Doral", county: "miami-dade" },
  { name: "Hialeah", county: "miami-dade" },
  { name: "Hialeah Gardens", county: "miami-dade" },
  { name: "Kendall", county: "miami-dade" },
  { name: "Pinecrest", county: "miami-dade" },
  { name: "Palmetto Bay", county: "miami-dade" },
  { name: "South Miami", county: "miami-dade" },
  { name: "Cutler Bay", county: "miami-dade" },
  { name: "Sweetwater", county: "miami-dade" },
  { name: "West Miami", county: "miami-dade" },
  { name: "Miami Lakes", county: "miami-dade" },
  { name: "Miami Gardens", county: "miami-dade" },
  { name: "Opa-locka", county: "miami-dade" },
  { name: "Fontainebleau", county: "miami-dade" },
  { name: "Westchester", county: "miami-dade" },
  { name: "Tamiami", county: "miami-dade" },
  { name: "Key Biscayne", county: "miami-dade" },
  // Broward
  { name: "Fort Lauderdale", county: "broward" },
  { name: "Hollywood", county: "broward" },
  { name: "Hallandale Beach", county: "broward" },
  { name: "Pembroke Pines", county: "broward" },
  { name: "Miramar", county: "broward" },
  { name: "Davie", county: "broward" },
  { name: "Plantation", county: "broward" },
  { name: "Weston", county: "broward" },
  { name: "Sunrise", county: "broward" },
  { name: "Tamarac", county: "broward" },
  { name: "Coral Springs", county: "broward" },
  { name: "Parkland", county: "broward" },
  { name: "Coconut Creek", county: "broward" },
  { name: "Deerfield Beach", county: "broward" },
  { name: "Pompano Beach", county: "broward" },
  { name: "Lighthouse Point", county: "broward" },
  { name: "Oakland Park", county: "broward" },
  { name: "Wilton Manors", county: "broward" },
  { name: "Dania Beach", county: "broward" },
  { name: "Margate", county: "broward" },
  { name: "Cooper City", county: "broward" },
  { name: "North Lauderdale", county: "broward" },
  { name: "Southwest Ranches", county: "broward" },
  // Palm Beach
  { name: "Boca Raton", county: "palm-beach" },
  { name: "Delray Beach", county: "palm-beach" },
  { name: "Boynton Beach", county: "palm-beach" },
  { name: "West Palm Beach", county: "palm-beach" },
  { name: "Palm Beach Gardens", county: "palm-beach" },
  { name: "Jupiter", county: "palm-beach" },
  { name: "Wellington", county: "palm-beach" },
  { name: "Royal Palm Beach", county: "palm-beach" },
  { name: "Riviera Beach", county: "palm-beach" },
  { name: "Greenacres", county: "palm-beach" },
  { name: "Lake Worth", county: "palm-beach" },
  { name: "Highland Beach", county: "palm-beach" },
  { name: "Palm Springs", county: "palm-beach" },
  { name: "North Palm Beach", county: "palm-beach" },
]

export const cities: City[] = raw.map((c) => ({
  ...c,
  slug: c.name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-"),
}))

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug)
}

export function citiesByCounty() {
  return (Object.keys(COUNTIES) as County[]).map((county) => ({
    county,
    label: COUNTIES[county],
    items: cities.filter((c) => c.county === county),
  }))
}

export function nearbyCities(slug: string, limit = 6): City[] {
  const c = getCity(slug)
  if (!c) return []
  return cities.filter((x) => x.county === c.county && x.slug !== c.slug).slice(0, limit)
}
