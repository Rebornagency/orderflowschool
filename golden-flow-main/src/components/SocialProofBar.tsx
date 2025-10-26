import { Star, Users, MessageSquare } from "lucide-react";

const SocialProofBar = () => {
  const scrollToTestimonials = () => {
    const element = document.getElementById('testimonials');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#1C0A0A] border-b border-[#F2C14E]/20 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base">
          {/* Rating */}
          <div className="flex items-center gap-2 text-[#F6EDE1]">
            <Star className="w-4 h-4 md:w-5 md:h-5 text-[#F2C14E] fill-[#F2C14E]" />
            <span className="font-semibold">4.9/5 rating</span>
          </div>
          
          {/* Divider */}
          <div className="hidden sm:block w-px h-5 bg-[#F2C14E]/30" />
          
          {/* Traders trained */}
          <div className="flex items-center gap-2 text-[#F6EDE1]">
            <Users className="w-4 h-4 md:w-5 md:h-5 text-[#F2C14E]" />
            <span className="font-semibold">2,000+ traders trained</span>
          </div>
          
          {/* Divider */}
          <div className="hidden sm:block w-px h-5 bg-[#F2C14E]/30" />
          
          {/* Reviews link */}
          <button
            onClick={scrollToTestimonials}
            className="flex items-center gap-2 text-[#F2C14E] hover:text-[#FFD670] transition-colors duration-200 font-semibold"
            aria-label="View verified reviews"
          >
            <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
            <span>200+ verified reviews</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBar;
