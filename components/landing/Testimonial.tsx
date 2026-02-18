import { GlassPanel } from "@/components/ui";

export function Testimonial() {
  return (
    <section className="py-20">
      <div className="max-w-[800px] mx-auto px-6">
        <GlassPanel className="p-12 max-md:p-8 text-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6 text-accent/30">
            <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <blockquote className="text-lg leading-relaxed text-foreground font-medium mb-6 max-w-[600px] mx-auto">
            Before this, we had a list of AI ideas but no way to prioritise them
            with confidence. We committed to two initiatives with clear
            line-of-sight to margin improvement&mdash;and killed three that
            couldn&rsquo;t connect to outcomes.
          </blockquote>
          <cite className="text-sm text-muted not-italic">
            &mdash; Finance Director, UK Mid-Market Retailer
          </cite>
        </GlassPanel>
      </div>
    </section>
  );
}
