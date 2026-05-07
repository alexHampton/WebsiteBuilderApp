import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { AudienceSection } from "@/components/landing/audience-section"
import { FAQSection } from "@/components/landing/faq-section"
import { LeadFormSection } from "@/components/landing/lead-form-section"
import { FinalCTASection } from "@/components/landing/final-cta-section"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://callforge.com"
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Call Forge",
  url: siteUrl,
  telephone: "+1-555-123-4567",
  email: "info@getcallforge.com",
  areaServed: "United States",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dayton",
    addressRegion: "OH",
    addressCountry: "US",
  },
  description:
    "Done-for-you website design, hosting, and ongoing support for local service businesses.",
  serviceType: [
    "Website design",
    "Website hosting",
    "Website maintenance",
    "Lead generation website optimization",
  ],
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main className="relative isolate flex-1 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.16),_transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-[38rem] -z-10 h-[28rem] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.08),_transparent_65%)]" />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <PricingSection />
        <AudienceSection />
        <section id="faq">
          <FAQSection />
        </section>
        <LeadFormSection />
        <FinalCTASection />
      </main>
      <Footer />

      <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
        <div className="flex items-center gap-2 rounded-2xl border border-white/70 bg-background/95 p-2 shadow-2xl backdrop-blur-xl">
          <Button asChild size="sm" className="h-10 flex-1 rounded-xl bg-linear-to-r from-primary to-accent text-primary-foreground">
            <a href="#lead-form">Get Free Mockup</a>
          </Button>
          {/* <Button asChild size="sm" variant="outline" className="h-10 rounded-xl border-white/70 bg-white/80 px-4">
            <a href="tel:+15551234567" aria-label="Call now">
              <Phone className="h-4 w-4" />
            </a>
          </Button> */}
        </div>
      </div>
    </div>
  )
}
