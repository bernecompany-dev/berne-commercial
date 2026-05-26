import type { Article } from "../articles"

export const beerSystemGlycolChiller: Article = {
  slug: "beer-system-glycol-chiller-issues",
  title:
    "Multi-Tap Beer System Glycol Chiller Issues — Restaurant Bar Service",
  description:
    "Your 12-tap glycol chiller is letting beer pour foamy, warm, or with the wrong head. A field tech's diagnostic on the Perlick, Micro Matic, and Glastender chiller power packs, glycol mix, and trunk-line insulation.",
  publishedAt: "2026-06-22T09:00:00Z",
  readingMinutes: 9,
  category: "Beverage Equipment",
  tags: [
    "beer system",
    "glycol chiller",
    "Perlick",
    "Micro Matic",
    "Glastender",
    "draft beer",
  ],
  lede: "A bar manager at a South Beach gastropub calls about the 16-tap glycol system pouring foamy on the IPAs and warm-pours on the lagers. The Perlick power pack in the basement reads 28°F on the glycol, the trunk-line bundle runs 110 feet to the front bar, and the chef is complaining that the bar's eating beer profit. A glycol draft system that won't hold pour temperature is rarely the power pack itself. It's almost always glycol mix, trunk-line insulation, or pump flow at the far end.",
  sections: [
    {
      heading: "1. The four numbers that define a healthy draft system",
      body: [
        "A properly tuned multi-tap glycol system holds four numbers: trunk-line beer temperature at the faucet (38 to 40°F), glycol bath temperature at the power pack (26 to 30°F), CO2 head pressure (typically 12 to 14 psi for ales and lagers, higher for nitro), and pour rate (10 to 12 seconds for a 16-ounce pint). If any one of those drifts, the pour drifts.",
        "On a Perlick 4410 power pack or a Micro Matic Pro-Line PL-50, the glycol set point is field-adjustable and gets set at 28°F most of the time. The bath circulates through a stainless coil bundle that wraps each beer line in the trunk and returns to the power pack reservoir. The pump has to be moving enough glycol to keep the entire 110-foot trunk run at temperature. That's where most systems fail.",
      ],
    },
    {
      heading: "2. Glycol mix ratio and freezing point",
      body: [
        "Propylene glycol food-grade mix should be 30 to 35 percent in water for a draft beer application. That ratio holds a freeze point near 0°F, which gives the power pack room to chill the bath to 28°F without ice forming on the coils. A bar that loses glycol through evaporation or a small leak gets refilled with plain water by a bar-back trying to be helpful, the mix drops to 15 percent, and the freeze point creeps up to 20°F. Now the bath freezes on the coil, the pump cavitates, and the trunk warms up.",
        "Test with a refractometer or a hydrometer. Pull a sample from the reservoir, read the Brix or the specific gravity. Anything under 30 percent gets dosed with food-grade propylene glycol concentrate (Dowfrost or Camco) until the reading comes back in spec. Never use automotive antifreeze. The system runs near food and a single leak ruins a $3,000 keg inventory.",
      ],
    },
    {
      heading: "3. Trunk-line insulation and where heat creeps in",
      body: [
        "A trunk line is a foam-jacketed bundle of beer lines surrounded by two glycol supply-and-return lines, all wrapped in a vapor barrier. The insulation R-value matters most over the last 20 feet before the tower. A bundle that's been crushed against a wall, run through a hot mechanical room, or had a section of insulation cut for a repair will lose 2 to 4 degrees over that run. Pour temperature climbs from 38 to 42°F and the foam goes wild.",
        "Walk the run from the basement power pack to the front bar. Feel the jacket for warm spots. A thermal camera reads the trunk surface temperature in seconds. Any spot warmer than 45°F gets re-insulated with closed-cell pipe wrap. The fix is cheap. The lost profit on foamy pours is not.",
      ],
    },
    {
      heading: "4. Pump flow and the return-line temperature differential",
      body: [
        "A healthy trunk system shows a 1 to 2 degree differential between glycol supply and return at the power pack. If you read 28°F supply and 36°F return, the system is losing 8 degrees through the trunk and either the pump is weak, the trunk is undersized for the run length, or insulation is compromised.",
        "Pump diagnosis: pull the strainer at the inlet, check for any debris (sometimes a piece of pipe-dope cures and breaks off into the system). A weak pump can also be a clogged volute. A Perlick power pack uses a Procon-style rotary vane pump that runs about $180 in parts, 30 minutes to swap. After replacement, the return-line delta should drop back to under 2°F within an hour of the run.",
      ],
    },
    {
      heading: "5. CO2 pressure, foam-on-beer, and the regulator drift",
      body: [
        "Pour quality at the faucet is half temperature and half pressure. A typical ale at 38°F holds head pressure correctly at 12.5 psi CO2. Drop the temperature to 42°F and that same pressure releases CO2 in the line as foam. Run the pressure too low to compensate and the keg goes flat in 48 hours. The regulator on the bulk CO2 manifold needs to be checked every 60 days; a slow leak in a regulator diaphragm shifts pressure 1 to 2 psi without anyone noticing.",
        "When the call comes in about foamy pours, our techs check temperature first, regulator pressure second, and glycol mix third. That order solves 90 percent of these calls without touching the keg coupler or the faucet itself. The coupler and the faucet are last — yeast buildup at the pour spout is real but it usually presents as off-flavor, not as bad foam.",
      ],
    },
    {
      heading: "6. NSF and the line-cleaning interval",
      body: [
        "Florida DBPR doesn't directly cite draft line cleanliness, but the brewers' BSGCS (Brewers Beverage System Cleaning Standard) recommends a 14-day cleaning cycle. Beer-stone buildup at the faucet and biofilm in the line both produce off-flavor and reduce CO2 retention. A scheduled line clean by a certified beer-line cleaning service is the right answer.",
        "Berne Commercial doesn't run line cleanings. We service the chiller hardware, the glycol bath, the pump, the trunk insulation, and the regulator side. We work alongside the bar's line-cleaning vendor and the two services together keep the system running clean. For a high-volume bar that wants both under one contract, we can recommend partners who hit your service calendar.",
      ],
    },
    {
      heading: "7. Keg-room temperature and the often-ignored variable",
      body: [
        "Most multi-tap glycol systems are designed assuming a 38 to 42°F walk-in keg room. The keg sits in the cooler, the beer line exits the cooler at near-keg temperature, and the trunk-line glycol jacket only has to maintain that temperature over the run to the tower. When the keg room drifts to 48°F because the walk-in cooler is struggling, the beer enters the trunk warmer than design and the chiller can't compensate.",
        "I had a keg-room call at a Coral Gables restaurant where the bar manager was certain the glycol chiller was failing. Pulled gauges on the walk-in instead and found the cooler was running at 46°F because the condenser hadn't been cleaned in a year. Cleaned the cooler, the keg room dropped to 39°F, and the pours came back clean without touching the chiller at all. Sometimes the diagnostic is to verify the upstream system before suspecting the downstream one.",
      ],
    },
    {
      heading: "8. Calling for service and what to know first",
      body: [
        "When you call Berne Commercial at (754) 345-4515 about a draft beer system, our dispatcher will ask about the power pack model, the number of taps, the trunk-line length, and whether the issue is on all taps or just some. That last question matters most. If only IPAs pour foamy, you've got a single-line insulation issue. If everything pours warm, you've got a power-pack or glycol-mix problem.",
        "The $89 commercial service call covers the diagnostic. Most draft system fixes happen in one visit; pump or trunk repairs may need a second visit with parts. For coffee-shop equipment that overlaps a bar setup (espresso, batch brew, gelato display), we cover those too. For residential kegerators (Edgestar, NewAir, Kegco) our sister site bernerepair.com handles them under the residential side.",
      ],
    },
  ],
  internalLinks: [
    { label: "Commercial refrigeration repair", href: "/services/commercial-refrigeration-repair" },
    { label: "Soda machine repair", href: "/services/soda-machine-repair" },
    { label: "Margarita machine repair", href: "/services/margarita-machine-repair" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "espresso-machine-no-pressure-cafe",
    "commercial-walk-in-cooler-temperature-issues",
  ],
}
