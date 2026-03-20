import Link from "next/link";
import { Nav, Footer } from "@/components/landing";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h1 className="text-3xl mb-4">Book a Call</h1>
          <p className="text-lg text-muted mb-8">
            Calendly booking embed will go here. In the meantime, reach us at{" "}
            <a href="mailto:hello@aivalueworx.com" className="text-accent no-underline hover:underline">
              hello@aivalueworx.com
            </a>
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
