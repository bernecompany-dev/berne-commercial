import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { SectionHeading } from "./section-heading"

export type Faq = { q: string; a: string }

export function FAQSection({
  faqs,
  eyebrow = "FAQ",
  title = "Commercial service questions",
  description,
}: {
  faqs: Faq[]
  eyebrow?: string
  title?: string
  description?: string
}) {
  return (
    <section className="border-b border-border/60 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />
        <Accordion className="mt-12">
          {faqs.map((f, i) => (
            <AccordionItem key={i}>
              <AccordionTrigger className="text-left text-base font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
