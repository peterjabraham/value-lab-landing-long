import Link from "next/link";
import { Button, Kicker, GlassPanel, ImageSection, CheckIcon } from "@/components/ui";

const sectorChips = [
  { label: "Retail", count: 47 },
  { label: "Finance", count: 58 },
  { label: "Health", count: 34 },
  { label: "Prof Svc", count: 61 },
];

const phases = ["Scope", "Explore", "Commit", "Adopt"];

export function ThreeServices() {
  return (
    <ImageSection bgImage="/heart.png">
      <GlassPanel className="p-[60px] max-lg:p-9">
        <div className="text-center mb-10">
          <Kicker>Our Services</Kicker>
          <h2 className="text-[clamp(26px,3.5vw,38px)] leading-[1.15]">
            Three ways we get you to certainty
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {/* Service 1: Governance */}
          <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-8 transition-all hover:border-accent/[0.15]">
            <div className="flex items-start gap-5 max-md:flex-col">
              <div className="w-10 h-10 rounded-md bg-accent/[0.15] border border-accent/30 flex items-center justify-center shrink-0 text-accent font-black text-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black mb-1">Check Your Governance</h3>
                <p className="text-sm text-muted mb-5">
                  Is your AI policy fit for ICO, DSIT, and CDEI? Free compliance score in 60 seconds.
                </p>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-sm font-bold text-accent font-mono tabular-nums">38%</span>
                  <div className="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden max-w-[300px]">
                    <div className="h-full rounded-full bg-accent" style={{ width: "38%" }} />
                  </div>
                  <span className="text-xs text-muted">6 Partial | 2 Gaps</span>
                </div>
                <Link href="/policy-check">
                  <Button variant="secondary">
                    Check your policy <span className="ml-1">&rarr;</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2: Case Library */}
          <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-8 transition-all hover:border-accent/[0.15]">
            <div className="flex items-start gap-5 max-md:flex-col">
              <div className="w-10 h-10 rounded-md bg-accent/[0.15] border border-accent/30 flex items-center justify-center shrink-0 text-accent font-black text-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black mb-1">Find What&rsquo;s Working</h3>
                <p className="text-sm text-muted mb-5">
                  200+ verified AI case studies. Structured by sector, function, and value driver. Evidence you can use.
                </p>
                <div className="flex gap-3 mb-5 flex-wrap">
                  {sectorChips.map((chip) => (
                    <div
                      key={chip.label}
                      className="px-4 py-2 rounded-md bg-white/[0.04] border border-white/[0.06] text-center min-w-[80px]"
                    >
                      <div className="text-xs text-muted">{chip.label}</div>
                      <div className="text-lg font-black font-mono tabular-nums text-foreground">
                        {chip.count}
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/case-library">
                  <Button variant="secondary">
                    Browse case studies <span className="ml-1">&rarr;</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 3: Value Roadmap (Primary) */}
          <div className="bg-accent/[0.06] border border-accent/[0.2] rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent" />
            <div className="flex items-start gap-5 max-md:flex-col">
              <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center shrink-0 text-black font-black text-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black mb-1">Build Your Roadmap</h3>
                <p className="text-sm text-muted mb-5">
                  From confusion to a defensible plan. Our structured process takes you from ambiguity to a board-ready business case.
                </p>

                {/* Phase flow */}
                <div className="flex items-center gap-0 mb-5 flex-wrap">
                  {phases.map((phase, i) => (
                    <div key={phase} className="flex items-center">
                      <div className="px-4 py-2 rounded-md bg-white/[0.06] border border-white/[0.08] text-sm font-bold text-foreground">
                        {phase}
                      </div>
                      {i < phases.length - 1 && (
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="text-accent/50 shrink-0 mx-1">
                          <path d="M0 6h16m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>

                {/* Commitment statement */}
                <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-5 mb-5">
                  <p className="text-sm text-muted italic leading-relaxed">
                    &ldquo;We are committing to this AI initiative on the basis that it will change{" "}
                    <span className="text-accent font-medium not-italic">[process]</span>, in order to change{" "}
                    <span className="text-accent font-medium not-italic">[metric]</span>, in order to change{" "}
                    <span className="text-accent font-medium not-italic">[P&amp;L]</span>&rdquo;
                  </p>
                </div>

                <Link href="/diagnostic">
                  <Button>
                    Start with a 5-minute diagnostic <span className="ml-1">&rarr;</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </GlassPanel>
    </ImageSection>
  );
}
