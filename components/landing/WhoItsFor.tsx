import { Kicker, GlassPanel, ImageSection } from "@/components/ui";

const personas = [
  { role: "CFO", question: "\u201cWhere\u2019s the ROI?\u201d" },
  { role: "COO", question: "\u201cWhich processes to target?\u201d" },
  { role: "CTO", question: "\u201cHow do we evaluate AI tools?\u201d" },
  { role: "CEO", question: "\u201cIs this strategic or noise?\u201d" },
];

const sectors = ["Retail", "Finance", "Healthcare", "Professional Services"];

export function WhoItsFor() {
  return (
    <ImageSection bgImage="/hand.png" id="who-for">
      <GlassPanel className="p-[60px] max-lg:p-9">
        <div className="text-center mb-10">
          <Kicker>Who It&rsquo;s For</Kicker>
          <h2 className="text-[clamp(24px,3vw,32px)] leading-[1.15]">
            For leaders who need a path they can defend
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {personas.map((p) => (
            <div
              key={p.role}
              className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-6 text-center transition-all hover:bg-accent/[0.06] hover:border-accent/[0.15]"
            >
              <div className="w-12 h-12 rounded-full bg-accent/[0.12] border border-accent/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-sm font-black text-accent">{p.role}</span>
              </div>
              <p className="text-sm text-muted italic leading-snug">{p.question}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-muted">
            Typical company: <span className="text-foreground font-medium">&pound;10M&ndash;&pound;500M revenue</span>
          </p>
          <p className="text-sm text-muted">
            Sectors:{" "}
            {sectors.map((s, i) => (
              <span key={s}>
                <span className="text-foreground font-medium">{s}</span>
                {i < sectors.length - 1 && " \u00B7 "}
              </span>
            ))}
          </p>
        </div>
      </GlassPanel>
    </ImageSection>
  );
}
