import { HeroSection } from "@/components/sections/hero-section";
import { PlatformSection } from "@/components/sections/platform-section";
import { ServicesPreviewSection } from "@/components/sections/services-preview-section";
import { ProductHighlightSection } from "@/components/sections/product-highlight-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { TechnologySlider } from "@/components/sections/technology-slider";
import { CTASection } from "@/components/sections/cta-section";
import { homeFeaturedTechnologies } from "@/data/technologies";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <PlatformSection />
      <ServicesPreviewSection />
      <ProductHighlightSection />
      <WhyChooseUsSection />
      <TechnologySlider
        eyebrow="ECOSYSTEM"
        title="Technologies We Work With"
        items={homeFeaturedTechnologies}
        variant="compact"
      />
      <CTASection />
    </main>
  );
}
