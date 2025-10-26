import { Button } from "@/components/ui/button";
import {
  BookOpen,
  FileText,
  LineChart,
  Lock,
  Zap,
  Star,
  ShieldCheck,
  Infinity as InfinityIcon
} from "lucide-react";
import bookCover from "@/assets/book-cover.png";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OfferSection = () => {
  const sectionRef = useRef(null);
  const bookRef = useRef(null);
  const itemsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const isBookInView = useInView(bookRef, { once: true, amount: 0.5 });
  const areItemsInView = useInView(itemsRef, { once: true, amount: 0.2 });

  const items = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "The Order Flow Trading System™",
      description: "Complete operating manual for reading order flow and trading like a professional",
      format: "Digital System"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Footprint Cheat Sheet",
      description: "Quick-reference playbook for instant order flow analysis",
      format: "Bonus #1"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Real Trade Case Studies",
      description: "Annotated examples of actual winning trades using order flow",
      format: "Bonus #2"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Guaranteed Exclusive Spot in Order Flow School",
      description: "Be part of the exclusive cohort when Order Flow School opens in 2026",
      format: "Bonus #3"
    }
  ];

  const trustPoints = [
    {
      icon: Lock,
      title: "Safe & Secure Checkout",
      description: "SSL encrypted and verified by Whop."
    },
    {
      icon: Zap,
      title: "Instant Access After Purchase",
      description: "No delays, no waiting."
    },
    {
      icon: Star,
      title: "Trusted by 1,000+ Traders",
      description: "Real results. Consistent feedback."
    },
    {
      icon: ShieldCheck,
      title: "Satisfaction Guarantee",
      description: "If you’re not satisfied, we’ll make it right."
    },
    {
      icon: InfinityIcon,
      title: "Lifetime Access",
      description: "No expiration. Learn at your pace."
    }
  ];

  return (
    <section id="offer" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Get the System + <span className="text-gold font-bold">Exclusive Bonuses</span>
            </h2>
            <p className="text-xl md:text-2xl text-gold-light">
              Everything you need to start trading with order flow today
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: System Image */}
            <div ref={bookRef} className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={isBookInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
                style={{ perspective: '1000px' }}
              >
                <div className="absolute inset-0 bg-gold blur-3xl opacity-30" />
                <img 
                  src={bookCover} 
                  alt="Order Flow Trading System™ and Bonuses" 
                  className="relative w-full max-w-[85vw] md:max-w-3xl lg:max-w-4xl drop-shadow-2xl"
                />
              </motion.div>
            </div>
            
            {/* Right: Package Details */}
            <div className="space-y-8">
              {/* Items */}
              <div ref={itemsRef} className="space-y-4">
                {items.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={areItemsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="bg-secondary/20 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-all duration-300"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 text-gold">
                        {item.icon}
                      </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-bold text-primary-foreground">
                          {item.title}
                        </h3>
                        <span className="text-xs bg-gold text-secondary px-3 py-1 rounded-full font-semibold whitespace-nowrap flex-shrink-0 self-start">
                          {item.format}
                        </span>
                      </div>
                      <p className="text-gold-light">
                        {item.description}
                      </p>
                    </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Pricing */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={areItemsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-secondary/30 border-2 border-gold rounded-xl p-8 text-center space-y-4"
              >
                <div className="space-y-2">
                  <p className="text-muted-foreground line-through text-xl">
                    Total Value: $197
                  </p>
                  <p className="text-5xl md:text-6xl font-bold text-gold">
                    $49.99
                  </p>
                  <p className="text-gold-light text-lg">
                    One-time payment. Instant access.
                  </p>
                </div>
                
                <Button
                  variant="cta"
                  size="xl"
                  className="w-full"
                  onClick={() => window.open('https://whop.com/checkout/plan_j28Me1PHZxPWU?d2c=true', '_blank')}
                >
                  Get Instant Access Now
                </Button>

                <p className="text-sm text-muted-foreground">
                  Secure payment • Instant digital delivery
                </p>

                <div className="relative mt-10 overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-[#400000] via-[#4a0000] to-[#630000] p-6 text-left shadow-[0_0_30px_rgba(242,193,78,0.12)] md:p-8">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,193,78,0.18)_0%,_transparent_65%)]" />
                  <div className="relative space-y-4">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <h3 className="text-2xl font-bold text-gold-light md:text-3xl">
                        You’re Protected by the Order Flow Trust Guarantee
                      </h3>
                      <div className="hidden h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-white/5 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-light shadow-[0_0_20px_rgba(242,193,78,0.25)] md:flex">
                        <span>
                          Order Flow
                          <br />
                          Seal
                        </span>
                      </div>
                    </div>
                    <p className="text-base text-gold/80 md:max-w-2xl">
                      We built this guide to help traders finally understand how professionals trade. If you’re not confident in your purchase, we’ll make it right.
                    </p>

                    <div className="mt-6 flex flex-col gap-4 md:flex-row md:flex-wrap md:items-stretch md:gap-6">
                      {trustPoints.map(({ icon: Icon, title, description }) => (
                        <div
                          key={title}
                          className="group flex flex-col items-center gap-3 rounded-2xl border border-transparent bg-white/5 p-4 text-center transition md:flex-1 md:min-w-[200px] md:flex-row md:items-center md:gap-4 md:text-left"
                        >
                          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 bg-white/5 text-gold transition group-hover:border-gold/70 group-hover:text-gold">
                            <Icon className="h-6 w-6" strokeWidth={1.5} />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-semibold tracking-[0.08em] text-gold-light">
                              {title}
                            </p>
                            <p className="text-sm text-gold/70">
                              {description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
