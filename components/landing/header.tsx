"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full pt-4">
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/70 bg-background/75 px-4 shadow-[0_20px_50px_-35px_rgba(17,24,39,0.45)] backdrop-blur-xl">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-accent text-primary-foreground shadow-sm">
              <span className="text-sm font-bold text-primary-foreground">CF</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">Call Forge</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground/90 transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Button asChild size="sm" className="shadow-sm shadow-primary/25">
              <a href="#lead-form">Get Free Mockup</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mt-2 rounded-2xl border border-white/70 bg-background/95 p-4 shadow-xl backdrop-blur md:hidden">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button asChild variant="outline" size="sm">
                  <a href="#lead-form">Talk to Sales</a>
                </Button>
                <Button asChild size="sm">
                  <a href="#lead-form">Get Free Mockup</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
