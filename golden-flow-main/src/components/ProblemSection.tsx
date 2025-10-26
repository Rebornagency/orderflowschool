import { TrendingDown, AlertTriangle, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProblemSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  const problems = [
    {
      icon: <TrendingDown className="w-8 h-8" />,
      text: "Getting stopped out before the real move."
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      text: "Watching reversals happen and missing out on them."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      text: "Trading without confidence"
    }
  ];

  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Gold light streak */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={isTitleInView ? { x: "100%", opacity: [0, 0.3, 0] } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F2C14E] to-transparent"
              style={{ transform: "translateY(-50%)" }}
            />
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary-foreground">
              If You're Still Trading Without Order Flow, You're Trading Blind.
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-gold-light leading-relaxed"
          >
            Most traders only see the surface — candlesticks, indicators, patterns. 
            But the real battle between buyers and sellers? That's ONLY visible through the Order Flow.
          </motion.p>
          
          <div ref={sectionRef} className="grid md:grid-cols-3 gap-8 pt-8">
            {problems.map((problem, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="bg-secondary/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6 space-y-4 hover:border-gold/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-gold flex justify-center">
                  {problem.icon}
                </div>
                <p className="text-primary-foreground text-base md:text-lg">
                  {problem.text}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-primary-foreground pt-8 font-semibold"
          >
            You're not alone — but you don't have to stay in the dark.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
