import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to get my website live?",
    answer: "Once you approve your free mockup, we typically have your full website live within 2 weeks. Simple sites can be faster, more complex ones may take a bit longer. We'll give you a specific timeline during our kickoff call.",
  },
  {
    question: "Can I request changes to my website?",
    answer: "Absolutely! With our Done-For-You Plan, unlimited small edits are included. Need to update your hours, add a new service, change photos, or tweak text? Just send us an email and we'll handle it, usually within 1-2 business days.",
  },
  {
    question: "What happens after the 12-month commitment?",
    answer: "After your initial 12 months, you can continue month-to-month at the same rate, switch to annual billing for a discount, or cancel anytime with 30 days notice. You'll always have the option to purchase your site outright if you want to take it in-house.",
  },
  {
    question: "Do I need to provide all the content?",
    answer: "Nope! While we love when clients share their own photos and specific details, we can work with whatever you have. We'll help write compelling copy, source professional stock photos if needed, and guide you through providing the key info we need.",
  },
  {
    question: "What if I already have a website?",
    answer: "No problem! We can either redesign your existing site or build a fresh one from scratch. If you have content or elements you want to keep, just let us know. We can also help with domain transfer if you want everything in one place.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Since we provide a free mockup before any commitment, you'll know exactly what you're getting before you pay. However, if you're not satisfied within the first 30 days, we'll work with you to make it right or provide a prorated refund.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Got questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for, feel free to reach out.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border/50"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="#" className="font-medium text-primary underline-offset-4 hover:underline">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
