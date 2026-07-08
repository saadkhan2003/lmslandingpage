import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { TrustStrip } from "@/components/landing/trust-strip";
import { StatsSection } from "@/components/landing/stats-section";
import { ResultsSection } from "@/components/landing/results-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { ReviewsSection } from "@/components/landing/reviews-section";
import { WhyJoinSection } from "@/components/landing/why-join-section";
import { ComparisonSection } from "@/components/landing/comparison-section";
import { BonusesSection } from "@/components/landing/bonuses-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { RiskFreeSection } from "@/components/landing/risk-free-section";
import { CourseOutline } from "@/components/landing/course-outline";
import { FaqsSection } from "@/components/landing/faqs-section";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustStrip />
        <StatsSection />
        <ResultsSection />
        <HowItWorks />
        <ReviewsSection />
        <WhyJoinSection />
        <ComparisonSection />
        <BonusesSection />
        <PricingSection />
        <RiskFreeSection />
        <CourseOutline />
        <FaqsSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
