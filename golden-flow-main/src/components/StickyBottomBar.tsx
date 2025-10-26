import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import bookCover from "@/assets/book-cover.png";

const StickyBottomBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 40vh
      const scrollThreshold = window.innerHeight * 0.4;
      const scrolled = window.scrollY > scrollThreshold;
      
      // Check if CTA section is in viewport
      const ctaSection = document.getElementById('offer');
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect();
        const ctaInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(scrolled && !ctaInView);
      } else {
        setIsVisible(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
      style={{ width: '92%' }}
    >
      <div className="h-[60px] backdrop-blur-lg bg-[#120C0C]/90 border-t border-gold/20 rounded-t-lg flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <img 
            src={bookCover} 
            alt="Order Flow Trading System™" 
            className="h-10 w-auto drop-shadow-lg"
          />
          <span className="text-primary-foreground font-semibold hidden sm:inline">
            Order Flow System
          </span>
        </div>
        
        <button
          onClick={() => window.open('https://whop.com/checkout/plan_j28Me1PHZxPWU?d2c=true', '_blank')}
          className="h-10 bg-[#F2C14E] text-[#120C0C] hover:bg-[#F2C14E]/90 font-bold rounded-md px-6 md:px-8 transition-all duration-200"
        >
          Get Instant Access Now →
        </button>
      </div>
    </div>
  );
};

export default StickyBottomBar;
