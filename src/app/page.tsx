import { HeroSection } from "@/components/sections/hero-section";
import { SocialProofBar } from "@/components/sections/social-proof-bar";
import { ImpactStatsSection } from "@/components/sections/impact-stats-section";
import { ServicesPreviewSection } from "@/components/sections/services-preview-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { ProductHighlightSection } from "@/components/sections/product-highlight-section";
import { TechnologySlider } from "@/components/sections/technology-slider";
import { InsightsSection } from "@/components/sections/insights-section";
import { CTASection } from "@/components/sections/cta-section";
import { homeFeaturedTechnologies } from "@/data/technologies";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <SocialProofBar />
      <ImpactStatsSection />
      <ServicesPreviewSection />
      <UseCasesSection />
      <ProductHighlightSection />
      <TechnologySlider
        eyebrow="ECOSYSTEM"
        title="Technologies We Work With"
        items={homeFeaturedTechnologies}
        variant="compact"
      />
      <InsightsSection />
      <CTASection />
    </main>
  );
}
