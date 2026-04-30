import { Paintbrush, Eye, Rocket, Settings } from "lucide-react"

const steps = [
  {
    icon: Paintbrush,
    step: "01",
    title: "We Design Your Site",
    description: "Tell us about your business and we'll create a custom homepage mockup—completely free, no obligation.",
  },
  {
    icon: Eye,
    step: "02",
    title: "You Review It",
    description: "Love it? Great! Want changes? We'll revise until it's perfect. Only pay when you're 100% happy.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "We Launch It",
    description: "Once approved, we build out your full site and get it live, usually within 2 weeks.",
  },
  {
    icon: Settings,
    step: "04",
    title: "We Handle Everything Ongoing",
    description: "Updates, hosting, maintenance, support—we take care of it all so you can focus on your business.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-gradient-to-b from-muted/60 to-transparent py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            How It Works
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Simple Process, Amazing Results
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Getting started is easy. We&apos;ve streamlined everything so you can have a new website without any stress.
          </p>
        </div>

        <div className="mt-14 lg:mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-primary/50 to-primary/10 lg:block" />
                )}
                
                <div className="relative flex flex-col items-center text-center">
                  {/* Step number and icon */}
                  <div className="relative">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-primary/20 bg-card shadow-lg transition-all hover:border-primary hover:shadow-xl">
                      <step.icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
