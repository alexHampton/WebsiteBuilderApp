import { Check, Paintbrush, Server, RefreshCw, Target } from "lucide-react"

const benefits = [
  {
    icon: Paintbrush,
    title: "We build it",
    description: "Custom designed to showcase your business and convert visitors into customers.",
  },
  {
    icon: Server,
    title: "We host it",
    description: "Fast, secure hosting included. No technical headaches or extra costs.",
  },
  {
    icon: RefreshCw,
    title: "We update it",
    description: "Need changes? Just ask. Unlimited small edits included in your plan.",
  },
  {
    icon: Target,
    title: "We optimize it for leads",
    description: "Strategic design focused on getting your phone to ring more often.",
  },
]

export function SolutionSection() {
  return (
    <section className="bg-linear-to-b from-primary/5 via-primary/3 to-transparent py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              The Solution
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              A Better Way to Handle Your Website
            </h2>
            <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              Forget expensive agencies, confusing DIY builders, or outdated templates. Our subscription model gives you a professional website with none of the hassle.
            </p>
            
            <div className="space-y-4 pt-2">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 rounded-lg border bg-card p-4 transition-all hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right content - Visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main card */}
              <div className="rounded-[1.75rem] border bg-card p-8 shadow-xl shadow-primary/10">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-foreground">One Simple Subscription</h3>
                  <p className="mt-2 text-muted-foreground">
                    Everything you need, nothing you don&apos;t
                  </p>
                </div>
                
                <div className="mt-8 space-y-3">
                  {[
                    "Professional website design",
                    "Mobile-responsive layout",
                    "Fast & secure hosting",
                    "Unlimited small edits",
                    "Ongoing maintenance",
                    "Lead-focused optimization",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 rounded-lg bg-primary/5 p-4 text-center">
                  <div className="text-sm text-muted-foreground">Starting at just</div>
                  <div className="text-3xl font-bold text-primary">$197/month</div>
                  <div className="text-sm text-muted-foreground">$0 upfront</div>
                </div>
              </div>
              
              {/* Floating badge */}
              {/* <div className="absolute -bottom-4 -right-4 rounded-lg border bg-card px-4 py-2 shadow-lg">
                <div className="text-xs text-muted-foreground">Customer satisfaction</div>
                <div className="font-bold text-primary">98% Happy Clients</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
