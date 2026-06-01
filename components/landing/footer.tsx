import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#070b1a] py-14 text-slate-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-accent">
                <span className="text-sm font-bold text-primary-foreground">CF</span>
              </div>
              <span className="text-lg font-semibold text-white">Call Forge</span>
            </a>
            <p className="mt-4 max-w-md text-sm text-slate-400">
              Professional websites for local service businesses. We build, host, and manage everything so you can focus on what you do best.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {["Features", "Pricing", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={link === "Contact" ? "#lead-form" : `#${link.toLowerCase()}`} 
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white">Contact Us</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@getcallforge.com" className="hover:text-white">hello@getcallforge.com</a>
              </li>
              {/* <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="h-4 w-4" />
                <a href="tel:+15551234567" className="hover:text-white">(555) 123-4567</a>
              </li> */}
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4" />
                Dayton, Ohio
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Call Forge. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
