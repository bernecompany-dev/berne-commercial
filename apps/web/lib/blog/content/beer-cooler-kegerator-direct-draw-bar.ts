import type { Article } from "../articles"

export const beerCoolerKegeratorDirectDraw: Article = {
  slug: "beer-cooler-kegerator-direct-draw-bar",
  title: "Beer Cooler & Kegerator Direct-Draw Repair for Bars",
  description:
    "Foamy pours, warm beer, a keg box that won't hold 36°F. A field tech walks the direct-draw diagnostic on True, Beverage-Air, Perlick and Micro Matic — keg-box temperature, cold plates, CO2 pressure, faucets, couplers and the compressor side.",
  publishedAt: "2026-06-26T09:00:00Z",
  readingMinutes: 10,
  category: "Beverage Equipment",
  tags: [
    "beer cooler",
    "kegerator",
    "direct draw",
    "True",
    "Beverage-Air",
    "Perlick",
    "Micro Matic",
    "draft beer",
  ],
  lede: "It's a Friday at a Fort Lauderdale sports bar and every tap is pouring half foam. The bartender's been cracking the faucet wider and the manager's blaming the kegs, but the real story is sitting in the back: a True direct-draw keg box reading 41°F on the cabinet thermometer, a condenser packed with lint and salt-air grime, and a CO2 regulator someone bumped to 18 psi last month to 'fix' the foam. Direct-draw foam is almost never the faucet. It's temperature, pressure, and hardware — in that order.",
  sections: [
    {
      heading: "1. The numbers a direct-draw system has to hold",
      body: [
        "A direct-draw cooler keeps the keg and the short run of beer line cold inside one cabinet, so the whole job comes down to two numbers: keg-box temperature at 34 to 38°F and CO2 head pressure around 12 to 14 psi for most ales and lagers (nitro and stout pours run a separate blended gas and higher set pressure). Hold those two and a clean faucet pours a 16-ounce glass in 10 to 12 seconds with a finger of head. Miss either one and you get foam or flat beer.",
        "On a True TDD-series, a Beverage-Air DD, a Perlick or a Krowne back-bar box, the refrigeration is a self-contained forced-air system: compressor, condenser, evaporator and an evap fan moving cold air over the kegs. A kegerator like a Kegco or a commercial Micro Matic unit works the same way at smaller scale. When a manager says 'the chiller's failing,' the first move is to verify the box is actually warm — a cabinet thermometer and an infrared check at the faucet take two minutes and decide the whole call.",
      ],
    },
    {
      heading: "2. Why every tap foams — start with temperature",
      body: [
        "Foam is dissolved CO2 breaking out of solution before the beer hits the glass, and the single biggest cause is warm beer. Beer held at 38°F holds its carbonation in the line; let the keg box drift to 42°F and that same 12.5 psi of head pressure starts releasing gas in the line as foam. When every tap foams at once, suspect the box, not the faucets — one warm cabinet ruins all of them simultaneously.",
        "Walk the refrigeration before touching the bar. In coastal South Florida the number-one cause of a warm keg box is a fouled condenser — lint, grease aerosol and salt-air corrosion choke airflow, head pressure climbs, and the box loses its grip on temperature. Pull and clean the condenser, check the evap fan is actually spinning, and confirm the box recovers to 36°F. On a True or Beverage-Air box that recovery should happen within an hour. If it won't, you're into refrigerant or compressor territory covered later.",
      ],
    },
    {
      heading: "3. Cold plates, forced-air, and cold-wall coolers",
      body: [
        "Not every draft cooler chills the same way. Direct-draw boxes are forced-air — the keg sits in chilled air. Some jockey-box and remote setups run a cold plate, an aluminum block with ice on top and beer coils cast through it, where pour temperature depends entirely on keeping ice on the plate. Older back-bar bottle coolers can be cold-wall designs where the evaporator is the cabinet liner itself and a frosted-over wall kills airflow and temperature.",
        "The diagnostic changes with the design. On a cold plate, no ice means warm beer — that's an operations fix, not a refrigeration repair. On a cold-wall back-bar, heavy frost on the liner means the unit isn't defrosting and the fix is the defrost circuit or a stuck-running compressor, not a recharge. Identifying which system you're standing in front of is half the call; throwing refrigerant at a cold-plate problem is wasted money.",
      ],
    },
    {
      heading: "4. CO2 and nitro pressure, and the regulator that drifts",
      body: [
        "Once the box is cold, pressure is the other half of the pour. Most ales and lagers balance at 12 to 14 psi on straight CO2 for a short direct-draw run. Push the pressure too high — usually because someone cranked it trying to chase foam that was really a temperature problem — and you over-carbonate and foam worse. Run it too low and the keg goes flat in a day or two. Nitro and stout faucets use a beer-gas blend (typically around 70/30 nitrogen/CO2) at a higher set pressure through a restrictor faucet, and they will foam badly on straight CO2.",
        "Regulators drift. A diaphragm with a slow leak shifts set pressure 1 to 2 psi over a busy month and nobody notices until the pours go wrong. Check the regulator against a known-good gauge, inspect the gas line and check valves for leaks with soapy water, and confirm the right gas is feeding the right faucets. A Micro Matic primary or secondary regulator is an inexpensive part and a fast swap once it's confirmed bad — but confirm it, don't assume it.",
      ],
    },
    {
      heading: "5. Faucets, shanks and couplers — the one-tap foamer",
      body: [
        "When one faucet foams and the rest pour clean, the box and the gas are fine — the problem is local to that line. A warm spot at a single shank, a faucet with a worn or dry seal, beer-stone built up at the spout, or a coupler (Sankey D, S, or the European types) with a tired seal or a stuck check ball will all foam or stutter one tap while its neighbors pour clean. Pull the faucet, inspect the seals and the spout, and check the coupler probe and washer.",
        "Couplers take real abuse — they get slammed onto kegs all night and the rubber washer and check balls wear. A leaking coupler pulls air or drips beer at the keg, and a worn faucet seal lets the line warm and dry between pours. These are cheap parts; the value is knowing it's a single-line hardware issue and not chasing the refrigeration. Yeast and beer-stone buildup at the pour spout usually shows up as off-flavor first, so when the complaint is pure foam, the seals and temperature come before a deep faucet teardown.",
      ],
    },
    {
      heading: "6. The compressor and condenser side — coastal duty",
      body: [
        "When the box genuinely won't hold temperature after a condenser clean, you're into the sealed system. A compressor that runs nonstop and never satisfies points to low refrigerant from a slow leak, a restricted metering device, or a compressor losing pumping capacity. Salt air is brutal on South Florida condenser coils and fan motors — aluminum fins corrode, fan motors seize, and an under-cooled condenser drives head pressure up until the box can't keep up even though everything 'runs.'",
        "Diagnosis is gauges and amp draw, not guesswork. Confirm the leak before recharging — a top-off on a leaking system is a callback waiting to happen, and the EPA cares about venting refrigerant. An evaporator fan motor that's stalled or weak starves the box of cold airflow and mimics a refrigeration failure for a fraction of the part cost, so it gets checked before anyone reaches for a recovery machine. On a 10-plus-year direct-draw box, a dead compressor turns the call into honest repair-vs-replace math.",
      ],
    },
    {
      heading: "7. Doors, gaskets, drains and the long-draw cousin",
      body: [
        "The cabinet hardware matters more than people think. Glass-door back-bar coolers depend on anti-sweat door heaters and a good gasket seal — a failed heater fogs and drips the glass, and a compression-set gasket lets warm humid Florida air leak in and load the box. Condensate has to drain: a clogged drain line, a cracked pan or a failed drain heater puts water on the floor and is a slip-and-health-code problem behind the bar. These are routine, inexpensive fixes that quietly protect temperature.",
        "All of the above is direct-draw — keg and beer line in one cold box over a short run. A long-draw glycol system is a different beast: a glycol power pack chills a bath that's pumped through a 50-to-150-foot trunk line to a tower across the building. Foam and warm-pour diagnosis there hinges on glycol mix ratio, trunk insulation and pump flow, and we cover it in depth in our companion glycol-chiller field guide rather than repeating it here. If your run is long and there's a glycol power pack in the basement, that guide is the one you want.",
      ],
    },
    {
      heading: "8. Calling for service and what to know first",
      body: [
        "When you call Berne Commercial at (754) 345-4515 about a beer cooler or kegerator, the dispatcher will ask the cooler brand and type (direct-draw, back-bar, kegerator or keg walk-in), the number of taps, and whether the problem is on every tap or just one. That last question routes the whole visit: all taps foaming or warm points at the box, the refrigeration or the gas; a single bad tap points at that faucet, shank or coupler. Knowing your keg-box thermometer reading and CO2 set pressure before we arrive speeds the diagnosis.",
        "The $89 commercial service call covers the diagnostic and is free when you approve the repair — most direct-draw fixes close in one visit, while compressor or refrigerant work may need a second trip with parts. We are an independent commercial service company, not a manufacturer-authorized agent, so in-warranty units should use the factory network first. For residential kegerators and home draft units (Edgestar, NewAir, Kegco), our sister site bernerepair.com handles those on the residential side.",
      ],
    },
  ],
  internalLinks: [
    { label: "Beer Cooler & Kegerator Repair", href: "/services/beer-cooler-repair" },
    { label: "Commercial refrigeration repair", href: "/services/commercial-refrigeration-repair" },
    { label: "Soda machine repair", href: "/services/soda-machine-repair" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "beer-system-glycol-chiller-issues",
    "commercial-walk-in-cooler-temperature-issues",
  ],
}
