import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ValueSection = () => {
  const sectionRef = useRef(null);
  const benefitsRef = useRef(null);
  const isHeaderInView = useInView(sectionRef, { once: true, amount: 0.5 });
  const areBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.1 });

  const skills = [
    {
      title: "Reading the Tape",
      description:
        "See what drives every candle. Read the tape like Wall Street traders — and apply it to ICT, Smart Money, or Price Action strategies with precision."
    },
    {
      title: "Absorption & Exhaustion",
      description:
        "Spot when big players absorb or momentum dies. Anticipate reversals before they happen — the way professionals do."
    },
    {
      title: "Volume Profile Mastery",
      description:
        "Identify where institutions build positions. Blend volume zones with your own strategy to trade from true areas of value."
    },
    {
      title: "Footprint Chart Precision",
      description:
        "Read the aggression between buyers and sellers like a Wall Street pro. Use footprint data to strengthen any setup you trade."
    },
    {
      title: "Auction Theory in Action",
      description:
        "Understand how markets find balance and break it. Align this logic with ICT or SMC frameworks for professional-level timing."
    },
    {
      title: "Building Confluence",
      description:
        "Merge footprint, volume, and absorption into one clear picture. Build conviction and clarity behind every trade you take."
    },
    {
      title: "Execution Mastery",
      description:
        "Execute with discipline and control. Manage risk and entries exactly like institutional traders operating on the inside."
    },
    {
      title: "Process Thinking",
      description:
        "Think in probabilities, not emotions. Develop the calm, systematic mindset of Wall Street professionals."
    }
  ];

  return (
    <section
      id="value"
      className="relative py-24 md:py-28"
      style={{
        background: "radial-gradient(circle at top, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 55%), linear-gradient(135deg, #400000 0%, #630000 100%)"
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 mix-blend-screen opacity-30" style={{ background: "radial-gradient(65% 65% at 50% 15%, rgba(242,193,78,0.22) 0%, rgba(242,193,78,0) 100%)" }} />
      </div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div ref={sectionRef} className="mb-16 space-y-6 text-center md:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-['Montserrat',_sans-serif] text-4xl font-bold tracking-[0.08em] text-[#F2C14E] drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-5xl lg:text-6xl"
            >
              Master the Skills That Make You Unshakable.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl font-['Montserrat',_sans-serif] text-xl leading-relaxed text-[#F6EDE1] md:text-2xl lg:text-2xl"
            >
              Learn to trade like Wall Street professionals — and integrate order flow into ICT, Smart Money, Price Action, or
              Supply &amp; Demand strategies.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div
            ref={benefitsRef}
            className="grid gap-6 md:grid-cols-2"
            style={{ gridAutoRows: "1fr" }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={areBenefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-[#F2C14E]/35 bg-[#4C0000]/80 p-8 text-left shadow-[0_24px_48px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-[#F2C14E] hover:shadow-[0_32px_60px_rgba(242,193,78,0.25)] focus-within:border-[#F2C14E]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
                  background:
                    "radial-gradient(120% 120% at 50% 0%, rgba(242,193,78,0.18) 0%, rgba(242,193,78,0) 65%)"
                }} />
                <div className="relative flex flex-col gap-4">
                  <h3 className="font-['Montserrat',_sans-serif] text-2xl font-bold uppercase tracking-[0.3em] text-[#F2C14E] md:text-3xl">
                    {skill.title}
                  </h3>
                  <p className="font-['Lato',_sans-serif] text-lg leading-relaxed text-[#F6EDE1]/90 md:text-xl">
                    {skill.description}
                  </p>
                </div>
                <span className="relative mt-8 inline-flex h-12 w-12 items-center justify-center self-end rounded-full border border-[#F2C14E]/30 bg-[#400000]/70 text-sm font-semibold tracking-[0.3em] text-[#F2C14E]/80 transition-all duration-500 group-hover:border-[#F2C14E] group-hover:text-[#F2C14E]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
