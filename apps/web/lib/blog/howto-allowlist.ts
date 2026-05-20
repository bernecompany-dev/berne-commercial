/**
 * Curated HowTo step lists for blog articles that contain a verified,
 * procedural sequence in their body. We hand-curate instead of parsing
 * article sections at runtime because fabricated or mis-extracted steps
 * trigger a structured-data mismatch penalty in Search Console.
 *
 * Add an entry here ONLY after manually reading the post and confirming
 * the step list matches a real procedure section in the body.
 *
 * Most Berne Commercial blog posts are diagnostic essays rather than
 * step-by-step procedures — empty record is the safe default.
 */

import type { HowToStepInput } from "@/lib/seo"

export type HowToBlueprint = {
  name: string
  description: string
  totalTimeISO: string
  estimatedCostUSD?: string
  supply?: string[]
  tool?: string[]
  steps: HowToStepInput[]
}

export const HOWTO_BLUEPRINTS: Record<string, HowToBlueprint> = {
  "true-refrigeration-door-gasket-replacement": {
    name: "Replace a True Refrigeration Door Gasket",
    description:
      "Field replacement procedure for True T-49, T-23, GDM, and TSSU door gaskets — pulling the old gasket, seating the new magnetic strip, and verifying the seal with a flashlight test.",
    totalTimeISO: "PT45M",
    estimatedCostUSD: "80",
    supply: [
      "OEM True door gasket (model-specific)",
      "Warm water (for vinyl conditioning)",
    ],
    tool: ["Flashlight", "Clean cloth"],
    steps: [
      {
        name: "Identify the correct gasket profile",
        text: "Pull the model and serial off the nameplate inside the cabinet. The model number defines the gasket profile (T-49 vs T-23 vs GDM-26 vs TSSU-60). The serial determines production-year revision — 2018-and-later T-49 units use a different retainer than 2012-and-earlier units, and the old-spec gasket will not seat in the new-spec retainer.",
      },
      {
        name: "Pull the old gasket",
        text: "On a True T-49, the gasket lifts out of the retainer channel by hand. No tools required. Wipe the channel clean of any debris before installing the new gasket.",
      },
      {
        name: "Condition the new gasket",
        text: "Soak the new gasket in warm water for 15 minutes before installation if it has been stored cold. Warming the vinyl lets it reshape to the cabinet face on the first close.",
      },
      {
        name: "Seat the new gasket starting at the top",
        text: "Press the magnetic strip into the retainer channel starting at the top corners and working down both sides. The bottom seats last. Run your finger around the full perimeter to confirm the strip is fully captured.",
      },
      {
        name: "Verify with the flashlight test",
        text: "Close the door, turn off the cabinet light, shine a flashlight inside, and look for daylight at the perimeter. Any visible light is a leak point. Most corner leaks self-correct within 24 hours of operation; persistent leaks indicate a cabinet-face high spot from impact damage that needs correction before the gasket will seal.",
      },
    ],
  },

  "beverage-air-condenser-cleaning-coastal": {
    name: "Clean a Beverage-Air Reach-In Condenser Coil",
    description:
      "Field cleaning procedure for Beverage-Air HBR48, HBF49, and MMR23 reach-in condenser coils on coastal South Florida installations — power-down through pressure verification.",
    totalTimeISO: "PT45M",
    estimatedCostUSD: "20",
    supply: [
      "Foaming coil cleaner (Nu-Calgon Evap Pow'r or RectorSeal CalClean)",
    ],
    tool: [
      "HEPA shop vacuum with brush attachment",
      "Low-pressure garden sprayer",
      "Refrigeration gauges",
    ],
    steps: [
      {
        name: "Power down at the wall",
        text: "Kill power at the disconnect or wall outlet before any coil work. Lock and tag if the disconnect supports it.",
      },
      {
        name: "Pull the front grille and vacuum loose debris",
        text: "Remove the front grille on the Beverage-Air HBR48. Vacuum loose debris off the face of the condenser with a brush attachment to capture lint and surface particulate before chemical application.",
      },
      {
        name: "Spray foaming coil cleaner and dwell",
        text: "Spray a foaming coil cleaner (Nu-Calgon Evap Pow'r or RectorSeal CalClean) onto the fin face. Let it dwell for 10 minutes so the surfactants lift the grease-and-salt layer.",
      },
      {
        name: "Rinse with low-pressure water",
        text: "Rinse with a low-pressure garden sprayer aimed straight through the fins. Never use a pressure washer — the aluminum bends and the coil loses fin density permanently.",
      },
      {
        name: "Inspect and clean the fan blade",
        text: "Pull the motor mount, wipe the fan blade, and check that the blade hasn't drifted axially on the shaft. A loose blade kills airflow and rebuilds heat-load faster than the freshly cleaned coil can shed it.",
      },
      {
        name: "Restart and verify pressures",
        text: "Reassemble, restart, and verify suction and discharge pressures with gauges after 15 minutes of runtime. R290 units run 110 to 180 psi head at 75°F ambient; R134a/R404A legacy units run 180 to 250 psi. Sustained head above 280 psi indicates cleaning was incomplete or another issue (charge, fan motor, contactor).",
      },
    ],
  },

  "walk-in-freezer-frost-buildup-defrost": {
    name: "Diagnose a Frosted Walk-In Freezer Evaporator Coil",
    description:
      "Field diagnostic sequence on a Heatcraft or Bohn walk-in freezer evaporator packed with frost — isolating defrost timer, heating element, and termination thermostat as the failure point.",
    totalTimeISO: "PT90M",
    estimatedCostUSD: "0",
    supply: [],
    tool: ["Multimeter", "Clamp meter", "Lock-and-tag tags"],
    steps: [
      {
        name: "Read the evaporator nameplate",
        text: "Read the evaporator nameplate and identify the defrost type — electric (240V heating element with klixon snap-disc termination, Paragon 8141 or Grasslin DTAV40 timer) vs hot-gas. Most South Florida walk-in freezers are electric defrost. Photograph the nameplate.",
      },
      {
        name: "Test the Paragon defrost timer",
        text: "Open the timer cover and watch the dial turn. If it doesn't turn, the timer motor is dead — $35 part, 15-minute swap. If it turns but doesn't trip the defrost contactor at the set time, the cam pins are missing or the contacts have welded. At the scheduled defrost time, the compressor should stop, the heaters should energize, and the evap fan should pause. If any of those three doesn't happen, the timer is the suspect.",
      },
      {
        name: "Ohm the defrost heating elements",
        text: "Kill power at the disconnect. Lock and tag per NFPA 70E. Pull the cover on the evaporator junction box and ohm each tubular 240V incoloy element across its terminals. 25 to 40 ohms is healthy; open is failed. Replace failed elements as a matched pair on long evaporators to keep heat distribution even.",
      },
      {
        name: "Test the termination thermostat",
        text: "Pull the Klixon or White-Rodgers snap-disc (typically 55°F close-on-rise, 25°F open-on-fall). Dip it in warm water at about 60°F and ohm across the terminals — should read closed. Let it cool below 25°F in an icemaker bin — should open. Failed test = replace the disc, $25 part, 15-minute swap.",
      },
      {
        name: "Verify the drain pan heater and heat tape",
        text: "Check the heat tape on the drain line with a clamp meter at the receptacle — should pull 0.5 to 1 amp depending on length. Open circuit means tape replacement (~$90 plus labor). Confirm the drain pan heater is working so cleared frost-water drains instead of refreezing.",
      },
      {
        name: "Inspect door gaskets and run a 24-hour catch-up",
        text: "Check the gasket for tears at the bottom corners, crushed sections, missing magnets. Hold a lit incense stick at the perimeter; smoke pulling inward means warm air infiltration. After defrost is restored, watch the box pull back to -10 to -20°F over a 24-hour catch-up. Failure to recover indicates a separate refrigeration-side problem (compressor, TXV, or charge).",
      },
    ],
  },

  "hoshizaki-km-water-inlet-flicker-diagnosis": {
    name: "Diagnose a Hoshizaki KM Series A1 Water-Inlet Alarm",
    description:
      "Field diagnostic flowchart for the Hoshizaki KM-901MAJ, KM-1100MAJ, and KM-1340MAJ A1 alarm — separating solenoid, float switch, water pressure, and distribution-tube scale as the underlying cause.",
    totalTimeISO: "PT60M",
    estimatedCostUSD: "0",
    supply: ["Nu-Calgon Nickel-Safe descaler"],
    tool: ["Multimeter", "Pressure gauge", "Lock-and-tag tags"],
    steps: [
      {
        name: "Power-cycle and observe the alarm",
        text: "Power-cycle the unit and observe whether the A1 alarm returns within 30 minutes. If it doesn't return, log as intermittent and recheck filter and water pressure before invasive diagnostic.",
      },
      {
        name: "Read the LED state at alarm",
        text: "Watch which LED cycle state the board is in at the moment of alarm. A1 during initial fill with inlet valve clicking but no water flow = solenoid failure. A1 during fill with no valve click = float switch stuck closed. A1 mid-freeze = water-distribution tube scale or pump failure. A1 during harvest with no splash = inlet pressure or partial valve obstruction.",
      },
      {
        name: "Run the specific test",
        text: "Based on the LED state, run the targeted test: ohm the inlet solenoid coil (200 to 400 ohms healthy, open is failed); pull the float chamber cover and observe float motion plus listen for reed switch click; install a pressure gauge on the inlet line and verify pressure stays above 20 PSI during fill; or pull the water-distribution tube and inspect each spray hole for scale.",
      },
      {
        name: "Confirm the fix with three consecutive clean cycles",
        text: "After the corrective action — solenoid replacement (4A0455-01, $58-$82, 30-minute job), float switch swap (2A1010-01, $42, 20-minute job), pressure regulator install, or distribution tube descale in Nu-Calgon Nickel-Safe — run three consecutive freeze cycles to completion without alarm before closing the ticket.",
      },
    ],
  },

  "true-t-series-condenser-cleaning-coastal-inland": {
    name: "Clean a True T-Series Reach-In Condenser",
    description:
      "Field cleaning procedure for True T-49, T-23, and GDM condenser coils — vacuum, foaming cleaner, inside-out rinse, and amperage verification per OEM service literature.",
    totalTimeISO: "PT60M",
    estimatedCostUSD: "20",
    supply: ["Non-acid foaming coil cleaner (Nu-Calgon Cal Green or equivalent)"],
    tool: [
      "1/4-inch nut driver",
      "HEPA-filter vacuum with brush attachment",
      "Low-pressure water source / garden hose",
      "Clamp meter",
      "Infrared thermometer",
    ],
    steps: [
      {
        name: "Power off, lock and tag",
        text: "Kill power at the disconnect or wall receptacle. Lock and tag the disconnect before any coil work.",
      },
      {
        name: "Pull the front grille",
        text: "Remove the four 1/4-inch nuts holding the True T-49 front grille. Lift the grille off to expose the bottom-front condenser.",
      },
      {
        name: "Vacuum the coil face",
        text: "Vacuum the front face of the coil with a HEPA-filter vacuum and brush attachment to capture loose particulate before chemistry application.",
      },
      {
        name: "Apply foaming coil cleaner",
        text: "Spray a non-acid foaming coil cleaner (Nu-Calgon Cal Green or equivalent per OEM service literature) onto the fin face. Let it work for 5 minutes.",
      },
      {
        name: "Rinse inside-out at low pressure",
        text: "Rinse from the inside out using a low-pressure water source (garden hose with wide nozzle). High-pressure rinse bends fins, reduces fin density, and lowers performance permanently.",
      },
      {
        name: "Verify drain pan and fan blade",
        text: "Confirm the condensate drain pan and drain line are clear before reassembling. Check the fan blade for grease buildup and clean if needed.",
      },
      {
        name: "Verify with clamp meter and IR thermometer",
        text: "Power back on, let the unit cycle for 30 minutes, then read compressor amperage with a clamp meter. Healthy True T-49 on R-134a pulls 9 to 13 amps in steady state at 90°F ambient. Discharge line temperature should read 180 to 210°F with an IR thermometer. Anything over 16 amps or over 230°F means the coil is still constrained.",
      },
    ],
  },

  "hobart-am15-wash-arm-bearing-replacement": {
    name: "Diagnose and Replace Hobart AM-15 Wash Arm Bearings",
    description:
      "Field procedure for diagnosing and replacing Hobart AM-15 wash arm nylon bushings (bushing kit 00-873952) — by-hand vertical-play check, full upper-and-lower bushing swap, and post-service rotation verification.",
    totalTimeISO: "PT60M",
    estimatedCostUSD: "55",
    supply: [
      "Hobart wash arm bushing kit 00-873952 (two bushings per arm, four total)",
      "Hobart Stera-Sheen descaler",
    ],
    tool: ["Lock-and-tag tags"],
    steps: [
      {
        name: "Power off, lock and tag",
        text: "Kill power at the disconnect serving the Hobart AM-15. Lock and tag before any wash-chamber work.",
      },
      {
        name: "Lift-test the lower wash arm",
        text: "Open the chamber door, grab the lower wash arm at one end, and lift. New bushings give you 1/16-inch vertical play, no more. 1/8-inch play is the threshold for replacement. 1/4-inch play means the arm is dragging on rack rails during the cycle.",
      },
      {
        name: "Rotation-test by hand",
        text: "Spin the arm by hand. Smooth, quiet rotation with even resistance is healthy. Grinding, catching, or a click-click-click as the arm passes over the hub is worn nylon.",
      },
      {
        name: "Pull each arm and inspect bushing bore",
        text: "Lift each arm off the hub (no tools required on the AM-15) and inspect the bushing bore. A round bore is healthy; an oval bore is the failure mode.",
      },
      {
        name: "Descale the hub",
        text: "Clean each hub with a non-chloride descaler — Hobart Stera-Sheen is the spec'd chemical. Let it sit for 20 minutes before scrubbing.",
      },
      {
        name: "Press in new bushings as a full set",
        text: "Replace upper and lower bushings as a set even if only one is visibly worn — asymmetric replacement creates an asymmetric wear pattern that shortens the next interval by 40 percent. Press new bushings in by hand. No grease, no oil — rinse water lubricates the nylon in operation.",
      },
      {
        name: "Re-seat and rotation-check before energizing",
        text: "Re-seat each arm on its hub. Rotation-check by hand to confirm smooth, even motion. Only then re-energize at the disconnect and run a normal cycle to verify.",
      },
    ],
  },

  "rational-icombi-pro-descaling-steam-generator": {
    name: "Run the Rational iCombi Pro CareControl Descaling Cycle",
    description:
      "Step-by-step procedure for running CareControl descaling on a Rational iCombi Pro steam generator using OEM Care Solid Tab — initiation, dwell, flush, and clean-output verification.",
    totalTimeISO: "PT120M",
    estimatedCostUSD: "40",
    supply: [
      "Rational Care Solid Tab descaler (or label-equivalent OEM cleaner)",
    ],
    tool: [],
    steps: [
      {
        name: "Initiate CareControl from the cleaning menu",
        text: "CareControl can be initiated either on the unit's prompt or manually from the cleaning menu. Begin the cycle when the cooking schedule allows for 90 to 120 minutes of unit downtime.",
      },
      {
        name: "Drop the descaler tab in the designated port",
        text: "When the unit prompts for the descaler tablet, drop a Rational Care Solid Tab (or label-equivalent OEM cleaner) into the designated port and confirm. Never substitute non-Rational chemistry — the CareControl cycle is calibrated for the OEM cleaner concentration and pH.",
      },
      {
        name: "Let the cycle run uninterrupted",
        text: "The cycle runs 90 to 120 minutes depending on the program selected. The unit circulates cleaner through the steam generator, flushes, and tests for clean output. Do not interrupt the cycle mid-run.",
      },
      {
        name: "Verify clean-output return to ready state",
        text: "When the cycle completes, the unit signals clean output and returns to ready state. Confirm the descale prompt has cleared and that no error code is present before resuming production cooking.",
      },
      {
        name: "Re-validate cooking programs after service",
        text: "After any steam-generator service, re-validate steam-side programs (poaching, sous vide) by running a representative menu item and comparing to the pre-service result. Document any program adjustments needed for the cooking team.",
      },
    ],
  },

  "garland-sectional-range-gas-pressure-adjustment": {
    name: "Adjust Garland Sectional Range Manifold Gas Pressure",
    description:
      "Install-day procedure for setting Garland G24, G36, G48, and G60 sectional range manifold pressure to spec (4 inches WC natural gas / 10 inches WC propane) using a manometer at the integral regulator.",
    totalTimeISO: "PT45M",
    estimatedCostUSD: "0",
    supply: [],
    tool: [
      "U-tube manometer or digital combustion analyzer (Bacharach Combustion Insight)",
      "Bacharach combustible-gas leak detector",
      "Lock-and-tag tags",
    ],
    steps: [
      {
        name: "Connect the manometer at the manifold test port",
        text: "Locate the 1/8-inch NPT pressure test port at the Garland manifold per the service manual. Install a U-tube manometer or digital combustion analyzer at the port.",
      },
      {
        name: "Read manifold pressure under full load",
        text: "Run the range at full output — all burners on high, oven on high — and read the manifold pressure under load. Spec is 4 inches WC for natural gas, 10 inches WC for propane, with a tolerance of plus-or-minus 0.2 inches.",
      },
      {
        name: "Isolate gas, lock and tag",
        text: "If reading is outside spec, shut the gas off (or appropriate isolation) and lock-and-tag before adjusting the regulator.",
      },
      {
        name: "Remove the regulator adjustment cap",
        text: "Remove the regulator adjustment cap on top of the regulator (typically a screw-cap).",
      },
      {
        name: "Re-energize and adjust the regulator screw",
        text: "Re-energize gas with all burners closed. Open one burner and adjust the regulator screw — clockwise increases pressure on most regulators, counterclockwise decreases. Watch the manometer and adjust until spec is reached.",
      },
      {
        name: "Verify under maximum load",
        text: "Open all burners and the oven and verify pressure holds spec under maximum load.",
      },
      {
        name: "Close cap, leak-test, inspect flames",
        text: "Close the adjustment cap. Run a leak test with a Bacharach combustible-gas detector on the regulator cap and any other joints touched during the work. Final flame inspection: sharp blue flames across all burners, oven heating consistently, no off-smell.",
      },
    ],
  },

  "traulsen-rbc-blast-chiller-probe-calibration": {
    name: "Verify Traulsen RBC Core-Temperature Probe Calibration",
    description:
      "Field calibration verification on a Traulsen RBC blast chiller core probe using a stable ice-water reference bath and a NIST-traceable reference thermometer.",
    totalTimeISO: "PT20M",
    estimatedCostUSD: "0",
    supply: ["Crushed ice", "Potable water"],
    tool: [
      "Calibrated reference thermometer (Thermoworks Smoke X, Cooper-Atkins, or NIST-traceable)",
      "Beaker or large cup",
    ],
    steps: [
      {
        name: "Prepare an ice-water reference bath",
        text: "Fill a beaker or large cup with crushed ice. Add just enough water to fill the gaps. Allow 5 minutes for the bath to stabilize at 32°F (0°C).",
      },
      {
        name: "Insert both probes",
        text: "Insert the unit's core temperature probe and a calibrated reference thermometer (Thermoworks Smoke X, Cooper-Atkins, or NIST-traceable lab thermometer) into the ice bath, keeping the tips submerged and clear of the container walls.",
      },
      {
        name: "Read both within the same minute",
        text: "Wait for the readings to settle, then read both probes within the same one-minute window to avoid drift between observations.",
      },
      {
        name: "Compute the calibration error",
        text: "Subtract the reference reading from the unit's probe reading. Less than 1°F difference: within spec, no action. 1 to 2°F: borderline, adjust if possible and retest in 30 days. 2°F+: calibration adjustment required.",
      },
      {
        name: "Verify the hot end with a hot-water bath",
        text: "For full two-point verification, repeat the test in a hot-water bath at 135 to 140°F maintained with a sous vide circulator. Probes can drift differently at high versus low temperatures, especially after extreme-condition exposure.",
      },
      {
        name: "Adjust or replace per the result",
        text: "If adjustment is needed, enter the unit's service menu and recalibrate to the reference. If adjustment isn't possible (older units) or if calibration error exceeds 2°F at either end, replace the probe ($180 to $260 OEM, 30-minute swap).",
      },
    ],
  },

  "ice-machine-bacterial-buildup-health-code": {
    name: "Manually Clean and Sanitize a Commercial Ice Machine Bin",
    description:
      "NSF/ANSI 12-aligned manual cleaning and sanitizing procedure for commercial ice machine bins, door seals, and harvest curtains using an NSF-approved bin sanitizer.",
    totalTimeISO: "PT60M",
    estimatedCostUSD: "15",
    supply: [
      "NSF-approved ice-machine bin sanitizer (Hoshizaki Mn-Safe, Manitowoc bin sanitizer, or equivalent chlorine at 100-200 ppm or QA at 200 ppm)",
      "Sanitized transport bin",
      "Potable rinse water",
    ],
    tool: ["Spray bottle", "Lock-and-tag tags"],
    steps: [
      {
        name: "Power off, lock and tag",
        text: "Kill power to the unit at the disconnect. Lock and tag before opening the bin.",
      },
      {
        name: "Empty the bin",
        text: "Empty the bin of ice into a sanitized transport bin or discard. Remove the bin door if removable.",
      },
      {
        name: "Apply NSF-approved sanitizer",
        text: "Dilute the bin sanitizer per label — typically chlorine at 100 to 200 ppm or quaternary ammonia at 200 ppm. Spray all bin interior surfaces, the harvest curtain, the door seal, and the underside of the evaporator splash zone.",
      },
      {
        name: "Dwell for the label-specified time",
        text: "Let the sanitizer dwell for the label-specified time (typically 5 to 10 minutes) to achieve sanitization contact spec.",
      },
      {
        name: "Rinse with potable water",
        text: "Rinse with potable water. Most bin sanitizers are no-rinse for sanitation purposes, but rinsing prevents taste transfer to the next ice batch.",
      },
      {
        name: "Air-dry and reinstall",
        text: "Air-dry the cabinet, then reinstall the bin door.",
      },
      {
        name: "Run a freeze cycle and discard the first batch",
        text: "Restore power, run a freeze cycle, and discard the first batch of ice as a sanitation flush before returning the unit to service.",
      },
    ],
  },

  "hobart-cl-booster-heater-scaling-miami": {
    name: "Descale a Hobart CL Series Booster Heater",
    description:
      "Field descaling procedure for the Hobart CLeN built-in 36 kW electric booster heater using Hobart Stera-Sheen — drain, recirculate, rinse, and return to service.",
    totalTimeISO: "PT120M",
    estimatedCostUSD: "85",
    supply: ["Hobart Stera-Sheen descaler (1 to 2 gallons per booster)"],
    tool: ["Lock-and-tag tags", "Max-registering thermometer"],
    steps: [
      {
        name: "Lock and tag the unit",
        text: "Lock and tag the Hobart CLeN unit at the disconnect before any booster service.",
      },
      {
        name: "Drain the booster tank",
        text: "Drain the booster tank fully through the drain valve.",
      },
      {
        name: "Fill with Hobart Stera-Sheen at full strength",
        text: "Refill the booster tank with Hobart Stera-Sheen at the label-specified concentration (typically full strength). Confirm the element is fully submerged.",
      },
      {
        name: "Recirculate via the booster pump",
        text: "Recirculate the descaler via the booster pump for the spec dwell time, typically 30 to 60 minutes. Recirculation distributes the descaler across the element surface and the tank walls.",
      },
      {
        name: "Drain and rinse with potable water",
        text: "Drain the descaler. Rinse the tank with potable water and drain again to clear residual descaler before returning to service.",
      },
      {
        name: "Refill and verify final rinse at 180°F",
        text: "Refill the tank, restore power, and bring up to setpoint. Verify final rinse hits 180°F with a max-registering thermometer at the manifold, both at idle and under conveyor load. Document the post-service readings for the kitchen manager's log.",
      },
    ],
  },

  "commercial-dishwasher-rinse-temp-sanitizing-chemical": {
    name: "Verify Commercial Dishwasher Daily Sanitizing Performance",
    description:
      "Per-shift verification routine for hot-water and chemical-sanitizing commercial dishwashers — proves the unit is meeting FDA Food Code 4-501.114 spec before service starts.",
    totalTimeISO: "PT10M",
    estimatedCostUSD: "0",
    supply: [
      "Max-registering thermometer (Cooper-Atkins T-260 or equivalent, hot-water machines)",
      "Sanitizer test strips matching the chemistry (chlorine, QA, or iodine)",
    ],
    tool: [],
    steps: [
      {
        name: "Run a test cycle at shift open",
        text: "At the start of each shift, run the dishwasher through a typical test cycle before any production dishes go through.",
      },
      {
        name: "Verify hot-water sanitizing temperature",
        text: "On hot-water machines, place a max-registering thermometer on a rack of dishes and read the peak temperature at the dish surface. Spec is 180°F at the final-rinse manifold or 165°F at the dish surface (confirm with local DBPR). Below spec = failed sanitizing cycle.",
      },
      {
        name: "Verify chemical-sanitizing concentration",
        text: "On chemical-sanitizing machines, test the final rinse with a sanitizer test strip. Confirm chlorine at 50-100 ppm, quaternary ammonia at 200 ppm, or iodine at 12.5 ppm per the unit's chemistry. Out-of-spec concentration = failed sanitizing cycle.",
      },
      {
        name: "Log the reading",
        text: "Log the result in the daily kitchen log with the time, the result (numeric or pass/fail), and the staff initial. This log is the answer to a DBPR inspection question about routine verification.",
      },
      {
        name: "Quarantine the machine if the test fails",
        text: "If the test fails, do not run production dishes through the machine until the cause is identified and fixed. Dishes go through a three-compartment sink with hot water and chemical sanitizer until repair. Do not run the machine and pretend it's sanitizing — that's the failure mode that catches kitchens on the wrong side of an outbreak.",
      },
    ],
  },
}
