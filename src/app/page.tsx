import { Hero } from "@/components/home/hero";
import { CredibilityStrip } from "@/components/home/credibility-strip";
import { PainPoints } from "@/components/home/pain-points";
import { Solution } from "@/components/home/solution";
import { CoverageCards } from "@/components/home/coverage-cards";
import { HowItWorks } from "@/components/home/how-it-works";
import { WaitlistSection } from "@/components/home/waitlist-section";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <PainPoints />
      <Solution />
      <CoverageCards />
      <HowItWorks />
      <WaitlistSection />
    </>
  );
}
