import type { Article } from "../articles"

export const espressoGroupHeadBoilerPressure: Article = {
  slug: "espresso-group-head-boiler-pressure",
  title:
    "Espresso Group Head Boiler Pressure Drop — La Marzocco / Nuova",
  description:
    "Your La Marzocco Linea PB or Nuova Simonelli Aurelia II is dropping group pressure mid-shot. A field tech's read on the group thermosiphon, vacuum breaker, and pressurestat calibration.",
  publishedAt: "2026-08-03T09:00:00Z",
  readingMinutes: 9,
  category: "Cafe Equipment",
  tags: [
    "espresso",
    "La Marzocco",
    "Nuova Simonelli",
    "group head",
    "boiler",
    "cafe",
  ],
  lede: "A head barista at a Coral Gables third-wave cafe pulls the morning calibration shots on the La Marzocco Linea PB. First group reads steady at 9 bars throughout the 28-second extraction. Second group climbs to 9 bars, then drops to 7 by second 18, and the shot blonds out and pulls thin. The pressurestat reads 1.2 bar boiler. The pump's running fine. But that one group head is leaking pressure during the shot. Group-head pressure drop on a multi-group espresso machine is a specific failure pattern and the diagnostic path runs through the thermosiphon, the vacuum breaker, and the gicleur.",
  sections: [
    {
      heading: "1. How a saturated-group machine should behave",
      body: [
        "A La Marzocco Linea PB and a Nuova Simonelli Aurelia II both use saturated groups — the brew water passes through a chamber attached to the steam boiler and gets pre-heated by the boiler water before reaching the group head. Each group has its own pump path (or shares a pump with electronic flow control) and its own pressure profile. A healthy group holds 9 bars steady from second 5 through end of shot.",
        "When one group out of two or three is dropping pressure, the failure is isolated to that group's plumbing — the thermosiphon return, the vacuum breaker, the expansion valve, or the gicleur (the brass jet that meters water from the pump into the group). Pump-side failures affect all groups equally. Boiler-pressure-stat failures affect all groups equally. Single-group failures localize to that group's flow path.",
      ],
    },
    {
      heading: "2. The thermosiphon and the vacuum-breaker check",
      body: [
        "Each saturated group on a Linea PB has a thermosiphon loop — a copper line that lets boiler water circulate through the group body and back to the boiler to maintain group temperature stability. If the loop is partially clogged with scale, the group runs cooler and the pressure profile can drift mid-shot. A vacuum breaker at the top of the boiler vents air during heat-up; a stuck-open vacuum breaker leaks steam and pressure during the shot.",
        "Diagnostic: with the machine cool and unplugged, pull the top panel and inspect the vacuum-breaker valve at the boiler. A working vacuum breaker is sealed under pressure (above 0.5 bar) and open below that. If it's hissing under operating pressure, replace it. A La Marzocco vacuum breaker is around $65 in parts. Same procedure on a Nuova Simonelli Aurelia II — the part number differs but the function and diagnostic are identical.",
      ],
    },
    {
      heading: "3. The gicleur and the flow-meter wheel",
      body: [
        "The gicleur sits between the pump output and the group inlet. It's a brass jet with a precision orifice (typically 0.6 to 0.8 mm) that meters water into the group at the design flow rate. Scale or roast-debris contamination at the gicleur restricts flow, the pump still produces pressure but the group can't fill, and shots run thin and underextracted.",
        "Pull the gicleur for inspection. On a Linea PB it's accessible by removing the group cover and unscrewing the brass fitting at the top of the group. Soak in espresso descaler (Cafiza or Urnex Dezcal at machine concentration) for 20 minutes, then verify orifice clearance with a backlit inspection. Replace if pitted. Same procedure on the Nuova Simonelli Aurelia II. Pre-infusion behavior changes noticeably when a gicleur is restored — most baristas can taste the difference within two shots.",
      ],
    },
    {
      heading: "4. The expansion valve and back-pressure regulation",
      body: [
        "The expansion valve on each group is set to release at roughly 11 to 12 bars to protect the system from pump-output spikes. A failed expansion valve that releases at 7 to 8 bars dumps brew water during the shot and the pressure profile collapses. The valve sits on the brew path and is field-adjustable on most La Marzocco and Nuova machines with a small Allen wrench.",
        "Test: a blind-basket portafilter (no holes) locked into the group with a gauge attached. Pull a 'shot' against the blind. The pressure should climb to 9 bars and hold steady. If the gauge tops at 7 or 8 bars and won't climb further, the expansion valve is venting low. Adjust per the service manual or replace if adjustment doesn't hold. La Marzocco expansion valves run roughly $90 in parts.",
      ],
    },
    {
      heading: "5. Pump pressure and the pressurestat calibration",
      body: [
        "If all three groups are losing pressure, the failure is upstream at the pump or the boiler. A rotary vane pump (Procon, Fluid-o-Tech) on a Linea PB should deliver 9 bars at the gauge with no flow. Below 8 bars unloaded, the pump is worn and needs replacement. Boiler pressure on the same machine is held at 1.1 to 1.3 bar by the pressurestat — a Sirai, MaterMatic, or CEME unit depending on machine year.",
        "A pressurestat that's stuck on a cycle leaves boiler pressure either too high (water in the group runs hot and the shots pull bitter) or too low (the group can't recover between shots). Calibration is a small flat-blade screwdriver on the pressurestat adjustment screw, with the boiler gauge as the reference. If the pressurestat won't hold a calibration setting, replace it. A Sirai 31900 runs around $75 in parts.",
      ],
    },
    {
      heading: "6. Water quality and the scale connection",
      body: [
        "South Florida municipal water at 240 to 280 ppm hardness destroys espresso machines on a predictable timeline. Without proper filtration (BWT Bestmax or Pentair Everpure cartridge at the inlet), scale builds in the boiler, on the heating elements, and inside the group thermosiphons within 6 months of install. Once scale starts forming, the failure cascade described above accelerates.",
        "Recommended filtration for a busy 3-group machine: an Everpure Claris-L cartridge with a TDS blend valve set to 60 to 80 ppm at the machine inlet. Cartridge change at 6-month intervals or sooner if local water hardness pushes the rated capacity. We carry these cartridges on the service truck and replace them as scheduled service. A $185 cartridge change every 6 months prevents the $2,400 boiler-descale or coil-replacement bill at year 4.",
      ],
    },
    {
      heading: "7. Calibration after service and the barista's role",
      body: [
        "After any group-head service on a La Marzocco Linea PB, the head barista has to recalibrate. Grind setting, dose, tamp pressure, and shot time will all shift slightly after a gicleur replacement or an expansion-valve adjustment. The first 4 to 6 shots post-service are calibration shots, not customer shots. A cafe that doesn't have a 20-minute calibration window built into the post-service handoff will serve bad shots until the barista figures it out.",
        "We document the gauge readings, the expansion-valve setting, and the boiler pressure at the end of every service visit. The barista gets that documentation and matches their grind and dose accordingly. For cafes running a quarterly preventive program, the calibration drift between visits is usually minor. For cafes that wait until a failure forces service, the drift can be substantial and the recalibration takes longer. Plan for it either way.",
      ],
    },
    {
      heading: "8. Calling for service and what to know first",
      body: [
        "When you call Berne Commercial at (754) 345-4515 about espresso pressure issues, our dispatcher will ask which group, what the pressure gauge reads at idle, and whether all shots are affected or just specific drink builds. That information loads the truck — gicleurs, vacuum breakers, expansion valves, pressurestats, and a blind portafilter with gauge for verification.",
        "Our $89 commercial service call covers the diagnostic. Most single-group pressure issues are resolved in one visit. For high-end home espresso (La Marzocco Linea Mini, Rocket R58, Profitec Pro 700) our sister site bernerepair.com handles residential cafe equipment. Different parts library and different work cadence, but the same diagnostic approach to a saturated-group pressure problem.",
      ],
    },
  ],
  internalLinks: [
    { label: "Espresso machine repair", href: "/services/espresso-machine-repair" },
    { label: "Coffee machine repair", href: "/services/coffee-machine-repair" },
    { label: "Commercial appliance repair", href: "/services/commercial-appliance-repair" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "espresso-machine-no-pressure-cafe",
    "beer-system-glycol-chiller-issues",
  ],
}
