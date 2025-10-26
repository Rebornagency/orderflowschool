import { Button } from "@/components/ui/button";
import { Lock, Zap, Clock } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FinalCTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const buttonRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const isButtonInView = useInView(buttonRef, { once: false, amount: 0.8 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });


  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Instant Digital Access"
    },
    {
      icon: <Lock className="w-5 h-5" />,
      text: "Secure Payment"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "7-Day Money-Back Guarantee"
    }
  ];

  const scrollToOffer = () => {
    const element = document.getElementById('offer');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 spotlight-effect pointer-events-none" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
          >
            <span className="text-gold font-bold">Stop</span> Guessing.<br />
            Start Trading With <span className="text-gold font-bold">Clarity.</span>
          </motion.h2>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-gold-light max-w-2xl mx-auto"
          >
            Join the traders who've discovered the power of order flow and never looked back.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            ref={buttonRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="pt-8"
          >
            <motion.div
              animate={isButtonInView ? { scale: [1, 1.04, 1.04] } : { scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button 
                variant="cta" 
                size="xl"
                onClick={() => window.open('https://whop.com/checkout/plan_j28Me1PHZxPWU?d2c=true', '_blank')}
                className="text-lg md:text-xl"
              >
                Get Instant Access Now
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-8 pt-8 text-gold-light"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2"
              >
                <div className="text-gold">
                  {feature.icon}
                </div>
                <span className="text-sm md:text-base font-medium">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Final Push */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="pt-8 space-y-4"
          >
            <p className="text-lg md:text-xl text-primary-foreground">
              Your competition is already learning this.
            </p>
            <p className="text-xl md:text-2xl font-bold text-gold">
              Don't get left behind.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
