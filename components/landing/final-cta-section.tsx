"use client"

import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-[3.5rem] lg:leading-[1.05]">
            Stop Losing Jobs Because of a Weak Website
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-primary-foreground/80">
            Your competitors are getting the calls that should be coming to you. A professional website isn&apos;t a luxury anymore—it&apos;s how your customers find and trust you.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              variant="secondary" 
              className="group gap-2 text-base shadow-lg transition-all hover:shadow-xl"
            >
              Get My Free Mockup
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 border-primary-foreground/30 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" />
              Schedule a Call
            </Button>
          </div>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              Free mockup, no obligation
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              Ready in 48 hours
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              No credit card required
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
