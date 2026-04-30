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
    <section id="pricing" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Pricing
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transparent Pricing, No Surprises
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Choose the plan that works best for your business. Both include a professional, lead-generating website.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.popular 
                  ? "border-2 border-primary shadow-lg shadow-primary/10" 
                  : "border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -right-12 top-6 rotate-45 bg-primary px-12 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  {plan.popular && (
                    <Badge variant="secondary" className="gap-1 bg-primary/10 text-primary">
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
                  className={`w-full ${plan.popular ? "" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
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
