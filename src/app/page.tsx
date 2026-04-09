import { HeroSection } from "@/components/sections/hero-section";
import { PlatformSection } from "@/components/sections/platform-section";
import { ServicesPreviewSection } from "@/components/sections/services-preview-section";
import { ProductHighlightSection } from "@/components/sections/product-highlight-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <PlatformSection />
      <ServicesPreviewSection />
      <ProductHighlightSection />
      <WhyChooseUsSection />
      <CTASection />
    </main>
  );
}
