"use client"

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Done-For-You Plan",
    popular: true,
    price: "$197",
    period: "/month",
    description: "Everything handled for you. Just focus on your business.",
    features: [
      "$0 upfront cost",
      "Full website included",
      "Hosting + maintenance",
      "Unlimited small edits",
      "Ongoing support",
      "SEO-friendly structure",
      "Mobile optimized design",
    ],
    note: "12-month minimum commitment",
    cta: "Get Started Today",
  },
  {
    name: "One-Time Build",
    popular: false,
    price: "$2,500",
    period: "",
    description: "Own your website outright. Perfect if you prefer one-time payments.",
    features: [
      "Full website build",
      "You own everything",
      "One month of support",
      "Hosting setup assistance",
      "SEO-friendly structure",
      "Mobile optimized design",
    ],
    note: "No ongoing support included",
    cta: "Request Quote",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="border-t border-border/60 py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Pricing
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Transparent Pricing, No Surprises
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Choose the plan that works best for your business. Both include a professional, lead-generating website.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:mt-16 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden bg-card/85 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.95)] backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_34px_75px_-40px_rgba(79,70,229,0.55)] ${
                plan.popular 
                  ? "border-2 border-primary/60" 
                  : "border border-white/70"
              }`}
            >
              {plan.popular && (
                <div className="absolute -right-12 top-6 rotate-45 bg-linear-to-r from-primary to-accent px-12 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  {plan.popular && (
                    <Badge variant="secondary" className="gap-1 border border-primary/20 bg-primary/10 text-primary">
                      <Star className="h-3 w-3 fill-current" />
                      Best Value
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-xs text-muted-foreground">{plan.note}</p>
                
                <Button 
                  className={`h-11 w-full rounded-lg ${plan.popular ? "bg-linear-to-r from-primary to-accent text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Not sure which plan is right for you?{" "}
          <a href="#" className="font-medium text-primary underline-offset-4 hover:underline">
            Schedule a free consultation
          </a>
        </p>
      </div>
    </section>
  )
}
