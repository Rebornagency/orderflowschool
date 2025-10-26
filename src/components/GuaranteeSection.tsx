import { Shield, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const GuaranteeSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  return (
    <section className="py-20 bg-gold">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-secondary rounded-2xl p-8 md:p-12 shadow-2xl relative"
            style={{
              boxShadow: isInView ? '0 0 40px rgba(242, 193, 78, 0.3)' : 'none'
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { 
                opacity: [0, 0.3, 0],
              } : {}}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-2xl border-2 border-gold pointer-events-none"
            />
            
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex-shrink-0"
              >
                <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center">
                  <Shield className="w-12 h-12 text-secondary" />
                </div>
              </motion.div>
              
              {/* Content */}
              <div className="flex-1 space-y-4">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="text-3xl md:text-4xl font-bold text-primary-foreground"
                >
                  100% Risk-Free Guarantee
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xl text-muted-foreground leading-relaxed"
                >
                  If this system doesn't help you see the market differently within{" "}
                  <span className="text-gold font-semibold">7 days</span>, I'll refund you.{" "}
                  <span className="font-semibold text-primary-foreground">No questions asked.</span>
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-2 text-gold justify-center md:justify-start pt-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="font-semibold">Zero risk. All upside.</span>
                </motion.div>
              </div>
            </div>
            
            {/* Bottom Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 pt-8 border-t border-border/20 text-center"
            >
              <p className="text-muted-foreground">
                I'm that confident this system will change your trading forever.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
