"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Smartphone, BarChart3, Phone, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-26">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute inset-x-0 top-20 h-72 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.14),_transparent_65%)]" />
      
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
          {/* Left content */}
          <div className="flex flex-col gap-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Trusted by 500+ local businesses
            </div>
            
            <div className="space-y-5">
              <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[4.2rem] lg:leading-[1.02]">
                Get a Website That Actually{" "}
                <span className="text-primary">Brings You More Calls</span>
              </h1>
              
              <p className="max-w-xl text-pretty text-lg leading-8 text-muted-foreground lg:text-xl">
                No upfront cost. We build and manage everything. You focus on running your business while we handle your online presence.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Button size="lg" className="group h-11 gap-2 rounded-lg bg-linear-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/35">
                Get a Free Homepage Mockup
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="h-11 gap-2 rounded-lg border-white/70 bg-white/80 shadow-sm backdrop-blur hover:bg-white">
                <Play className="h-4 w-4" />
                View Example
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
                Free mockup in 48 hours
              </div>
            </div>
          </div>
          
          {/* Right content - Website mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              {/* Browser frame */}
              <div className="rounded-[1.75rem] border border-white/70 bg-card/90 shadow-[0_45px_95px_-50px_rgba(79,70,229,0.55)] backdrop-blur-xl">
                {/* Browser header */}
                <div className="flex items-center gap-2 border-b px-5 py-4">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 rounded-md bg-muted px-3 py-1 text-center text-xs text-muted-foreground">
                    yourcompany.com
                  </div>
                </div>
                
                {/* Website preview */}
                <div className="p-5">
                  {/* Mini nav */}
                  <div className="flex items-center justify-between pb-4">
                    <div className="font-semibold tracking-tight text-primary">PlumbRight Pro</div>
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <span>Services</span>
                      <span>About</span>
                      <span>Reviews</span>
                    </div>
                  </div>
                  
                  {/* Hero preview */}
                  <div className="rounded-xl bg-linear-to-r from-primary/10 to-accent/10 p-6">
                    <div className="text-sm font-semibold text-foreground">24/7 Emergency Plumbing</div>
                    <div className="mt-1 text-xs text-muted-foreground">Fast, reliable service you can trust</div>
                    <div className="mt-3 inline-flex rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
                      Call Now
                    </div>
                  </div>
                  
                  {/* Stats preview */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-lg border bg-card p-3 text-center">
                      <div className="text-lg font-bold text-primary">500+</div>
                      <div className="text-xs text-muted-foreground">Jobs Done</div>
                    </div>
                    <div className="rounded-lg border bg-card p-3 text-center">
                      <div className="text-lg font-bold text-primary">4.9★</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                    <div className="rounded-lg border bg-card p-3 text-center">
                      <div className="text-lg font-bold text-primary">15+</div>
                      <div className="text-xs text-muted-foreground">Years</div>
                    </div>
                  </div>
                  
                  {/* Contact preview */}
                  <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      (555) 123-4567
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Denver, CO
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-lg border border-white/80 bg-card/90 px-3 py-2 shadow-lg backdrop-blur">
                <Smartphone className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Mobile Optimized</span>
              </div>
              
              <div className="absolute -right-4 -top-4 flex items-center gap-2 rounded-lg border border-white/80 bg-card/90 px-3 py-2 shadow-lg backdrop-blur">
                <BarChart3 className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">+127% More Leads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
