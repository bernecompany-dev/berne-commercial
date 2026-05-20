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
}
