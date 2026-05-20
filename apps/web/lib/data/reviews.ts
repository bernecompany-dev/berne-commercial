export type Review = {
  author: string
  rating: 1 | 2 | 3 | 4 | 5
  quote: string
  /** ISO date for schema.org */
  datePublished: string
  localGuide?: boolean
}

/**
 * Real Google reviews from the Berne family of brands.
 * Sourced from the residential site (`my-site/data/reviews.ts`) — these are
 * verbatim customer reviews from Berne Appliance Repair, which is the parent
 * organization. We surface them here so the aggregate rating (4.79/871)
 * emitted in JSON-LD is backed by visible review content on the page.
 */
export const REVIEWS: Review[] = [
  {
    author: "Alice Sherwood",
    rating: 5,
    datePublished: "2026-02-08",
    localGuide: true,
    quote:
      "I couldn't recommend Berne more highly! My technician came on time, proceeded with expertise, and went above and beyond to get 2 appliances fixed before Christmas eve! I am beyond thankful.",
  },
  {
    author: "Brian Bibbee",
    rating: 5,
    datePublished: "2026-01-04",
    localGuide: true,
    quote:
      "Berne is literally one call and it's done. They show up on time, communicate throughout the job, and always produce a great result! Highly recommend this company!",
  },
  {
    author: "Dr. Kevin Cai Zhen",
    rating: 5,
    datePublished: "2026-01-04",
    quote:
      "Berne appliance was phenomenal. From customer service to the installation process of dryer and washer was amazing and smooth. Technicians knew what they were doing. I recommend 100%.",
  },
  {
    author: "Dana Nelson",
    rating: 5,
    datePublished: "2025-10-23",
    quote:
      "Fairly priced and the tech worked hard to be sure the problem with my LG refrigerator was fixed. He spent the day on a Sunday and thought it was fixed, the problem reoccurred and he immediately came back the next day to ensure the problem was resolved. There was also no further charge for the 2nd visit. Will definitely use again.",
  },
  {
    author: "Gregory Ramsey",
    rating: 5,
    datePublished: "2025-12-14",
    quote:
      "Refat showed up on time and was very courteous. He was very diligent and explained the steps he was going through while running diagnostics. When the part arrived he showed up and replaced the component quickly. I will definitely use Berne whenever needed, again!!",
  },
]

export const REVIEW_AGGREGATE = {
  ratingValue: 4.79,
  reviewCount: 871,
  bestRating: 5,
  worstRating: 1,
}
