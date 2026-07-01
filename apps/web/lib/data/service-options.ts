/**
 * Slim {slug, title} list of every service in lib/data/services.ts, kept in
 * a separate module for the CLIENT-side <DispatchForm> service <select>.
 *
 * Why it exists: dispatch-form.tsx is "use client" and previously imported
 * the full `services` array — bundling all 50+ KB of longDescription / faqs /
 * symptomTable prose into the client JS on nearly every page. The form only
 * needs slug + title.
 *
 * Sync guard: lib/data/services.ts runs a module-init assertion comparing
 * this list 1:1 (order, slug, title) against `services` — adding/renaming a
 * service without updating this file fails `next build` with a message
 * pointing here. Do NOT import services.ts from this file (that would drag
 * the full data back into the client bundle).
 */
export type ServiceOption = { slug: string; title: string }

export const SERVICE_OPTIONS: readonly ServiceOption[] = [
  { slug: "commercial-refrigeration-repair", title: "Commercial Refrigeration Repair" },
  { slug: "walk-in-cooler-repair", title: "Walk-In Cooler Repair" },
  { slug: "walk-in-freezer-repair", title: "Walk-In Freezer Repair" },
  { slug: "reach-in-cooler-repair", title: "Reach-In Cooler Repair" },
  { slug: "reach-in-freezer-repair", title: "Reach-In Freezer Repair" },
  { slug: "ice-machine-repair", title: "Ice Machine Repair" },
  { slug: "fryer-repair", title: "Commercial Fryer Repair" },
  { slug: "commercial-dishwasher-repair", title: "Commercial Dishwasher Repair" },
  { slug: "commercial-oven-repair", title: "Commercial Oven Repair" },
  { slug: "commercial-range-repair", title: "Commercial Range Repair" },
  { slug: "steamer-repair", title: "Commercial Steamer Repair" },
  { slug: "prep-table-repair", title: "Prep Table Repair" },
  { slug: "commercial-laundry-repair", title: "Commercial Laundry Repair" },
  { slug: "commercial-washer-repair", title: "Commercial Washer Repair" },
  { slug: "commercial-dryer-repair", title: "Commercial Dryer Repair" },
  { slug: "commercial-hood-repair", title: "Commercial Hood & Exhaust Repair" },
  { slug: "slush-machine-repair", title: "Slush Machine Repair" },
  { slug: "ice-cream-machine-repair", title: "Ice Cream Machine Repair" },
  { slug: "pizza-prep-table-repair", title: "Pizza Prep Table Repair" },
  { slug: "espresso-machine-repair", title: "Commercial Espresso Machine Repair" },
  { slug: "coffee-machine-repair", title: "Commercial Coffee Machine & Brewer Repair" },
  { slug: "panini-press-repair", title: "Panini Press & Sandwich Grill Repair" },
  { slug: "warming-table-repair", title: "Warming Table & Heated Holding Repair" },
  { slug: "soda-machine-repair", title: "Fountain & Soda Machine Repair" },
  { slug: "margarita-machine-repair", title: "Margarita & Frozen Cocktail Machine Repair" },
  { slug: "vending-machine-repair", title: "Vending Machine Repair" },
  { slug: "garbage-disposal-repair", title: "Garbage Disposal Repair" },
  { slug: "trash-compactor-repair", title: "Trash Compactor Repair" },
  { slug: "commercial-appliance-repair", title: "Commercial Appliance Repair" },
]
