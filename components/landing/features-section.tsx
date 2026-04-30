import { Smartphone, Zap, Search, Edit, Server, Headphones } from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Looks perfect on every device. Your customers can find you whether they're on desktop, tablet, or phone.",
  },
  {
    icon: Zap,
    title: "Fast Loading",
    description: "Lightning-fast load times keep visitors engaged. Slow sites lose customers—we make sure yours flies.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Structure",
    description: "Built from the ground up for search engines. Help local customers find you when they need you most.",
  },
  {
    icon: Edit,
    title: "Unlimited Small Edits",
    description: "Need to change your hours, add a service, or update photos? Just ask, and we'll handle it.",
  },
  {
    icon: Server,
    title: "Hosting Included",
    description: "Secure, reliable hosting with 99.9% uptime. No extra bills or technical headaches.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Have questions? We're here to help. Real humans, real support, whenever you need it.",
  },
]

export function FeaturesSection() {
  return (
    <section className="border-t border-border/60 py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Features
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Everything You Need, Nothing You Don&apos;t
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            We&apos;ve thought of everything so you don&apos;t have to. Focus on your work while we handle your web presence.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl border border-white/70 bg-card/80 p-6 shadow-[0_14px_45px_-38px_rgba(17,24,39,0.85)] backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_24px_60px_-35px_rgba(79,70,229,0.45)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 to-accent/15 text-primary transition-colors group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
