import { ArrowDown } from "lucide-react";
import bookCover from "@/assets/book-cover.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SocialProofBar from "./SocialProofBar";
import BeforeAfterGrid from "./BeforeAfterGrid";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const bookScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const bookZ = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3], [0.08, 0.15]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePrimaryCTA = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_cta_primary', {
        location: 'hero',
        cta_text: 'Get the Order Flow System Now'
      });
    }
    window.open('https://whop.com/checkout/plan_j28Me1PHZxPWU?d2c=true', '_blank');
  };

  const handleSecondaryCTA = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_cta_secondary', {
        location: 'hero',
        cta_text: 'Show Me the Operating System'
      });
    }
    scrollToSection('value');
  };

  return (
    <>
      <SocialProofBar />
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#210A0A] to-[#5C0C0C]">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.5"/%3E%3C/svg%3E")'
      }} />
      
      {/* Radial gold spotlight behind book */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F2C14E] rounded-full blur-[120px]"
          style={{ opacity: glowOpacity }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Copy */}
          <div className="text-center lg:text-left space-y-10">
            <h1 className="uppercase text-[clamp(42px,6vw,52px)] leading-[110%] tracking-[1.5px] text-primary-foreground font-bold">
              See What 99% of Traders Miss:{" "}
              <span className="text-[#F2C14E]">Master Order Flow</span>
            </h1>
            
            <div className="text-xl md:text-2xl leading-relaxed space-y-1">
              <p className="font-normal" style={{ color: '#F6EDE1' }}>
                Learn to trade like Wall Street.
              </p>
              <p className="font-semibold" style={{ color: '#F2C14E' }}>
                From Retail Confusion to Institutional Confidence.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 justify-center lg:justify-start pt-6">
              <button
                onClick={handlePrimaryCTA}
                className="h-[60px] w-full font-bold rounded-lg text-[#1C0A0A] text-base md:text-lg transition-all duration-300 hover:scale-[1.02] hover:brightness-110 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #E3C067 0%, #B38A28 100%)',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.15), 0 6px 30px rgba(242, 193, 78, 0.4), 0 0 60px rgba(242, 193, 78, 0.2)'
                }}
              >
                <span className="relative z-10">Get the Order Flow System Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
              
              <button
                onClick={handleSecondaryCTA}
                className="h-[60px] w-full bg-transparent border-2 border-[#F2C14E] text-[#F2C14E] hover:bg-[#F2C14E]/[0.15] font-bold rounded-lg text-base md:text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(242,193,78,0.3)]"
              >
                Show Me the Operating System →
              </button>
              
              {/* Divider and proof row */}
              <div className="mt-4 space-y-3">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#F2C14E]/30 to-transparent" />
                <div className="text-center text-[13px] tracking-wide" style={{ color: 'rgba(240, 232, 216, 0.7)' }}>
                  Complete System • Instant Access • 7-Day Guarantee
                </div>
              </div>
            </div>
            
            {/* Before/After Grid */}
            <BeforeAfterGrid />
          </div>
          
          {/* Right Column - Premium Book Display */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last mb-8 lg:mb-0">
            <motion.div 
              className="relative" 
              style={{ 
                perspective: '1500px',
                scale: bookScale,
                z: bookZ
              }}
            >
              {/* Core glow behind book */}
              <div className="absolute inset-0 bg-[#F2C14E]/20 blur-[80px] scale-110 animate-pulse" style={{ animationDuration: '4s' }} />
              
              {/* Enhanced rim-light effect - right edge */}
              <div 
                className="absolute -right-12 top-0 bottom-0 w-24 opacity-70"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, #F2C14E 50%, #FFD670 100%)',
                  filter: 'blur(20px)'
                }}
              />
              
              {/* Top rim light */}
              <div 
                className="absolute -top-6 left-0 right-0 h-16 opacity-50"
                style={{
                  background: 'linear-gradient(180deg, #F2C14E 0%, transparent 100%)',
                  filter: 'blur(15px)'
                }}
              />
              
              {/* Soft reflection beneath */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-gradient-to-b from-[#F2C14E]/30 to-transparent blur-2xl rounded-full" />
              
              <img 
                src={bookCover} 
                alt="Order Flow Trading System™ - Complete Operating Manual" 
                className="relative w-full max-w-[120vw] md:max-w-6xl lg:max-w-7xl xl:max-w-8xl transition-all duration-700 hover:scale-[1.03]"
                style={{
                  transform: 'rotateY(-5deg) rotateX(2deg)',
                  filter: 'drop-shadow(0 30px 60px rgba(242, 193, 78, 0.25)) drop-shadow(20px 0 40px rgba(242, 193, 78, 0.4))'
                }}
              />
            </motion.div>
          </div>
        </div>
        
        {/* Elegant scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
          <ArrowDown className="w-8 h-8 text-[#F2C14E]" />
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
