import { Kicker } from "@/components/ui";

const frameworks = [
  { name: "PwC", label: "Flywheel" },
  { name: "AWS", label: "Working Backward" },
  { name: "Gartner", label: "4 Pillar" },
  { name: "BCG", label: "Stairway" },
  { name: "Merkle", label: "Value Model" },
];

const regulators = ["ICO", "DSIT", "CDEI"];

export function TrustSignals() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <Kicker>Trusted Foundations</Kicker>
        <h2 className="text-[clamp(24px,3vw,32px)] leading-[1.15] mb-10">
          Built on frameworks that work
        </h2>

        <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
          {frameworks.map((f) => (
            <div
              key={f.name}
              className="px-5 py-3 rounded-lg bg-card border border-border text-center min-w-[120px] transition-all hover:border-accent/30 hover:bg-accent/[0.04]"
            >
              <div className="text-sm font-black text-foreground">{f.name}</div>
              <div className="text-xs text-muted mt-0.5">{f.label}</div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted">
          Regulatory alignment:{" "}
          {regulators.map((r, i) => (
            <span key={r}>
              <span className="text-foreground font-medium">{r}</span>
              {i < regulators.length - 1 && " \u00B7 "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
