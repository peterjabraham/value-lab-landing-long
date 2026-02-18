import Link from "next/link";
import { Button, GlassPanel } from "@/components/ui";

export function FinalCTA() {
  return (
    <section className="py-[100px]">
      <div className="max-w-[800px] mx-auto px-6">
        <GlassPanel className="p-[72px] max-md:p-12 text-center">
          <h2 className="text-[clamp(26px,3.5vw,40px)] leading-[1.15] mb-4">
            Not sure where to start?
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-[500px] mx-auto mb-9">
            Take our 5-minute diagnostic. We&rsquo;ll show you where your
            biggest AI opportunities are&mdash;and what&rsquo;s blocking them.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/diagnostic">
              <Button>Start diagnostic</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary">Book a call</Button>
            </Link>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
