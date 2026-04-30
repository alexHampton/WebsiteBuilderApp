import { AlertTriangle, Smartphone, TrendingDown, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const problems = [
  {
    icon: AlertTriangle,
    title: "Outdated Website",
    description: "Your website looks like it was built 10 years ago. First impressions matter, and you're losing customers before they even call.",
  },
  {
    icon: Smartphone,
    title: "Not Mobile-Friendly",
    description: "70% of your potential customers are searching on their phones. If your site doesn't work on mobile, they'll call your competitor.",
  },
  {
    icon: TrendingDown,
    title: "Not Getting Leads",
    description: "You have a website, but the phone isn't ringing. Your site isn't converting visitors into actual customers.",
  },
  {
    icon: Settings,
    title: "Hard to Manage",
    description: "Every small update requires calling someone or learning complicated software. You don't have time for that.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Sound Familiar?
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Is Your Website Holding You Back?
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Most local service business websites have these same problems. The good news? They&apos;re all fixable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="group border-2 border-transparent bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10 text-destructive transition-colors group-hover:bg-destructive group-hover:text-white">
                  <problem.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{problem.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
