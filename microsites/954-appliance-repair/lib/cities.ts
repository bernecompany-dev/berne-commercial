// Six top Broward-County cities. Each gets genuinely local copy — real
// neighborhoods and a distinct angle — so the pages aren't interchangeable
// templates with the name swapped (that's the doorway pattern Google punishes).

export type City = {
  slug: string
  name: string
  blurb: string // meta + card teaser
  intro: string
  local: string // a paragraph with real local texture
  areas: string[] // neighborhoods / adjacent spots served
  zips: string[]
}

export const CITIES: City[] = [
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    blurb: "Same-day appliance repair in Fort Lauderdale — fridge, washer, dryer, oven.",
    intro:
      "Fort Lauderdale is the heart of our service area, and it's where we run the most calls. From high-rise condos along Las Olas to single-family homes in Victoria Park, our techs know the buildings and the appliances that come with them.",
    local:
      "We cover downtown high-rises, the beach condos off A1A, and the neighborhoods inland — Victoria Park, Rio Vista, Coral Ridge, and Wilton Manors nearby. Salt air off the Intracoastal is hard on condenser coils and dryer vents, so we check both on every relevant call.",
    areas: ["Las Olas", "Victoria Park", "Rio Vista", "Coral Ridge", "Wilton Manors", "Sailboat Bend"],
    zips: ["33301", "33304", "33305", "33306", "33308", "33312"],
  },
  {
    slug: "hollywood",
    name: "Hollywood",
    blurb: "Hollywood FL appliance repair — same-day fridge, washer & dryer service.",
    intro:
      "Hollywood sits at the south end of Broward, and we're out there daily — from the beach condos and the Broadwalk to the older homes in Hollywood Hills and the newer builds toward Pembroke Road.",
    local:
      "We handle the mix Hollywood is known for: aging appliances in mid-century homes near Young Circle, and late-model units in the condo towers along the beach. Stacked washer/dryer combos are common in the rentals here, and we service all of them.",
    areas: ["Hollywood Beach", "Hollywood Hills", "Emerald Hills", "Young Circle", "West Lake"],
    zips: ["33019", "33020", "33021", "33023", "33024"],
  },
  {
    slug: "pembroke-pines",
    name: "Pembroke Pines",
    blurb: "Pembroke Pines appliance repair — fast fridge, washer, dryer & oven fixes.",
    intro:
      "Pembroke Pines is one of the largest cities in Broward, and its family homes mean high-use kitchens and laundry rooms. We keep the parts that wear out on hard-working appliances stocked and ready.",
    local:
      "From Chapel Trail and Silver Lakes out west to the older sections near Pines Boulevard, we cover the whole city. Big households run their washers and dishwashers hard, so drain pumps, door locks, and heating elements are the repairs we see most here.",
    areas: ["Chapel Trail", "Silver Lakes", "Pembroke Falls", "Spring Valley", "Pines Boulevard corridor"],
    zips: ["33024", "33026", "33027", "33028", "33029"],
  },
  {
    slug: "pompano-beach",
    name: "Pompano Beach",
    blurb: "Pompano Beach appliance repair — same-day refrigerator & laundry service.",
    intro:
      "Pompano Beach spans beachfront condos and inland neighborhoods, and we service both. Coastal humidity and salt exposure make refrigerator and dryer maintenance especially worth staying ahead of here.",
    local:
      "We're regularly in the condos along the beach, the Cresthaven and Palm Aire areas, and the homes near the Isle of Capri. As with the rest of the coast, we check condenser coils and vent airflow on fridge and dryer calls — the ocean air takes a toll.",
    areas: ["Palm Aire", "Cresthaven", "Isle of Capri", "Cypress Bend", "Old Pompano"],
    zips: ["33060", "33062", "33063", "33064", "33069"],
  },
  {
    slug: "coral-springs",
    name: "Coral Springs",
    blurb: "Coral Springs appliance repair — fridge, washer, dryer, dishwasher & oven.",
    intro:
      "Coral Springs is a planned community of well-kept family homes, which means a lot of built-in dishwashers, wall ovens, and matched laundry sets. We carry parts for the brands that dominate these kitchens.",
    local:
      "From Eagle Trace and Heron Bay to the neighborhoods around Coral Springs Drive, we cover the city end to end. Built-in Bosch and KitchenAid dishwashers and GE and Whirlpool wall ovens are common here — all squarely in our wheelhouse.",
    areas: ["Heron Bay", "Eagle Trace", "Maplewood", "Ramblewood", "Coral Springs Drive"],
    zips: ["33065", "33067", "33071", "33076"],
  },
  {
    slug: "davie",
    name: "Davie",
    blurb: "Davie FL appliance repair — same-day fridge, washer, dryer & range service.",
    intro:
      "Davie ranges from ranch-style properties to newer developments, and appliances here see everything from large family kitchens to guest and in-law suites. We service the full spread across town.",
    local:
      "We cover Pine Island Ridge, Shenandoah, and the areas around Nova Southeastern, plus the more rural western sections. Larger properties often run a second fridge or a separate laundry setup — we service those too, not just the main-kitchen units.",
    areas: ["Pine Island Ridge", "Shenandoah", "Forest Ridge", "Rolling Hills", "Nova area"],
    zips: ["33314", "33324", "33325", "33328", "33330"],
  },
]

export function getCity(slug: string) {
  return CITIES.find((c) => c.slug === slug)
}
