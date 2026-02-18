import {
  Nav,
  Hero,
  ProblemStatement,
  ThreeServices,
  TrustSignals,
  Testimonial,
  WhoItsFor,
  FinalCTA,
  Footer,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemStatement />
        <ThreeServices />
        <TrustSignals />
        <Testimonial />
        <WhoItsFor />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
