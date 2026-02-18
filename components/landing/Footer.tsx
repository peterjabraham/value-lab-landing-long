import Link from "next/link";

const serviceLinks = [
  { label: "Policy Check", href: "/policy-check" },
  { label: "Case Library", href: "/case-library" },
  { label: "Value Roadmap", href: "/value-roadmap" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Resources", href: "/case-library" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-accent rounded-sm flex items-center justify-center text-xs font-black text-black">
                V
              </div>
              <span className="text-base font-black tracking-tight text-foreground">
                Value Lab AI
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              A Goal Atlas &times; weareCrank partnership
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">Services</h4>
            <ul className="space-y-2 list-none">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted no-underline hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">Company</h4>
            <ul className="space-y-2 list-none">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted no-underline hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">Contact</h4>
            <ul className="space-y-2 list-none">
              <li>
                <a
                  href="mailto:hello@valuelabai.com"
                  className="text-sm text-accent no-underline hover:underline"
                >
                  hello@valuelabai.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted no-underline hover:text-foreground transition-colors"
                >
                  Book a call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Value Lab AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
