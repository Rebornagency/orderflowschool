import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SolutionSection = () => {
  const sectionRef = useRef(null);
  const benefitsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const areBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 });

  const benefits = [
    { title: "See Market Intention", description: "Understand who's really in control at any price level — buyers or sellers.", goldAccent: false },
    { title: "Avoid False Moves", description: "Stop getting trapped by fake breakouts and market manipulation.", goldAccent: true },
    { title: "Trade With Confidence", description: "Enter positions knowing exactly what the market structure is telling you.", goldAccent: true },
    { title: "Think Like Institutions", description: "Trade with the precision of professionals who move millions.", goldAccent: false }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <div ref={sectionRef} className="text-center space-y-6 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-2"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">The Unique Mechanism</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl text-foreground"
            >
              Order Flow: The <span className="text-primary font-bold">X-Ray</span> of the Market
            </motion.h2>
          </div>
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8 shadow-xl"
          >
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                Candlestick charts tell you <span className="text-muted-foreground italic">what happened</span>.
              </p>
              
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                Order flow tells you <span className="text-primary font-bold">who's behind the move</span> — 
                the real battle between buyers and sellers.
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-6 my-8">
              <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                "Once you understand order flow, you'll see opportunities that are completely 
                invisible to <span className="text-primary font-semibold">99% of traders</span>. You'll know where the smart money is positioned, 
                where they're trapped, and where they'll need to act next."
              </p>
            </div>
            
            {/* Key Benefits Grid */}
            <div ref={benefitsRef} className="grid md:grid-cols-2 gap-6 pt-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={areBenefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`${benefit.goldAccent ? 'bg-gold/5 border-gold/20' : 'bg-primary/5 border-primary/20'} border rounded-lg p-6`}
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
