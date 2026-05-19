import type { Article } from "../articles"

export const pizzaConveyorOvenBelt: Article = {
  slug: "pizza-conveyor-oven-belt-bearing",
  title:
    "Pizza Conveyor Oven — Belt Tension and Bearing Wear Service",
  description:
    "Your Lincoln Impinger 1132, Middleby Marshall PS640, or Lincoln 1162 conveyor belt is tracking off, slipping, or running uneven. A field tech's read on belt tension, drive bearings, and motor diagnosis.",
  publishedAt: "2026-08-05T09:00:00Z",
  readingMinutes: 9,
  category: "Restaurant Equipment",
  tags: [
    "pizza oven",
    "Lincoln Impinger",
    "Middleby Marshall",
    "conveyor",
    "belt",
    "pizza",
  ],
  lede: "A pizza-shop owner in Hialeah calls Berne Commercial about the Lincoln Impinger 1132 conveyor that's been tracking off the rails and bunching pizzas at the exit end. The crust on a 10-inch pie is browning unevenly because the belt's running slow on one side. Pizza conveyor oven belt problems are usually mechanical (drive chain, bearings, belt tension) rather than electrical, and the diagnostic path is straightforward if you know what to look at.",
  sections: [
    {
      heading: "1. The conveyor drive train — what's actually moving",
      body: [
        "A Lincoln Impinger 1132 or Middleby Marshall PS640 conveyor uses a variable-speed gear motor at one end of the oven, a drive sprocket on the motor shaft, an idler sprocket at the opposite end, and a stainless wire-mesh belt between them. The belt rides on rails along the length of the oven. Tension is set by a take-up adjustment at the idler end. Belt speed is controlled by the conveyor speed knob at the front control panel.",
        "When the belt tracks off, drifts, or bunches, the problem is one of four things: the belt itself is stretched or damaged, the take-up adjustment has drifted, the drive sprocket has a worn tooth that's slipping, or a bearing on either the drive shaft or the idler shaft has seized and is dragging. All four are visible during an open-oven inspection. None require removing major components.",
      ],
    },
    {
      heading: "2. Belt tension — too tight is worse than too loose",
      body: [
        "Belt tension on an Impinger 1132 is set so the belt has roughly 1/2 to 3/4 inch of vertical deflection at the middle of the open span when pressed by hand. Too tight, the drive motor amperage climbs, the bearings load up, and the belt edges fray on the rails. Too loose, the belt skips teeth on the drive sprocket and pizzas pile up at the exit.",
        "Adjust at the idler end with the take-up bolts on either side. Both sides have to be adjusted equally or the belt tracks toward the looser side. A belt that won't stay tracked despite proper tension usually has a worn rail or a bent edge segment. The fix is to identify the bent segment, cut it out, and re-link the belt with a fresh wire link section. Lincoln sells belt-repair kits for around $45 that include a yard of fresh belt and the connecting links.",
      ],
    },
    {
      heading: "3. Drive shaft and idler shaft bearings",
      body: [
        "The drive shaft on an Impinger 1132 rides in two bearings — one in the motor mount and one in the opposite end of the drive shaft housing. The idler shaft rides in two more bearings. All four are sealed pillow-block bearings rated for moderate temperature operation. Inside a 500°F oven environment, the grease in the bearing breaks down faster than the rated service life and the bearings start to drag at year 3 to 4.",
        "Diagnostic: with the oven cool and powered off, grab the belt at the drive end and try to rotate the drive sprocket by hand. The shaft should turn smoothly with the belt moving freely. Any grinding, catching, or noise from a bearing means replacement. A pillow-block bearing on an Impinger is a SKF or NTN unit, around $35 to $55 in parts, 30 to 45 minutes labor to swap. Replace bearings as a pair on each shaft to keep wear matched.",
      ],
    },
    {
      heading: "4. The gear motor and the variable-speed control",
      body: [
        "Conveyor speed on an Impinger 1132 is controlled by a Dart Controls speed potentiometer that feeds a Bodine or Leeson DC gear motor. The pot wears out after 5 to 7 years of use — bake time creeps off-spec as the pot drifts, and the kitchen blames the belt when it's actually the speed control. Test: read the pot voltage with the conveyor at minimum and maximum settings. A healthy pot gives a clean 0 to 10 VDC sweep. A drifted pot reads jumpy or shows a dead band.",
        "Gear motor failure shows as either no rotation at all (open motor winding) or extremely slow rotation with high amperage (worn gear train). Both require motor replacement. A Bodine 24A4BEPM-Z2 or equivalent gear motor on an Impinger 1132 runs around $480 in parts and 90 minutes labor. Carry the model number when calling for service — there are several gear ratios across the Lincoln conveyor line and ordering wrong adds a return trip.",
      ],
    },
    {
      heading: "5. Belt cleaning, scale, and food-debris buildup",
      body: [
        "Pizza ovens collect cheese drippings, flour, and burnt cornmeal on the conveyor belt and on the floor of the cooking chamber. Daily scraping is required by every manufacturer manual and ignored in most kitchens. Belt segments coated with carbonized cheese run heavy on one side, throw the tension off, and contribute to tracking problems.",
        "Our service calls include a belt-cleaning pass — pull the belt out of the oven (the link sections separate), soak in a degreaser bath for 30 minutes, scrub with a stainless brush, and reinstall. Two-hour job for a complete clean. Most operators schedule this annually as part of a deep-clean service. Skip it for two years and the belt gets so loaded with carbon that it stretches unevenly and the oven needs a new belt outright.",
      ],
    },
    {
      heading: "6. NSF, DBPR, and the oven-sanitation angle",
      body: [
        "Florida DBPR inspects pizza ovens for food-contact-surface cleanliness, focusing on the belt, the rails, and the cooking chamber floor. NSF/ANSI 4 covers conveyor pizza ovens. A belt with visible carbonized food buildup, a chamber floor with rodent harborage (an issue in older operations), or a hood-side grease deposit that's bridging onto the oven are all priority violations.",
        "Berne Commercial documents oven condition at every service visit. The work order includes photos of the belt, the chamber, and the hood interface. For pizza chains running corporate compliance, those photos produce the documentation trail that audit teams expect. Our service contracts include a quarterly oven inspection and an annual deep clean as scheduled work.",
      ],
    },
    {
      heading: "7. Burner and air-flow tuning on the cook side",
      body: [
        "A Lincoln Impinger 1132 uses an impinging-air design — air heated by a gas or electric element gets blasted onto the pizza through nozzle plates above and below the belt. If the air pressure drops or the nozzle plates get blocked with cheese drippings, the cook quality drops even with the belt running correctly. Cleaning the nozzle plates every 30 days is the manufacturer recommendation, and most operators skip it because access is awkward.",
        "On a gas Impinger, the burner needs to be tuned for the specific gas supply. Manifold pressure on natural gas is 3.5 inches WC; LP is 10 inches. A manometer reading at the burner test port verifies. If the burner is starved, the cook chamber doesn't hit set point and the operator compensates by slowing the belt. Slower belt means cooler crust on the bottom, hotter on top. The fix is correct burner pressure and clean nozzle plates, not slower belt speed.",
      ],
    },
    {
      heading: "8. Calling for service and what to know first",
      body: [
        "When you call Berne Commercial at (305) 520-7833 about a pizza conveyor oven, our dispatcher needs the model number off the nameplate (typically inside the front control panel cover), the symptom (tracking off, slipping, won't run, runs at wrong speed), and the install date. That information loads the truck — replacement bearings, belt link kits, speed pots, and a torque wrench for the take-up adjustment.",
        "Our $89 commercial service call covers the diagnostic and most adjustments. Belt replacement on a Lincoln Impinger 1132 is a separate quote because the labor varies with belt condition and access. For residential pizza ovens (Ooni, Roccbox, Breville Pizzaiolo) our sister site bernerepair.com handles those. The commercial conveyor work and residential dome-oven work are different specialties.",
      ],
    },
  ],
  internalLinks: [
    { label: "Commercial oven repair", href: "/services/commercial-oven-repair" },
    { label: "Commercial range repair", href: "/services/commercial-range-repair" },
    { label: "Pizza prep table repair", href: "/services/pizza-prep-table-repair" },
    { label: "Commercial appliance repair", href: "/services/commercial-appliance-repair" },
  ],
  relatedSlugs: [
    "commercial-convection-oven-even-bake-failure",
    "frymaster-filter-pump-lockout",
  ],
}
