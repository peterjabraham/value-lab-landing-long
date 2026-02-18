import Link from "next/link";
import { Button, Kicker, GlassPanel, ImageSection } from "@/components/ui";

const journeySteps = [
  { label: "Ambiguity", sub: "chaos" },
  { label: "Roadmap", sub: "clarity" },
  { label: "Pilot", sub: "proof" },
  { label: "Production", sub: "rollout" },
  { label: "Scale", sub: "portfolio" },
];

export function Hero() {
  return (
    <ImageSection bgImage="/laptop.png" className="pt-[160px]">
      <GlassPanel className="p-[60px] max-lg:p-9">
        <div className="max-w-[720px] mx-auto text-center">
          <Kicker>A certain path from pilots to production</Kicker>
          <h1 className="text-[clamp(34px,4.5vw,52px)] leading-[1.08] mb-5">
            Turn AI into measured value,{" "}
            <span className="bg-gradient-to-br from-accent to-[#8BB4FF] bg-clip-text text-transparent">
              safely.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-muted mb-8 max-w-[560px] mx-auto">
            Roadmaps, governance, delivery&mdash;without the theatre.
          </p>

          <div className="flex gap-3 items-center justify-center flex-wrap mb-12">
            <Link href="/policy-check">
              <Button variant="secondary">Check your AI policy</Button>
            </Link>
            <Link href="/case-library">
              <Button variant="secondary">Explore what&rsquo;s working</Button>
            </Link>
            <Link href="/diagnostic">
              <Button>
                Start diagnostic{" "}
                <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Journey progress bar */}
        <div className="flex items-start justify-center gap-0 max-w-[700px] mx-auto">
          {journeySteps.map((step, i) => (
            <div key={step.label} className="flex items-start">
              <div className="flex flex-col items-center text-center min-w-[100px]">
                <div className="w-3 h-3 rounded-full bg-accent border-2 border-accent shadow-[0_0_12px_var(--accent-glow)]" />
                <span className="text-sm font-semibold text-foreground mt-2">
                  {step.label}
                </span>
                <span className="text-xs text-muted">{step.sub}</span>
              </div>
              {i < journeySteps.length - 1 && (
                <div className="h-px w-8 bg-accent/40 mt-1.5 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </GlassPanel>
    </ImageSection>
  );
}
