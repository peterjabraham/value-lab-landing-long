import Link from "next/link";
import { Nav, Footer } from "@/components/landing";

export default function CaseLibraryPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h1 className="text-3xl mb-4">Case Library</h1>
          <p className="text-lg text-muted mb-8">
            200+ verified AI case studies structured by sector, function, and value driver. Coming soon.
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
