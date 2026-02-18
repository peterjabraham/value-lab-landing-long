import Link from "next/link";
import { Nav, Footer } from "@/components/landing";

export default function ValueRoadmapPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h1 className="text-3xl mb-4">Value Roadmap</h1>
          <p className="text-lg text-muted mb-8">
            From ambiguity to a board-ready business case. A structured, evidence-based process. Coming soon.
          </p>
          <Link href="/" className="text-accent text-sm no-underline hover:underline">
            &larr; Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
