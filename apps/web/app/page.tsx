import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { IndustriesSection } from "@/components/industries-section"
import { WhyUs } from "@/components/why-us"
import { HowItWorks } from "@/components/how-it-works"
import { BrandCloud } from "@/components/brand-cloud"
import { CompareTeaser } from "@/components/compare-teaser"
import { ServiceMapTeaser } from "@/components/service-map-teaser"
import { FounderSection } from "@/components/founder-section"
import { TeamGrid } from "@/components/team-grid"
import { CredentialsSection } from "@/components/credentials-section"
import { TrustedBy } from "@/components/trusted-by"
import { ReviewsSection } from "@/components/reviews-section"
import { DispatchSection } from "@/components/dispatch-section"
import { ServiceAreasLinks } from "@/components/service-areas-links"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { faqSchema, founderSchema, personJsonLd } from "@/lib/seo"
import { team } from "@/lib/data/team"

const homepageFaqs = [
  {
    q: "What is your commercial service call cost?",
    a: "Our commercial service call is $89 — and it is free if you approve the repair: you only pay the fee if you decide not to proceed.",
  },
  {
    q: "Do you offer emergency same-day commercial repair?",
    a: "Yes — we run emergency dispatch across Miami-Dade, Broward and Palm Beach. Refrigeration outages and food-safety-critical equipment are prioritized.",
  },
  {
    q: "What commercial equipment do you service?",
    a: "Commercial refrigeration (walk-ins, reach-ins, prep tables, deep freeze), ice machines, fryers, ovens, ranges, steamers, commercial laundry, garbage disposals and trash compactors.",
  },
  {
    q: "What brands do you service?",
    a: "Hoshizaki, Manitowoc, Scotsman, Turbo Air, True, Traulsen, Beverage-Air, Continental, Delfield, Vulcan, Hobart, Rational, Blodgett, Garland, Southbend, Cleveland, Pitco, Frymaster, Middleby, Alto-Shaam, Hatco, Electrolux Professional, Speed Queen, Whirlpool Commercial, Maytag Commercial and more.",
  },
  {
    q: "Do you support multi-location and chain accounts?",
    a: "Yes. We onboard chains, franchises and property-managed buildings with COI, vendor portals, and multi-location reporting. Visit the Become a Client page to get started.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Berne Commercial Repair is licensed and insured for commercial service across South Florida.",
  },
]

export default function HomePage() {
  return (
    <>
      <SiteNavbar locale="en" />
      {/* Section order: the dispatch form (the page's reason to exist) sits
          right after the core pitch instead of 13th; the trust stack does its
          work below for skeptics who keep scrolling. TrustStrip removed — the
          hero highlight cards directly above made the same three claims. */}
      <main id="main" tabIndex={-1} className="pb-20 md:pb-0 focus:outline-none">
        <Hero locale="en" />
        <ServicesGrid locale="en" />
        <IndustriesSection locale="en" />
        <WhyUs locale="en" />
        <HowItWorks locale="en" />
        <DispatchSection locale="en" />
        <ReviewsSection locale="en" />
        <CredentialsSection locale="en" />
        <FounderSection locale="en" />
        <TeamGrid compact locale="en" />
        <BrandCloud locale="en" />
        <CompareTeaser />
        <TrustedBy locale="en" />
        <FAQSection
          faqs={homepageFaqs}
          title="Commercial repair questions"
          description="Common questions from restaurants, production facilities and enterprise clients."
        />
        <ServiceMapTeaser />
        <ServiceAreasLinks />
      </main>
      <SiteFooter locale="en" />
      <MobileCtaBar locale="en" />
      <JsonLd data={faqSchema(homepageFaqs)} />
      <JsonLd data={founderSchema()} />
      {/* Top-5 technician Person schema on the homepage — E-E-A-T signal. */}
      <JsonLd
        data={team
          .filter((t) => t.role !== "Founder & Operator")
          .slice(0, 5)
          .map((t) => personJsonLd(t))}
      />
    </>
  )
}
