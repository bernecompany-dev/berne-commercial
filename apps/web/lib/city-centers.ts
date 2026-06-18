// City slug -> [lng, lat] centroid lookup for the service-map geo embeds.
// Plain module (NOT a client component) so it can be imported from server
// components (app/[city]/page.tsx) and the client embed alike.

export const CITY_CENTERS: Record<string, [number, number]> = {
  miami: [-80.1918, 25.7617],
  "miami-beach": [-80.13, 25.7907],
  "north-miami": [-80.1867, 25.89],
  "north-miami-beach": [-80.1626, 25.9331],
  "sunny-isles-beach": [-80.1226, 25.9529],
  aventura: [-80.1426, 25.9565],
  "coral-gables": [-80.2684, 25.7215],
  doral: [-80.3553, 25.8195],
  hialeah: [-80.2781, 25.8576],
  kendall: [-80.3431, 25.6793],
  pinecrest: [-80.3081, 25.6673],
  "south-miami": [-80.2931, 25.7079],
  "cutler-bay": [-80.3467, 25.5808],
  "miami-lakes": [-80.3086, 25.9087],
  "miami-gardens": [-80.2456, 25.942],
  "key-biscayne": [-80.1626, 25.6936],
  "fort-lauderdale": [-80.1373, 26.1224],
  hollywood: [-80.1495, 26.0112],
  "hallandale-beach": [-80.1484, 25.9812],
  "pembroke-pines": [-80.3431, 26.0078],
  miramar: [-80.3026, 25.9861],
  davie: [-80.2528, 26.0815],
  plantation: [-80.2336, 26.1276],
  weston: [-80.3998, 26.1004],
  sunrise: [-80.2564, 26.1669],
  tamarac: [-80.2497, 26.2129],
  "coral-springs": [-80.2706, 26.2712],
  parkland: [-80.2373, 26.31],
  "coconut-creek": [-80.1789, 26.2517],
  "deerfield-beach": [-80.0998, 26.3184],
  "pompano-beach": [-80.1248, 26.2379],
  "oakland-park": [-80.1495, 26.1723],
  "dania-beach": [-80.1437, 26.0526],
  margate: [-80.2065, 26.2445],
  "cooper-city": [-80.2717, 26.0573],
  "boca-raton": [-80.0831, 26.3683],
  "delray-beach": [-80.0728, 26.4615],
  "boynton-beach": [-80.0905, 26.5318],
  "west-palm-beach": [-80.0534, 26.7153],
  "palm-beach-gardens": [-80.0942, 26.8234],
  jupiter: [-80.0942, 26.9342],
  wellington: [-80.2706, 26.6618],
  "lake-worth": [-80.0578, 26.6168],
  tampa: [-82.4572, 27.9506],
  sarasota: [-82.5307, 27.3364],
}

const SOUTH_FL_DEFAULT: [number, number] = [-80.22, 26.05]

export function cityCenter(slug: string): [number, number] {
  return CITY_CENTERS[slug] ?? SOUTH_FL_DEFAULT
}
