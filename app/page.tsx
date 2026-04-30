import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { AudienceSection } from "@/components/landing/audience-section"
import { FAQSection } from "@/components/landing/faq-section"
import { FinalCTASection } from "@/components/landing/final-cta-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
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
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
