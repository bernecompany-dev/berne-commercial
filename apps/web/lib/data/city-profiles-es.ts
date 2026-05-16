import type { CityProfile } from "./city-profiles"
import { getCityProfile } from "./city-profiles"
import type { County } from "./cities"

type ProfileI18n = Pick<CityProfile, "corridor" | "mix" | "climate">

const profilesEs: Record<string, ProfileI18n> = {
  // Miami-Dade
  miami: {
    corridor: "los corredores de Brickell, Wynwood, Downtown y Edgewater",
    mix: "cocinas de amenities en torres residenciales, cafés corporativos en Brickell y restaurantes independientes en Wynwood y el Design District",
    climate: "la humedad costera y el aire salino presionan condensadores y serpentines de refrigeración constantemente",
  },
  "miami-beach": {
    corridor: "Ocean Drive, Lincoln Road, Mid-Beach y South Beach",
    mix: "una base comercial dominada por hospitalidad — hoteles, beach clubs, restaurantes y bares",
    climate: "el aire salino y la humedad del océano aceleran el desgaste de compresores y fans de condensador más rápido que en el interior",
  },
  "north-miami": {
    corridor: "el corredor de Biscayne Boulevard y NE 125th Street",
    mix: "retail mixto, restaurantes de barrio y operaciones de grocery",
    climate: "el clima subtropical mantiene los sistemas de refrigeración cerca del pico de carga todo el año",
  },
  "north-miami-beach": {
    corridor: "el corredor de 163rd Street",
    mix: "retail, restaurantes y operaciones de conveniencia a lo largo de 163rd Street",
    climate: "Miami-Dade costero con alta humedad — la refrigeración cicla continuamente y las fallas prematuras de compresor son comunes",
  },
  "sunny-isles-beach": {
    corridor: "la franja de torres de Collins Avenue",
    mix: "cocinas comerciales de torres residenciales y hoteles más servicio de amenities de condominios",
    climate: "la corrosión por sal del océano es el modo de falla dominante para la refrigeración exterior",
  },
  aventura: {
    corridor: "Aventura Mall y el corredor de Biscayne Boulevard",
    mix: "retail, restaurantes y servicio de hoteles ligados al mall y la hospitalidad circundante",
    climate: "la humedad costera impulsa un ciclo pesado de refrigeración todo el año",
  },
  "bal-harbour": {
    corridor: "Bal Harbour Shops y la franja de hoteles de Collins Avenue",
    mix: "retail de alta gama y cocinas de hotel",
    climate: "el aire salino acorta los intervalos de servicio de condensadores exteriores",
  },
  surfside: {
    corridor: "el corredor de Harding Avenue",
    mix: "restaurantes de barrio, hoteles pequeños y servicio frente al mar",
    climate: "la corrosión salina de componentes de refrigeración es la preocupación dominante de mantenimiento",
  },
  "bay-harbor-islands": {
    corridor: "la franja comercial de Kane Concourse",
    mix: "un pequeño corredor comercial de restaurantes y servicios profesionales",
    climate: "la humedad y proximidad costera aceleran el desgaste del compresor",
  },
  "coral-gables": {
    corridor: "Miracle Mile y Coral Way",
    mix: "restaurantes de alta gama, hoteles boutique y oficinas profesionales con cafés corporativos",
    climate: "las calles arboladas mantienen la temperatura ambiente ligeramente menor que la costa de Miami, pero la carga de refrigeración sigue siendo continua",
  },
  "coconut-grove": {
    corridor: "CocoWalk y el corredor de Main Highway frente a la bahía",
    mix: "restaurantes frente a la bahía, bares, hoteles boutique y food service adyacente a la marina",
    climate: "la humedad de Biscayne Bay añade carga extra sobre la refrigeración exterior",
  },
  brickell: {
    corridor: "las torres de Brickell Avenue y Mary Brickell Village",
    mix: "cafés corporativos, cocinas de amenities de condominios, bares y restaurantes en configuraciones verticales densas",
    climate: "los cuartos mecánicos en azoteas e interiores de torres requieren acceso coordinado para servicio",
  },
  "downtown-miami": {
    corridor: "el corredor de Flagler Street y Bayfront Park",
    mix: "cafés corporativos, servicio de hotel, food halls y venues de eventos",
    climate: "el servicio comercial en torres normalmente implica acceso limitado al equipo y ventanas de servicio ajustadas",
  },
  edgewater: {
    corridor: "el área de Biscayne Boulevard y Margaret Pace Park",
    mix: "una escena creciente de restaurantes y bares alrededor de nuevas torres residenciales",
    climate: "la humedad costera domina la carga de servicio de refrigeración",
  },
  wynwood: {
    corridor: "el corredor de NW 2nd Avenue y el distrito de Wynwood Walls",
    mix: "bares, cervecerías, restaurantes independientes y cafés de galería",
    climate: "las operaciones de alto tráfico hacen ciclar la refrigeración agresivamente — las fallas tempranas de máquinas de hielo y reach-ins son comunes",
  },
  "design-district": {
    corridor: "las cuadras de NE 39th–42nd Streets",
    mix: "retail de alta gama, restaurantes y cafés de galería",
    climate: "las ventanas de servicio son ajustadas — el retail de lujo no tolera actividad de servicio visible durante horario de atención",
  },
  doral: {
    corridor: "los corredores de NW 25th Street, NW 36th Street y Doral Plaza",
    mix: "almacenes, centros de distribución, parques corporativos y restaurantes adyacentes",
    climate: "Miami-Dade interior — temperaturas ambiente altas y carga de polvo aumentan la frecuencia de limpieza de condensadores",
  },
  hialeah: {
    corridor: "Palm Avenue y West 49th Street",
    mix: "supermercados, producción de alimentos, base de restaurantes hispanohablantes y servicio del corredor automotriz",
    climate: "la refrigeración de alto volumen en supermercados y producción de alimentos exige mantenimiento preventivo consistente",
  },
  "hialeah-gardens": {
    corridor: "el área de NW 122nd Street",
    mix: "parques industriales, retail y cocinas comerciales pequeñas",
    climate: "Miami-Dade interior, con ciclo de refrigeración constante todo el año",
  },
  kendall: {
    corridor: "Kendall Drive y el área de The Falls",
    mix: "un mix comercial-suburbano de restaurantes, retail y hospitalidad de formato familiar",
    climate: "clima subtropical húmedo, pero más fresco que la costa — el perfil de servicio de refrigeración es típico de Miami-Dade interior",
  },
  pinecrest: {
    corridor: "el corredor comercial de US-1",
    mix: "restaurantes de alta gama, retail boutique y servicio de country club",
    climate: "comercial de baja densidad — la carga de refrigeración es constante pero moderada",
  },
  "palmetto-bay": {
    corridor: "el corredor de Old Cutler Road",
    mix: "restaurantes de barrio, retail pequeño y negocios de servicio",
    climate: "la humedad del sur de Miami-Dade mantiene la refrigeración en operación continua",
  },
  "south-miami": {
    corridor: "Sunset Drive y el corredor de US-1",
    mix: "restaurantes y retail del downtown de South Miami, más cocinas de servicios profesionales",
    climate: "el dosel arbóreo reduce ligeramente la temperatura ambiente; el ciclo de servicio de refrigeración se mantiene estándar",
  },
  "cutler-bay": {
    corridor: "el área de Cutler Bay Town Center",
    mix: "retail, restaurantes y supermercados que sirven al sur de Miami-Dade",
    climate: "cálido todo el año, con alto ciclo de refrigeración",
  },
  sweetwater: {
    corridor: "el área de Tamiami Trail cerca de FIU",
    mix: "cocinas comerciales pequeñas, retail de barrio y food service adyacente a FIU",
    climate: "interior y polvoriento — la limpieza de condensador es una necesidad de servicio recurrente",
  },
  "west-miami": {
    corridor: "el área de SW 8th Street",
    mix: "restaurantes de barrio y servicio comercial pequeño",
    climate: "clima cálido interior, perfil estándar de servicio de refrigeración",
  },
  "miami-lakes": {
    corridor: "Main Street Miami Lakes y los parques corporativos adyacentes",
    mix: "un mix comercial-suburbano de restaurantes, servicios profesionales y parques corporativos",
    climate: "interior — la temperatura ambiente impulsa la carga del condensador en días largos de verano",
  },
  "miami-gardens": {
    corridor: "el corredor del Hard Rock Stadium y 27th Avenue",
    mix: "hospitalidad adyacente al estadio, retail y restaurantes de formato familiar",
    climate: "las operaciones de día de evento de alto volumen significan que la refrigeración debe aguantar bajo carga pico",
  },
  "opa-locka": {
    corridor: "la franja comercial de NW 27th Avenue",
    mix: "mix industrial y comercial pequeño",
    climate: "clima cálido interior, la refrigeración cicla continuamente",
  },
  fontainebleau: {
    corridor: "el corredor de Westchester-Fontainebleau",
    mix: "restaurantes de barrio, retail y comercio pequeño",
    climate: "interior cálido — perfil estándar de servicio de refrigeración",
  },
  westchester: {
    corridor: "la franja comercial de SW 87th Avenue",
    mix: "retail de barrio, supermercados y restaurantes familiares",
    climate: "interior — la refrigeración opera duro durante el verano",
  },
  tamiami: {
    corridor: "el corredor comercial de Tamiami Trail",
    mix: "retail de barrio, restaurantes pequeños y food service adyacente a la universidad",
    climate: "Miami-Dade interior — la limpieza de condensador es una necesidad recurrente",
  },
  "key-biscayne": {
    corridor: "Crandon Boulevard y Harbor Drive",
    mix: "servicio de hotel y resort, restaurantes frente al mar y cocinas de country club",
    climate: "el aire salino del océano es el factor dominante — la refrigeración exterior envejece más rápido aquí que casi en ningún otro lugar de Miami-Dade",
  },
  // Broward
  "fort-lauderdale": {
    corridor: "Las Olas, downtown, el beachfront y el Marina District",
    mix: "restaurantes del downtown, hoteles, food service adyacente a marinas y cafés corporativos",
    climate: "la humedad costera y el aire salino son factores constantes para la refrigeración exterior",
  },
  hollywood: {
    corridor: "Hollywood Boulevard, Young Circle y Hollywood Beach",
    mix: "restaurantes del ArtsPark, hospitalidad frente al mar y servicio de formato familiar",
    climate: "la corrosión por sal y la humedad impulsan el desgaste de componentes de refrigeración",
  },
  "hallandale-beach": {
    corridor: "el corredor de Gulfstream Park y A1A",
    mix: "hospitalidad de casino, carreras y waterfront, más cocinas de amenities de condominios",
    climate: "costero — el desgaste por aire salino es el patrón de mantenimiento dominante",
  },
  "pembroke-pines": {
    corridor: "Pines Boulevard y el área de Memorial Hospital",
    mix: "comercial-suburbano — retail, restaurantes y food service adyacente al sector médico",
    climate: "Broward interior — carga de refrigeración constante, con polvo sobre los condensadores",
  },
  miramar: {
    corridor: "Miramar Parkway y el área de Miramar Regional Park",
    mix: "retail suburbano, restaurantes y parques corporativos",
    climate: "Broward interior, con ciclo de refrigeración constante",
  },
  davie: {
    corridor: "University Drive y el corredor de Nova Southeastern University",
    mix: "food service adyacente a la universidad, retail suburbano y restaurantes del área ecuestre",
    climate: "interior — la carga de verano impulsa la frecuencia de limpieza de condensadores",
  },
  plantation: {
    corridor: "Broward Boulevard y el área de Plantation General",
    mix: "parques corporativos, retail y restaurantes de formato familiar",
    climate: "Broward interior, perfil típico de servicio de refrigeración",
  },
  weston: {
    corridor: "el área de Bonaventure y Indian Trace",
    mix: "retail de comunidad planificada, restaurantes y parques corporativos",
    climate: "interior — la carga de refrigeración es constante todo el año",
  },
  sunrise: {
    corridor: "el área de Sawgrass Mills y Commercial Boulevard",
    mix: "retail y restaurantes adyacentes al mall más food service de parques corporativos",
    climate: "las operaciones de alto tráfico en Sawgrass hacen ciclar la refrigeración agresivamente",
  },
  tamarac: {
    corridor: "Commercial Boulevard y McNab Road",
    mix: "retail, restaurantes de barrio y servicio de comunidades 55+",
    climate: "Broward interior, con ciclo de refrigeración estándar",
  },
  "coral-springs": {
    corridor: "Sample Road y University Drive",
    mix: "un mix comercial-suburbano de retail y restaurantes",
    climate: "Broward interior — el perfil de servicio de refrigeración es típico",
  },
  parkland: {
    corridor: "State Road 7 y el área de Heron Bay",
    mix: "retail y restaurantes adyacentes a residencias de alta gama",
    climate: "comercial de baja densidad — la carga de refrigeración es moderada",
  },
  "coconut-creek": {
    corridor: "Promenade at Coconut Creek y el área del Seminole Casino",
    mix: "retail y restaurantes adyacentes a casino y mall",
    climate: "las operaciones de alto tráfico hacen ciclar la refrigeración agresivamente",
  },
  "deerfield-beach": {
    corridor: "Hillsboro Boulevard y el beachfront",
    mix: "hospitalidad frente al mar, parques corporativos y restaurantes de formato familiar",
    climate: "costero — carga de aire salino sobre la refrigeración exterior",
  },
  "pompano-beach": {
    corridor: "Atlantic Boulevard y el distrito de marina",
    mix: "restaurantes adyacentes a marina, servicio del downtown y hospitalidad frente al mar",
    climate: "carga de aire salino costero — las unidades exteriores al lado de la marina envejecen rápido",
  },
  "lighthouse-point": {
    corridor: "el corredor de Federal Highway",
    mix: "restaurantes de alta gama frente al agua y servicio boutique",
    climate: "costero — desgaste de equipo por aire salino",
  },
  "oakland-park": {
    corridor: "los corredores de Dixie Highway y Federal Highway",
    mix: "restaurantes de barrio y retail mixto",
    climate: "Broward adyacente a la costa, con carga estándar de humedad sobre la refrigeración",
  },
  "wilton-manors": {
    corridor: "el corredor de Wilton Drive",
    mix: "servicio de bares, restaurantes y distrito de entretenimiento",
    climate: "las operaciones de alto volumen en Wilton Drive hacen ciclar las máquinas de hielo y la refrigeración duro",
  },
  "dania-beach": {
    corridor: "Dania Pointe y el corredor de US-1",
    mix: "retail, restaurantes y hoteles adyacentes al aeropuerto",
    climate: "Broward costero — carga de sal y humedad",
  },
  margate: {
    corridor: "Margate Boulevard y State Road 7",
    mix: "retail de barrio, restaurantes y supermercados",
    climate: "Broward interior — ciclo de refrigeración estándar",
  },
  "cooper-city": {
    corridor: "el área de Stirling Road",
    mix: "retail suburbano y restaurantes de formato familiar",
    climate: "interior — carga de refrigeración moderada",
  },
  "north-lauderdale": {
    corridor: "el corredor de Kimberly Boulevard",
    mix: "retail de barrio y comercio pequeño",
    climate: "Broward interior — perfil estándar de servicio",
  },
  "southwest-ranches": {
    corridor: "los corredores de Stirling Road y Griffin Road",
    mix: "comercial de baja densidad — restaurantes y servicio adyacente a áreas ecuestres",
    climate: "Broward rural — servicio de refrigeración típico para la zona climática",
  },
  // Palm Beach
  "boca-raton": {
    corridor: "Mizner Park, Glades Road y el corredor de FAU",
    mix: "parques corporativos, restaurantes de alta gama, hoteles y food service adyacente a la universidad",
    climate: "Palm Beach costero — carga de aire salino sobre la refrigeración exterior",
  },
  "delray-beach": {
    corridor: "Atlantic Avenue y Pineapple Grove",
    mix: "restaurantes del downtown, hoteles y hospitalidad de distrito de entretenimiento",
    climate: "costero — las operaciones de Atlantic Avenue hacen ciclar la refrigeración duro",
  },
  "boynton-beach": {
    corridor: "el área de Federal Highway y Boynton Beach Mall",
    mix: "retail mixto, restaurantes y hospitalidad adyacente al waterfront",
    climate: "adyacente a la costa — carga de refrigeración constante",
  },
  "west-palm-beach": {
    corridor: "Clematis Street, CityPlace y Northwood",
    mix: "restaurantes del downtown, oficinas corporativas, hoteles y hospitalidad de distrito de entretenimiento",
    climate: "Palm Beach costero — humedad y carga de aire salino sobre la refrigeración exterior",
  },
  "palm-beach-gardens": {
    corridor: "PGA Boulevard y el área de Gardens Mall",
    mix: "parques corporativos, retail y restaurantes adyacentes al mall, hospitalidad de country club",
    climate: "mix interior-costero — carga de refrigeración constante",
  },
  jupiter: {
    corridor: "Indiantown Road y el área de Harbourside",
    mix: "restaurantes frente al agua, hospitalidad adyacente a marina y servicio de formato familiar",
    climate: "Palm Beach costero — carga de aire salino",
  },
  wellington: {
    corridor: "Forest Hill Boulevard y los corredores del área ecuestre",
    mix: "hospitalidad del área ecuestre, retail y restaurantes suburbanos",
    climate: "interior — perfil moderado de servicio de refrigeración",
  },
  "royal-palm-beach": {
    corridor: "Okeechobee Boulevard y el área de Crestwood",
    mix: "retail y restaurantes suburbanos",
    climate: "Palm Beach interior — carga de refrigeración moderada",
  },
  "riviera-beach": {
    corridor: "Singer Island y Blue Heron Boulevard",
    mix: "restaurantes adyacentes a marina, hoteles y servicio frente al agua",
    climate: "costero — la corrosión por aire salino es una preocupación recurrente",
  },
  greenacres: {
    corridor: "el corredor de Forest Hill Boulevard",
    mix: "retail de barrio y restaurantes",
    climate: "Palm Beach interior — ciclo estándar de refrigeración",
  },
  "lake-worth": {
    corridor: "Lake Avenue, el corredor del downtown y la playa",
    mix: "restaurantes del downtown, hospitalidad frente al mar y retail mixto",
    climate: "Palm Beach costero — carga de sal y humedad",
  },
  "highland-beach": {
    corridor: "el corredor de A1A",
    mix: "servicio adyacente a residencias frente al agua",
    climate: "el aire salino del océano impulsa duramente el desgaste de la refrigeración exterior",
  },
  "palm-springs": {
    corridor: "el área de 10th Avenue North",
    mix: "retail de barrio y comercio pequeño",
    climate: "Palm Beach interior — servicio estándar de refrigeración",
  },
  "north-palm-beach": {
    corridor: "el corredor de US-1 y Lake Park",
    mix: "restaurantes de alta gama frente al agua y servicio de country club",
    climate: "adyacente a la costa — carga de aire salino",
  },
}

export function getCityProfileEs(slug: string): CityProfile | undefined {
  const en = getCityProfile(slug)
  if (!en) return undefined
  const es = profilesEs[slug]
  if (!es) return en
  return { slug: en.slug, ...es }
}

export function cityProfileFallbackEs(name: string, county: County): CityProfile {
  return {
    slug: "",
    corridor: `los corredores comerciales de ${name}`,
    mix: "una base de restaurantes, retail y cuentas comerciales pequeñas",
    climate:
      county === "miami-dade" || county === "broward"
        ? "la humedad del Sur de Florida mantiene la carga de refrigeración constante todo el año"
        : "el mix costero-interior de Palm Beach impulsa un ciclo constante de refrigeración",
  }
}
