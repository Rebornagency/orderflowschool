import HeroSection from "@/components/HeroSection";
import TransformationSection from "@/components/TransformationSection";
import ValueSection from "@/components/ValueSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import TradersSection from "@/components/TradersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import StickyBottomBar from "@/components/StickyBottomBar";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TransformationSection />
      <ValueSection />
      <OfferSection />
      <GuaranteeSection />
      <TradersSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <StickyBottomBar />
    </main>
  );
};

export default Index;
