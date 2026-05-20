import type { Article } from "../articles"

export const commercialFryerThermostat: Article = {
  slug: "commercial-fryer-thermostat-issues",
  title: "Commercial Fryer Thermostat or Pilot Issues — Fast Diagnosis",
  description:
    "When a Pitco SG14, Frymaster H50, or Vulcan 1ER50 stops holding 350°F or won't light — high-limit, thermopile, gas valve, and the gauge-and-meter sequence a fryer tech runs in 20 minutes.",
  publishedAt: "2026-06-19",
  readingMinutes: 9,
  category: "Restaurant Equipment",
  tags: ["fryers", "Pitco", "Frymaster", "Vulcan", "gas equipment"],
  lede: "A line cook at a Hialeah quick-serve drops a basket of wings into the Pitco SG14, sets the timer, and the digital reads 287°F instead of climbing back to 350. Ten minutes later the oil's still at 290 and the kitchen's sliding behind. When a commercial fryer can't hold temperature, the cause is usually one of three things: electrical, gas-flow, or thermostat. I've watched techs jump straight to the thermopile, fry an $180 part, and the wings still don't come up. Order matters here.",
  sections: [
    {
      heading: "1. Verify the actual oil temperature with an external probe",
      body: [
        "Start with a calibrated digital probe (a Cooper-Atkins or Thermoworks Thermapen works fine) and submerge it next to the fryer's own probe. If the external reads 325°F and the fryer display reads 287°F, the temperature probe or controller is the fault, not the heat source. If both read 287°F, the heat source is the fault — burner, pilot, or gas valve.",
        "On a Frymaster H50 with the FootPrint Pro controller, the probe is a Type-J thermocouple. On a Pitco SG14 with millivolt controls, the temperature gets read by an analog bulb thermostat. Knowing which sensor you've got tells our techs which test to run first. We've seen a lot of $180 thermopiles wasted because somebody skipped this 90-second check.",
      ],
    },
    {
      heading: "2. Standing pilot, thermopile, and the millivolt circuit",
      body: [
        "Standing-pilot fryers (Pitco SG14, Vulcan 1ER50, older Frymaster MJH and GF models) use a thermopile, sometimes called a pilot generator, to produce 750 millivolts that powers the gas valve and high-limit circuit. The thermopile sits in the pilot flame. A weak thermopile reads under 400 mV under load, and the gas valve won't open the main burner.",
        "The test: an analog or true RMS multimeter set to DC millivolts. Disconnect the thermopile leads at the gas valve, read open-circuit (should be 650–800 mV with a healthy pilot). Then reconnect, read across the TH-TP terminals under load with the main burner calling (should hold at 400–500 mV). Below that, replace the thermopile. About $35 in parts and a 15-minute job. A weak thermopile is the single most common cause of a Pitco SG14 that lights and then drops out mid-cook.",
      ],
    },
    {
      heading: "3. Pilot light, pilot orifice, and pilot tube",
      body: [
        "If the pilot will not stay lit, the thermopile is reading correctly but the flame is starving. Check the pilot orifice for spider webs and lint — South Florida fryers see a lot of insect intrusion when units sit cold over a slow season. The pilot tube on a Pitco runs from the gas valve through a copper line to the pilot hood. Pinches, kinks, or a clogged inline filter starve the pilot.",
        "Brush the pilot hood, blow out the orifice with shop air, and confirm the pilot flame wraps around the top quarter-inch of the thermopile. A blue, sharp pilot flame around the thermopile gives a strong millivolt reading. A yellow, lazy flame means a partial orifice clog and means the main burner will struggle too.",
      ],
    },
    {
      heading: "4. The high-limit safety switch",
      body: [
        "Every commercial fryer has a manual-reset high-limit thermostat — Robertshaw or similar — set to trip at 425–450°F. The high-limit cuts the gas valve when oil overheats. A tripped or stuck high-limit looks like a fryer that will not light at all, or one that lights and immediately drops the main burner.",
        "The test: with the unit cold, press the high-limit reset button (usually behind the front panel on a Pitco SG14, near the gas valve on a Frymaster H50). If it clicks, it was tripped. If it does not click, ohm across the high-limit terminals — closed circuit is healthy, open is failed. A failed high-limit gets replaced, not bypassed. Bypassing the high-limit is a fire hazard and a Florida fire-marshal finding.",
      ],
    },
    {
      heading: "5. The gas valve itself — Honeywell, White-Rodgers, or Robertshaw",
      body: [
        "If the thermopile reads strong, the pilot's clean, the high-limit's closed, and the gas valve still won't open the main burner, the valve itself has failed. A Honeywell VR8205 or White-Rodgers 36C03 on a millivolt circuit fails in three modes: stuck closed, leaking shut-off seat, or a failed magnet coil that needs 500+ mV to hold.",
        "Diagnosis: with thermopile leads attached and pilot lit, jumper the TH and TR terminals on the gas valve. If the main burner lights, the valve magnet works and the problem is upstream at the controller or thermostat. If the main burner stays dark, the valve's done. A Honeywell VR8205 replacement runs $180–$260 in parts and 45 minutes labor.",
      ],
    },
    {
      heading: "6. Electronic ignition systems — Frymaster H50 and newer Pitco",
      body: [
        "Newer fryers — Frymaster H50, BIPH series, Pitco Solstice with PFC — use intermittent pilot ignition and a high-tension spark or hot-surface igniter, not a standing pilot. Failure modes shift: a hot-surface igniter that does not glow (open element, $90 part), a flame-rectification probe scaled with carbon (clean with emery cloth), or a control module that does not output spark on call-for-heat.",
        "Sequence: power up, call for heat, listen for a click from the gas valve and watch the igniter for a glow within 30 seconds. If the controller throws a flame-fault code after three trial-for-ignition attempts, the rectification ground or the flame probe is at fault. Frymaster service manuals list the trial-for-ignition timing per model — match the timing to the symptom.",
      ],
    },
    {
      heading: "7. Combustion air, ventilation, and the hood",
      body: [
        "A fryer that lights, runs for 5 minutes, and then drops out is sometimes choking on combustion air. The makeup-air system in the kitchen — the Captive-Aire MUA unit, the exhaust hood, the dampers — must supply enough fresh air for the fryer to burn cleanly. If the exhaust hood pulls harder than the MUA can supply, room pressure goes negative and the fryer pilot blows out or the main burner runs yellow and incomplete.",
        "A Berne Commercial tech will check the hood pressure differential, look at the burner flame color (sharp blue with a small yellow tip is correct; lazy yellow is starving), and read CO at the flue. CO over 100 ppm in the flue is a hazard and a code finding under NFPA 96.",
      ],
    },
    {
      heading: "8. Oil quality, filtration, and the boil-out routine",
      body: [
        "An off-target fryer is sometimes not a fryer fault at all — it is oil quality. Polymerized oil insulates the heat-transfer tubes on a Vulcan 1ER50 or the fire tubes on a Pitco SG14 and the burner cannot push heat into the oil. Daily oil filtration through the Frymaster FootPrint or a portable Filter Magic unit, and a weekly boil-out with a fryer-cleaner solution, keeps heat transfer at spec.",
        "Florida DBPR inspectors will check oil clarity and the boil-out log on routine visits. A fryer running cooler than spec with dark oil is a service-and-clean call, not a parts call.",
      ],
    },
    {
      heading: "Cost reality and call timing",
      body: [
        "Real tickets from recent calls: thermopile replacement on a Pitco SG14, $145 total. Honeywell VR8205 gas valve swap on a Frymaster MJH, $360. Hot-surface igniter on a Pitco Solstice PFC, $215. Full descale, boil-out, and probe calibration on a Frymaster H50, $290. Replacement of all three temperature probes on a 3-vat Frymaster bank, $480.",
        "A quarterly preventive — boil-out, pilot orifice clean, thermopile millivolt check, hood pressure verification — runs $180–$260 per unit and pushes most fryer failures past the busy season.",
      ],
    },
    {
      heading: "Fryer tech, same day",
      body: [
        "Berne Commercial Repair runs same-day dispatch for Pitco, Frymaster, Vulcan, Imperial, and Wells commercial fryers across Miami-Dade, Broward, and Palm Beach. $89 commercial service call, applied to the approved repair. Call (754) 345-4515 or request service through our fryer repair page. For residential ranges with deep-fry features — Wolf, Viking, Thermador — our sister site bernerepair.com handles the home side.",
      ],
    },
  ],
  internalLinks: [
    { label: "Fryer repair", href: "/services/fryer-repair" },
    {
      label: "Commercial range repair",
      href: "/services/commercial-range-repair",
    },
    { label: "Commercial oven repair", href: "/services/commercial-oven-repair" },
    {
      label: "Commercial hood repair",
      href: "/services/commercial-hood-repair",
    },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "espresso-machine-no-pressure-cafe",
    "commercial-walk-in-cooler-temperature-issues",
  ],
}
