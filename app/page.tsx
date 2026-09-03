import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { StatsSection } from "@/components/landing/stats-section";
import { ComparisonSection } from "@/components/landing/comparison-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { BonusesSection } from "@/components/landing/bonuses-section";
import { ReviewsSection } from "@/components/landing/reviews-section";
import { SuccessStoriesSection } from "@/components/landing/success-stories-section";
import { FaqSection } from "@/components/landing/faq-section";
import { CommunitySection } from "@/components/landing/community-section";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <HowItWorks />
        <ReviewsSection />
        <ComparisonSection />
        <BonusesSection />
        <SuccessStoriesSection />
        <CommunitySection />
        <FinalCta />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
