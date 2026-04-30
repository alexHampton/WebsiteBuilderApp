"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function LeadFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

    const handleFormSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)
        setError(null)

        const form = event.currentTarget
        const formData = new FormData(form)

        const payload = {
            name: String(formData.get("name") || ""),
            phone: String(formData.get("phone") || ""),
            email: String(formData.get("email") || ""),
            preferredContact: String(formData.get("preferredContact") || ""),
            details: String(formData.get("details") || ""),
        }

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })

            if (!response.ok) {
                const data = (await response.json().catch(() => null)) as { error?: string } | null
                throw new Error(data?.error || "Something went wrong.")
            }

            form.reset()
            setSubmitted(true)
        } catch (submitError) {
            setError(
                submitError instanceof Error
                    ? submitError.message
                    : "Something went wrong while submitting the form.",
            )
        } finally {
            setIsSubmitting(false)
        }
    }

  return (
    <section id="lead-form" className="border-t border-border/60 py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Start Here
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Tell Us About Your Business
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Fill out this quick form and we&apos;ll send your free mockup plus a tailored recommendation.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/70 bg-card/85 p-6 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.95)] backdrop-blur sm:p-8">
          {submitted ? (
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground">Thanks, we got your request.</h3>
              <p className="mt-2 text-muted-foreground">
                We&apos;ll reach out based on your preferred contact method within 1 business day.
              </p>
            </div>
          ) : (
            <form
              className="grid gap-5"
              onSubmit={handleFormSubmit}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="lead-name">Full Name</Label>
                  <Input id="lead-name" name="name" placeholder="Jane Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lead-phone">Phone Number</Label>
                  <Input id="lead-phone" name="phone" placeholder="(555) 123-4567" required />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="lead-email">Email</Label>
                  <Input id="lead-email" name="email" type="email" placeholder="you@business.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lead-contact-method">Preferred Contact Method</Label>
                  <select
                    id="lead-contact-method"
                    name="preferredContact"
                    required
                    className="border-input focus-visible:border-ring focus-visible:ring-ring/50 h-9 w-full rounded-md border bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:ring-[3px]"
                    defaultValue=""
                  >
                    <option value="" disabled>Select one</option>
                    <option value="phone">Phone Call</option>
                    <option value="text">Text Message</option>
                    <option value="email">Email</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lead-details">More Information</Label>
                <Textarea
                  id="lead-details"
                  name="details"
                  placeholder="Tell us about your business, services, current website, and goals."
                  className="min-h-28"
                  required
                />
              </div>

              {error ? <p className="text-sm text-destructive">{error}</p> : null}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-11 rounded-lg bg-linear-to-r from-primary to-accent text-primary-foreground"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
