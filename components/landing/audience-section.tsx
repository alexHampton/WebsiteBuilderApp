import { Wrench, Wind, Home, Zap, HardHat, Building2 } from "lucide-react"

const businesses = [
  { icon: Wrench, name: "Plumbers", description: "Emergency & residential plumbing" },
  { icon: Wind, name: "HVAC", description: "Heating & cooling services" },
  { icon: Home, name: "Roofing", description: "Roof repair & installation" },
  { icon: Zap, name: "Electricians", description: "Residential & commercial electrical" },
  { icon: HardHat, name: "Contractors", description: "General contracting services" },
  { icon: Building2, name: "Home Services", description: "Remodeling & renovations" },
]

export function AudienceSection() {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-transparent py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Who We Serve
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for Local Service Businesses
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            We specialize in websites for trades and home service professionals. We understand your business and your customers.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businesses.map((business, index) => (
            <div 
              key={index} 
              className="group flex items-center gap-4 rounded-xl border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <business.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{business.name}</h3>
                <p className="text-sm text-muted-foreground">{business.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Don&apos;t see your business type?{" "}
            <a href="#" className="font-medium text-primary underline-offset-4 hover:underline">
              Contact us
            </a>
            {" "}— we work with all types of local service businesses.
          </p>
        </div>
      </div>
    </section>
  )
}
