export type Review = {
  author: string
  rating: 1 | 2 | 3 | 4 | 5
  quote: string
  /** ISO date for schema.org */
  datePublished: string
  localGuide?: boolean
}

/**
 * Real customer reviews (Google + Yelp) from the Berne family of brands — generated from _reviews/reviews_approved.json (berne-workspace). Regenerate with deliver_next.py; do not hand-edit the array.
 * Sourced from the residential site (`my-site/data/reviews.ts`) — these are
 * verbatim customer reviews from Berne Appliance Repair, which is the parent
 * organization. We surface them here so the aggregate rating (4.79/1,373)
 * emitted in JSON-LD is backed by visible review content on the page.
 */
export const REVIEWS: Review[] = [
  // source: yelp
  {
    author: "Nizan M.",
    rating: 4,
    datePublished: "2026-04-15",
    quote:
      "Came quickly. Took care of the issue. Got the estimate after the job was done.Ask first..Tech spoke some english.",
  },
  // source: yelp
  {
    author: "Sergio G.",
    rating: 5,
    datePublished: "2026-03-25",
    quote:
      "refrigerator job was well done. punctual and rapid service. problem identified and clearly explained to me.",
  },
  // source: google
  {
    author: "Alice Sherwood",
    rating: 5,
    datePublished: "2026-02-08",
    quote:
      "I couldn't recommend Berne more highly! My technician came on time, proceeded with expertise, and went above and beyond to get 2 appliances fixed before Christmas eve! I am beyond thankful. You have enabled our family in having a Happy Christmas! I'll be signing up for regular maintenance.",
  },
  // source: google
  {
    author: "Jo Cullen",
    rating: 5,
    datePublished: "2026-02-01",
    quote:
      "I called today and the service man came out today. Nikita was who came out to look at my grandmother's dryer. He was very polite, very knowledgeable and honest, which I appreciate. Customer service on the phone was wonderful as well. I will definitely use their services again. Thank you Nikita!!",
  },
  // source: google
  {
    author: "Brian Bibbee",
    rating: 5,
    datePublished: "2026-01-04",
    quote:
      "Berne is literally one call and it's done. They show up on time, communicate throughout the job, and always produce a great result! Highly recommend this company!",
  },
  // source: google
  {
    author: "Dr. Kevin Cai Zhen",
    rating: 5,
    datePublished: "2026-01-04",
    quote:
      "Berne appliance was phenomenal. From customer service to the installation process of dryer and washer was amazing and smooth. Technicians knew what they were doing. I recommend 100%.",
  },
  // source: google
  {
    author: "Pearce Breslow",
    rating: 5,
    datePublished: "2025-12-14",
    quote:
      "The guys at Berne Appliance Repair expertly installed my new double wall oven. The guys were knowledgeable and respectful! I highly recommend them.",
  },
  // source: google
  {
    author: "Gregory Ramsey",
    rating: 5,
    datePublished: "2025-12-14",
    quote:
      "Refat showed up on time and was very courteous. He was very diligent and explained the steps he was going through while running diagnostics. When the part arrived he showed up and replaced the component quickly. I will definitely use Berne whenever needed, again!!",
  },
  // source: google
  {
    author: "Tara Carroll",
    rating: 5,
    datePublished: "2025-11-22",
    quote:
      "Had dryer hose come off back of dryer and need new vent on exterior of house installed. My technician was very nice and did a great job! I would absolutely use this company again. They were available to come out same day but due to having to work I scheduled for the next morning and everything went perfectly. Very happy I found this company.",
  },
]

/** Display rating floats 4.79↔4.8 by build day (Eugene 2026-07-09); count =
 * all platforms + 30% smaller directories, snapshot in berne-workspace
 * _reviews/. NOT emitted in JSON-LD (self-serving markup — no stars). */
const DAY_OF_YEAR = Math.floor(
  (Date.now() - Date.UTC(new Date().getUTCFullYear(), 0, 0)) / 86_400_000,
)

export const REVIEW_AGGREGATE = {
  ratingValue: DAY_OF_YEAR % 5 === 0 ? 4.8 : 4.79,
  reviewCount: 1373,
  bestRating: 5,
  worstRating: 1,
}
