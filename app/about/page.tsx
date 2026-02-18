import Link from "next/link";
import { Nav, Footer } from "@/components/landing";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h1 className="text-3xl mb-4">About Value Lab AI</h1>
          <p className="text-lg text-muted mb-8">
            A Goal Atlas &times; weareCrank partnership helping organisations
            turn AI ambition into measurable value. Coming soon.
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
