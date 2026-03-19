"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { label: "AI Policy Check", href: "/policy-check" },
  { label: "Case Library", href: "/case-library" },
  { label: "Value Roadmap", href: "/value-roadmap" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] py-4 transition-all duration-300",
        scrolled &&
          "bg-background/[0.92] backdrop-blur-[20px] border-b border-foreground/[0.04]"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 no-underline"
          >
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-sm font-black text-black">
              V
            </div>
            <span className="text-lg font-black tracking-tight text-foreground">
              AIValueWorx
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-7 list-none">
            {/* Services dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-muted text-sm font-medium hover:text-foreground transition-colors flex items-center gap-1"
              >
                Services
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={cn("transition-transform", servicesOpen && "rotate-180")}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-card border border-border rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-muted hover:text-foreground hover:bg-white/[0.04] transition-colors no-underline"
                      onClick={() => setServicesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li>
              <Link
                href="/about"
                className="text-muted no-underline text-sm font-medium hover:text-foreground transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/case-library"
                className="text-muted no-underline text-sm font-medium hover:text-foreground transition-colors"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="bg-accent text-black px-5 py-2 rounded-md font-semibold text-sm no-underline hover:opacity-90 hover:-translate-y-px transition-all"
              >
                Book a Call
              </Link>
            </li>
          </ul>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-foreground/[0.06] pt-4 flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-muted/60 px-1">Services</p>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted no-underline text-sm font-medium hover:text-foreground transition-colors pl-3"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-foreground/[0.06] my-1" />
            <Link href="/about" className="text-muted no-underline text-sm font-medium hover:text-foreground" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/case-library" className="text-muted no-underline text-sm font-medium hover:text-foreground" onClick={() => setMobileOpen(false)}>Resources</Link>
            <Link
              href="/contact"
              className="bg-accent text-black px-5 py-2 rounded-md font-semibold text-sm no-underline text-center hover:opacity-90 transition-all mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
