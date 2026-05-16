import { type County } from "./cities"

export type CityProfile = {
  slug: string
  corridor: string
  mix: string
  climate: string
}

const profiles: CityProfile[] = [
  // Miami-Dade
  { slug: "miami", corridor: "Brickell, Wynwood, Downtown and Edgewater corridors", mix: "the commercial mix runs from high-rise condo amenity kitchens and corporate cafés in Brickell to independent restaurants in Wynwood and the Design District", climate: "coastal humidity and salt air put steady pressure on outdoor condensers and refrigeration coil life" },
  { slug: "miami-beach", corridor: "Ocean Drive, Lincoln Road, Mid-Beach and South Beach", mix: "hospitality-heavy commercial base — hotels, beach clubs, restaurants and bars", climate: "salt air and ocean humidity accelerate compressor and condenser fan wear faster than inland Miami-Dade" },
  { slug: "north-miami", corridor: "the Biscayne Boulevard and NE 125th Street corridor", mix: "mixed retail, neighborhood restaurants and grocery operations", climate: "warm subtropical climate keeps refrigeration systems running near peak load year-round" },
  { slug: "north-miami-beach", corridor: "the 163rd Street corridor", mix: "retail, restaurants and convenience operations along 163rd Street", climate: "humidity-heavy coastal Miami-Dade — refrigeration cycles continuously and premature compressor failures are common" },
  { slug: "sunny-isles-beach", corridor: "the Collins Avenue high-rise strip", mix: "high-rise residential and hotel commercial kitchens plus condo amenity service", climate: "ocean-side salt corrosion is the dominant failure mode for outdoor refrigeration" },
  { slug: "aventura", corridor: "Aventura Mall and the Biscayne Boulevard corridor", mix: "retail, restaurants and hotel service tied to the mall and surrounding hospitality", climate: "coastal humidity drives heavy refrigeration cycling year-round" },
  { slug: "bal-harbour", corridor: "Bal Harbour Shops and the Collins Avenue hotel strip", mix: "high-end retail and hotel kitchens", climate: "salt air shortens outdoor condenser service intervals" },
  { slug: "surfside", corridor: "the Harding Avenue corridor", mix: "neighborhood restaurants, small hotels and beachfront service", climate: "salt-air corrosion of refrigeration components is the dominant maintenance concern" },
  { slug: "bay-harbor-islands", corridor: "the Kane Concourse commercial strip", mix: "a small commercial corridor of restaurants and professional services", climate: "humidity and coastal proximity accelerate compressor wear" },
  { slug: "coral-gables", corridor: "Miracle Mile and Coral Way", mix: "upscale restaurants, boutique hotels and professional offices with corporate cafés", climate: "the tree-canopied streets keep ambient temperatures slightly cooler than coastal Miami, but refrigeration loads are still continuous" },
  { slug: "coconut-grove", corridor: "CocoWalk and the bayside Main Highway corridor", mix: "bayside restaurants, bars, boutique hotels and marina-adjacent food service", climate: "humidity off Biscayne Bay puts extra load on outdoor refrigeration" },
  { slug: "brickell", corridor: "Brickell Avenue high-rises and Mary Brickell Village", mix: "corporate cafés, condo amenity kitchens, bars and restaurants in dense vertical configurations", climate: "rooftop and indoor mechanical rooms in high-rises require coordinated access for service" },
  { slug: "downtown-miami", corridor: "the Flagler Street and Bayfront Park corridor", mix: "corporate cafés, hotel service, food halls and event venues", climate: "high-rise commercial service usually means limited equipment access and tight service windows" },
  { slug: "edgewater", corridor: "the Biscayne Boulevard and Margaret Pace Park area", mix: "a growing restaurant and bar scene around new high-rise residential", climate: "coastal humidity dominates the refrigeration service load" },
  { slug: "wynwood", corridor: "the NW 2nd Avenue corridor and Wynwood Walls district", mix: "bars, breweries, independent restaurants and art-gallery cafés", climate: "high foot-traffic operations cycle refrigeration aggressively — early ice machine and reach-in failures are common" },
  { slug: "design-district", corridor: "the NE 39th–42nd Streets blocks", mix: "high-end retail, restaurants and gallery cafés", climate: "service windows are tight — luxury retail doesn't tolerate visible service activity during open hours" },
  { slug: "doral", corridor: "the NW 25th Street, NW 36th Street and Doral Plaza corridors", mix: "warehouses, distribution centers, corporate parks and adjacent restaurants", climate: "inland Miami-Dade — high ambient temperatures and dust load drive condenser-cleaning frequency up" },
  { slug: "hialeah", corridor: "Palm Avenue and West 49th Street", mix: "supermarkets, food production, Spanish-speaking restaurant base and auto-corridor service", climate: "high-volume supermarket and food-production refrigeration demands consistent preventative maintenance" },
  { slug: "hialeah-gardens", corridor: "the NW 122nd Street area", mix: "industrial parks, retail and small commercial kitchens", climate: "inland Miami-Dade, with steady refrigeration cycling year-round" },
  { slug: "kendall", corridor: "Kendall Drive and The Falls area", mix: "a suburban-commercial mix of restaurants, retail and family-format hospitality", climate: "humid subtropical climate, but cooler than coastal — refrigeration service profile is typical for inland Miami-Dade" },
  { slug: "pinecrest", corridor: "the US-1 commercial corridor", mix: "upscale restaurants, boutique retail and country-club service", climate: "lower-density commercial — refrigeration loads are steady but moderate" },
  { slug: "palmetto-bay", corridor: "the Old Cutler Road corridor", mix: "neighborhood restaurants, small retail and service businesses", climate: "south-Miami-Dade humidity keeps refrigeration runs continuous" },
  { slug: "south-miami", corridor: "Sunset Drive and the US-1 corridor", mix: "downtown South Miami restaurants and retail, plus professional-services kitchens", climate: "leafy canopy reduces ambient temperatures slightly; refrigeration service cycles remain standard" },
  { slug: "cutler-bay", corridor: "the Cutler Bay Town Center area", mix: "retail, restaurants and supermarkets serving south Miami-Dade", climate: "warm year-round, with high refrigeration cycling" },
  { slug: "sweetwater", corridor: "the Tamiami Trail area near FIU", mix: "small commercial kitchens, neighborhood retail and FIU-adjacent food service", climate: "inland and dusty — condenser cleaning is a recurring service need" },
  { slug: "west-miami", corridor: "the SW 8th Street area", mix: "neighborhood restaurants and small commercial service", climate: "inland warm climate, standard refrigeration service profile" },
  { slug: "miami-lakes", corridor: "Main Street Miami Lakes and adjacent corporate parks", mix: "a suburban-commercial mix of restaurants, professional services and corporate parks", climate: "inland — ambient temperatures drive condenser load on long summer days" },
  { slug: "miami-gardens", corridor: "the Hard Rock Stadium and 27th Avenue corridor", mix: "stadium-adjacent hospitality, retail and family-format restaurants", climate: "high-volume event-day operations mean refrigeration must hold under peak load" },
  { slug: "opa-locka", corridor: "the NW 27th Avenue commercial strip", mix: "industrial and small commercial mix", climate: "warm inland climate, refrigeration cycles continuously" },
  { slug: "fontainebleau", corridor: "the Westchester-Fontainebleau corridor", mix: "neighborhood restaurants, retail and small commercial", climate: "inland warm — standard refrigeration service profile" },
  { slug: "westchester", corridor: "the SW 87th Avenue commercial strip", mix: "neighborhood retail, supermarkets and family restaurants", climate: "inland — refrigeration runs hard during summer" },
  { slug: "tamiami", corridor: "the Tamiami Trail commercial corridor", mix: "neighborhood retail, small restaurants and university-adjacent food service", climate: "inland Miami-Dade — condenser cleaning is a recurring need" },
  { slug: "key-biscayne", corridor: "Crandon Boulevard and Harbor Drive", mix: "hotel and resort service, beachfront restaurants and country-club kitchens", climate: "ocean-side salt air is the dominant factor — outdoor refrigeration ages faster here than almost anywhere else in Miami-Dade" },
  // Broward
  { slug: "fort-lauderdale", corridor: "Las Olas, downtown, the beachfront and the Marina District", mix: "downtown restaurants, hotels, marina-adjacent food service and corporate-café operations", climate: "coastal humidity and salt air are constant factors for outdoor refrigeration" },
  { slug: "hollywood", corridor: "Hollywood Boulevard, Young Circle and Hollywood Beach", mix: "downtown ArtsPark restaurants, beachfront hospitality and family-format service", climate: "salt-air corrosion and humidity drive refrigeration component wear" },
  { slug: "hallandale-beach", corridor: "the Gulfstream Park and A1A corridor", mix: "casino, racing and waterfront hospitality plus condo amenity kitchens", climate: "coastal — salt-air-driven refrigeration wear is the dominant maintenance pattern" },
  { slug: "pembroke-pines", corridor: "Pines Boulevard and the Memorial Hospital area", mix: "suburban-commercial — retail, restaurants and medical-adjacent food service", climate: "inland Broward — refrigeration loads steady, with dust load on condensers" },
  { slug: "miramar", corridor: "Miramar Parkway and the Miramar Regional Park area", mix: "suburban retail, restaurants and corporate parks", climate: "inland Broward, with steady refrigeration cycling" },
  { slug: "davie", corridor: "University Drive and the Nova Southeastern University corridor", mix: "university-adjacent food service, suburban retail and equestrian-area restaurants", climate: "inland — ambient summer load drives condenser-cleaning frequency" },
  { slug: "plantation", corridor: "Broward Boulevard and the Plantation General area", mix: "corporate parks, retail and family-format restaurants", climate: "inland Broward, typical refrigeration service profile" },
  { slug: "weston", corridor: "the Bonaventure area and Indian Trace", mix: "planned-community retail, restaurants and corporate parks", climate: "inland — refrigeration loads steady year-round" },
  { slug: "sunrise", corridor: "the Sawgrass Mills area and Commercial Boulevard", mix: "mall-adjacent retail and restaurants plus corporate-park food service", climate: "high foot-traffic Sawgrass operations cycle refrigeration aggressively" },
  { slug: "tamarac", corridor: "Commercial Boulevard and McNab Road", mix: "retail, neighborhood restaurants and 55+ community service", climate: "inland Broward, with standard refrigeration cycling" },
  { slug: "coral-springs", corridor: "Sample Road and University Drive", mix: "a suburban-commercial mix of retail and restaurants", climate: "inland Broward — refrigeration service profile is typical" },
  { slug: "parkland", corridor: "State Road 7 and the Heron Bay area", mix: "upscale residential-adjacent retail and restaurants", climate: "lower-density commercial — refrigeration loads are moderate" },
  { slug: "coconut-creek", corridor: "the Promenade at Coconut Creek and the Seminole Casino area", mix: "casino, mall-adjacent retail and restaurants", climate: "high-traffic operations cycle refrigeration aggressively" },
  { slug: "deerfield-beach", corridor: "Hillsboro Boulevard and the beachfront", mix: "beachfront hospitality, corporate parks and family-format restaurants", climate: "coastal — salt-air load on outdoor refrigeration" },
  { slug: "pompano-beach", corridor: "Atlantic Boulevard and the marina district", mix: "marina-adjacent restaurants, downtown service and beachfront hospitality", climate: "coastal salt-air load — marina-side outdoor units age fast" },
  { slug: "lighthouse-point", corridor: "the Federal Highway corridor", mix: "upscale waterfront restaurants and boutique service", climate: "coastal — salt-air-driven equipment wear" },
  { slug: "oakland-park", corridor: "the Dixie Highway and Federal Highway corridors", mix: "neighborhood restaurants and mixed retail", climate: "coastal-adjacent Broward, with standard humidity-driven refrigeration load" },
  { slug: "wilton-manors", corridor: "the Wilton Drive corridor", mix: "bar, restaurant and entertainment-district service", climate: "high-volume operations on the Drive cycle ice machines and refrigeration hard" },
  { slug: "dania-beach", corridor: "Dania Pointe and the US-1 corridor", mix: "airport-adjacent retail, restaurants and hotels", climate: "coastal Broward — salt and humidity load" },
  { slug: "margate", corridor: "Margate Boulevard and State Road 7", mix: "neighborhood retail, restaurants and supermarkets", climate: "inland Broward — refrigeration cycling standard" },
  { slug: "cooper-city", corridor: "the Stirling Road area", mix: "suburban retail and family-format restaurants", climate: "inland — refrigeration loads moderate" },
  { slug: "north-lauderdale", corridor: "the Kimberly Boulevard corridor", mix: "neighborhood retail and small commercial", climate: "inland Broward — standard service profile" },
  { slug: "southwest-ranches", corridor: "the Stirling Road and Griffin Road corridors", mix: "low-density commercial — restaurants and equestrian-adjacent service", climate: "rural Broward — refrigeration service typical for the climate zone" },
  // Palm Beach
  { slug: "boca-raton", corridor: "Mizner Park, Glades Road and the FAU corridor", mix: "corporate parks, upscale restaurants, hotels and university-adjacent food service", climate: "coastal Palm Beach — salt-air load on outdoor refrigeration" },
  { slug: "delray-beach", corridor: "Atlantic Avenue and Pineapple Grove", mix: "downtown restaurants, hotels and entertainment-district hospitality", climate: "coastal — Atlantic Ave operations cycle refrigeration heavily" },
  { slug: "boynton-beach", corridor: "the Federal Highway and Boynton Beach Mall area", mix: "mixed retail, restaurants and waterfront-adjacent hospitality", climate: "coastal-adjacent — refrigeration loads steady" },
  { slug: "west-palm-beach", corridor: "Clematis Street, CityPlace and Northwood", mix: "downtown restaurants, corporate offices, hotels and entertainment-district hospitality", climate: "coastal Palm Beach — humidity and salt-air load on outdoor refrigeration" },
  { slug: "palm-beach-gardens", corridor: "PGA Boulevard and the Gardens Mall area", mix: "corporate parks, mall-adjacent retail and restaurants, golf-club hospitality", climate: "inland-coastal mix — refrigeration loads steady" },
  { slug: "jupiter", corridor: "Indiantown Road and the Harbourside area", mix: "waterfront restaurants, marina-adjacent hospitality and family-format service", climate: "coastal Palm Beach — salt-air load" },
  { slug: "wellington", corridor: "Forest Hill Boulevard and the equestrian-area corridors", mix: "equestrian-area hospitality, retail and suburban restaurants", climate: "inland — refrigeration service profile moderate" },
  { slug: "royal-palm-beach", corridor: "Okeechobee Boulevard and the Crestwood area", mix: "suburban retail and restaurants", climate: "inland Palm Beach — refrigeration loads moderate" },
  { slug: "riviera-beach", corridor: "Singer Island and Blue Heron Boulevard", mix: "marina-adjacent restaurants, hotels and waterfront service", climate: "coastal — salt-air corrosion is a recurring concern" },
  { slug: "greenacres", corridor: "the Forest Hill Boulevard corridor", mix: "neighborhood retail and restaurants", climate: "inland Palm Beach — standard refrigeration cycling" },
  { slug: "lake-worth", corridor: "Lake Avenue, the downtown corridor and the beach", mix: "downtown restaurants, beachfront hospitality and mixed retail", climate: "coastal Palm Beach — salt and humidity load" },
  { slug: "highland-beach", corridor: "the A1A corridor", mix: "waterfront residential-adjacent service", climate: "ocean-side salt air drives outdoor refrigeration wear hard" },
  { slug: "palm-springs", corridor: "the 10th Avenue North area", mix: "neighborhood retail and small commercial", climate: "inland Palm Beach — standard refrigeration service" },
  { slug: "north-palm-beach", corridor: "the US-1 and Lake Park corridor", mix: "upscale waterfront restaurants and country-club service", climate: "coastal-adjacent — salt-air load" },
]

const map = new Map(profiles.map((p) => [p.slug, p]))

export function getCityProfile(slug: string): CityProfile | undefined {
  return map.get(slug)
}

export function cityProfileFallback(name: string, county: County): CityProfile {
  return {
    slug: "",
    corridor: `commercial corridors of ${name}`,
    mix: "a mix of restaurants, retail and small commercial accounts",
    climate:
      county === "miami-dade" || county === "broward"
        ? "South Florida humidity keeps refrigeration loads steady year-round"
        : "Palm Beach County's coastal-inland mix drives steady refrigeration cycling",
  }
}
