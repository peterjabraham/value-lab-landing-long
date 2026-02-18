import { Kicker, GlassPanel, ImageSection } from "@/components/ui";

const problems = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M12 8v4m0 4h.01" />
      </svg>
    ),
    title: "Wrong Bets",
    body: "Pilots that go nowhere. Money burned on theatre.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "No Evidence",
    body: "Can\u2019t find cases like yours to justify the investment.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Stuck in Pilots",
    body: "Experiments without the conviction to scale.",
  },
];

export function ProblemStatement() {
  return (
    <ImageSection bgImage="/brain.png">
      <GlassPanel className="p-[60px] max-lg:p-9">
        <div className="text-center mb-10">
          <Kicker>The Problem</Kicker>
          <h2 className="text-[clamp(26px,3.5vw,38px)] leading-[1.15] mb-3">
            You know AI could move the needle.
          </h2>
          <p className="text-xl text-muted">
            You just don&rsquo;t know where to start.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-7 transition-all hover:bg-accent/[0.06] hover:border-accent/[0.15] hover:-translate-y-0.5 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/[0.12] border border-accent/20 flex items-center justify-center mx-auto mb-4 text-accent">
                {p.icon}
              </div>
              <h3 className="text-lg font-black mb-2">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </GlassPanel>
    </ImageSection>
  );
}
