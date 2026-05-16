import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { IndustriesSection } from "@/components/industries-section"
import { WhyUs } from "@/components/why-us"
import { BrandCloud } from "@/components/brand-cloud"
import { FounderSection } from "@/components/founder-section"
import { TeamGrid } from "@/components/team-grid"
import { CredentialsSection } from "@/components/credentials-section"
import { TrustedBy } from "@/components/trusted-by"
import { DispatchSection } from "@/components/dispatch-section"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { faqSchema } from "@/lib/seo"

const homepageFaqs = [
  {
    q: "What is your commercial service call cost?",
    a: "Our commercial service call is $89 and may be applied toward an approved repair.",
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
      <main className="pb-20 md:pb-0">
        <Hero locale="en" />
        <ServicesGrid locale="en" />
        <IndustriesSection locale="en" />
        <WhyUs locale="en" />
        <FounderSection locale="en" />
        <TeamGrid compact locale="en" />
        <BrandCloud locale="en" />
        <CredentialsSection locale="en" />
        <TrustedBy locale="en" />
        <DispatchSection locale="en" />
        <FAQSection
          faqs={homepageFaqs}
          title="Commercial repair questions"
          description="Common questions from restaurants, production facilities and enterprise clients."
        />
      </main>
      <SiteFooter locale="en" />
      <MobileCtaBar locale="en" />
      <JsonLd data={faqSchema(homepageFaqs)} />
    </>
  )
}
