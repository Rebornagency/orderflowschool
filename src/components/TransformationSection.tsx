import { Zap, Target, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const TransformationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            // Fire GA4 event
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'view_transformation_section', {
                section: 'transformation'
              });
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const transformations = [
    {
      icon: <Zap className="h-8 w-8" />,
      before: "Stopped out before the real move",
      after: "Enter after smart money with precision"
    },
    {
      icon: <Target className="h-8 w-8" />,
      before: "Guessing every entry",
      after: "Execute using a proven order-flow checklist"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      before: "Trading blind",
      after: "See real buyers/sellers behind each move"
    }
  ];

  const chipClassName =
    "text-[11px] uppercase tracking-[0.08em] font-semibold px-3 py-1.5 rounded-full leading-none";

  const handleCardClick = (index: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_transformation_card', {
        card_index: index,
        card_before: transformations[index].before,
        card_after: transformations[index].after
      });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="transformation" 
      className="py-20 bg-gradient-to-b from-[#120C0C] to-[#1C0A0A] relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F2C14E] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F2C14E] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl text-center mb-16 font-bold text-[#F6EDE1]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            From Retail Confusion to Institutional Confidence
          </motion.h2>

          {/* Cards grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {transformations.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onClick={() => handleCardClick(index)}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#F2C14E]/20 bg-[#0A0000]/70 shadow-[0px_20px_45px_rgba(4,0,0,0.65)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#F2C14E]/50 hover:shadow-[0px_25px_55px_rgba(5,0,0,0.75)]"
              >
                {/* Icon */}
                <div className="flex min-h-[110px] items-center justify-center bg-gradient-to-b from-transparent via-[#180404]/40 to-transparent px-6 py-6 text-[#F2C14E]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F2C14E]/30 bg-[#F2C14E]/10 shadow-inner">
                    {item.icon}
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  {/* Before row */}
                  <div
                    className="flex min-h-[132px] items-start gap-4 border-b px-6 py-5"
                    style={{
                      backgroundColor: '#FFF7EC',
                      borderBottomColor: 'rgba(92, 26, 23, 0.18)'
                    }}
                  >
                    <span
                      className={`${chipClassName} flex-shrink-0`}
                      style={{
                        backgroundColor: '#F7D9A5',
                        color: '#5C1A17',
                        boxShadow: '0 4px 10px rgba(92, 26, 23, 0.15)'
                      }}
                    >
                      BEFORE
                    </span>
                    <p
                      className="text-base font-medium leading-relaxed"
                      style={{ color: '#5C1A17' }}
                    >
                      {item.before}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="flex justify-center bg-[#0A0000]/70 px-6 py-3">
                    <div
                      className="h-[2px] w-16 rounded-full"
                      style={{ backgroundColor: '#F2C14E', opacity: 0.9 }}
                    />
                  </div>

                  {/* After row */}
                  <div
                    className="flex min-h-[132px] flex-1 items-start gap-4 border-t px-6 py-5"
                    style={{
                      backgroundColor: '#F6EDE1',
                      borderTopColor: 'rgba(242, 193, 78, 0.45)'
                    }}
                  >
                    <span
                      className={`${chipClassName} flex-shrink-0`}
                      style={{
                        backgroundColor: '#F2C14E',
                        color: '#411305',
                        boxShadow: '0 4px 10px rgba(242, 193, 78, 0.35)'
                      }}
                    >
                      AFTER
                    </span>
                    <p
                      className="text-base font-semibold leading-relaxed text-[#1C0A0A]"
                    >
                      {item.after}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
