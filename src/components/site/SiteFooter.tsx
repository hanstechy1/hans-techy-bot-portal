import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">{SITE.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            A fast, reliable WhatsApp bot. Get your pair code and deploy in minutes.
          </p>
        </div>
        <div className="flex flex-col gap-2 font-mono text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <Link to="/about" className="text-muted-foreground hover:text-primary">About</Link>
          <Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <Mail className="h-4 w-4" /> {SITE.email}
          </a>
          <a href={SITE.phoneHref} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
