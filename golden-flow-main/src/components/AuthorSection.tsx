import { Trophy, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AuthorSection = () => {
  const sectionRef = useRef(null);
  const credentialsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const areCredentialsInView = useInView(credentialsRef, { once: true, amount: 0.5 });

  const credentials = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Consistently profitable day trader"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      text: "Specialized in order flow analysis"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Helped hundreds of traders level up"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Why Learn From Me?
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experience. Real results. Real education.
            </p>
          </motion.div>
          
          {/* Main Content */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8 shadow-lg"
          >
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                I'm a consistently profitable day trader who specializes in reading order flow 
                to spot high-probability setups and avoid market traps.
              </p>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                While other traders were stuck using outdated indicators and candlestick patterns, 
                I discovered the power of order flow analysis — and it transformed my trading completely.
              </p>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                This system distills <span className="text-primary font-semibold">years of hard-earned experience</span> into 
                clear, actionable lessons that you can apply immediately.
              </p>
            </div>
            
            {/* Credentials */}
            <div ref={credentialsRef} className="grid md:grid-cols-3 gap-6 pt-8">
              {credentials.map((cred, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={areCredentialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="flex flex-col items-center text-center space-y-3 p-4 bg-primary/5 border border-primary/20 rounded-lg"
                >
                  <div className="text-primary">
                    {cred.icon}
                  </div>
                  <p className="text-sm md:text-base text-foreground font-medium">
                    {cred.text}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Bottom Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={areCredentialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-border pt-8"
            >
              <p className="text-lg md:text-xl text-center text-muted-foreground italic">
                "I wrote the system I wish I had when I started trading. 
                No fluff. No theory. Just what actually works."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
