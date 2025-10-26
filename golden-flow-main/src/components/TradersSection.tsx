import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const credibilityPoints = [
  { icon: "💼", label: "Former institutional & proprietary traders" },
  { icon: "🧠", label: "Experts in order flow, volume profile & auction theory" },
  { icon: "📊", label: "Developed tools and processes used by top firms" },
  { icon: "🎯", label: "Focused on teaching real-world execution and clarity" },
];

const traders = [
  {
    name: "Alex Rivera",
    role: "Institutional Trader — Futures Division",
    description:
      "Guided global macro desks through high-volatility sessions and codified the auction models that inform our playbook.",
  },
  {
    name: "Morgan Lee",
    role: "Head of Liquidity Strategy",
    description:
      "Built execution algorithms for prop firms, translating raw order flow into precise entries, exits, and size allocation.",
  },
  {
    name: "Jordan Blake",
    role: "Order Flow Systems Architect",
    description:
      "Engineered the analytical dashboards our desks rely on to read depth, absorption, and imbalance in real time.",
  },
];

const TradersSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #400000 0%, #630000 100%)",
      }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(242, 193, 78, 0.25), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 100%)",
          }}
        />
      </div>

      <div className="relative py-28 lg:py-24 md:py-20 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center gap-8"
          >
            <div className="flex flex-col items-center gap-4 max-w-3xl">
              <div className="flex items-center gap-6">
                <span className="h-px w-16 bg-[#F2C14E] hidden sm:block" />
                <h2 className="text-4xl md:text-5xl font-bold text-[#F2C14E]">
                  Meet the Traders Behind Order Flow School
                </h2>
                <span className="h-px w-16 bg-[#F2C14E] hidden sm:block" />
              </div>

              <p className="text-lg md:text-xl text-[#F6EDE1] font-semibold">
                Built by a team of institutional traders who understand how the markets really move — now sharing their process with the next generation of professionals.
              </p>

              <p className="text-base md:text-lg text-[#F6EDE1] font-['Lato',_sans-serif] leading-relaxed">
                Our team has spent years executing in institutional environments — analyzing order flow, liquidity, and auction dynamics at the highest level. The Order Flow Guide condenses that experience into a clear, actionable framework any trader can use.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
              {credibilityPoints.map((point, index) => (
                <motion.span
                  key={point.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                  className="flex items-center gap-2 rounded-full border border-[#F2C14E] px-6 py-3 text-sm md:text-base text-[#F6EDE1] font-['Lato',_sans-serif]"
                >
                  <span className="text-lg md:text-xl" aria-hidden>
                    {point.icon}
                  </span>
                  {point.label}
                </motion.span>
              ))}
            </div>

            <div className="grid w-full gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {traders.map((trader, index) => (
                <motion.article
                  key={trader.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 * index, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-3xl border border-white/10 bg-[#4A0808]/90 p-8 text-left shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                >
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#F2C14E]/60 to-transparent" />
                  <div className="flex flex-col items-center text-center gap-5">
                    <div
                      className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#3B0505]"
                      role="img"
                      aria-label={`Abstract portrait representing ${trader.name}, ${trader.role}`}
                    >
                      <div className="absolute inset-0 rounded-full border border-[#F2C14E]/70" />
                      <div
                        className="absolute inset-0 rounded-full blur-xl opacity-60"
                        style={{
                          background: "radial-gradient(circle, rgba(242, 193, 78, 0.35) 0%, rgba(63, 11, 11, 0) 70%)",
                        }}
                      />
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative text-[#F6EDE1]">
                        <path
                          d="M26 4C17.1634 4 10 11.1634 10 20C10 24.9947 12.4721 29.411 16.3271 32.1261C19.2192 34.179 21 37.3928 21 40.8926V44H31V40.8926C31 37.3931 32.7806 34.1793 35.6723 32.1263C39.5275 29.4114 42 24.9949 42 20C42 11.1634 34.8366 4 26 4Z"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20 46H32"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-[#F2C14E]">{trader.name}</h3>
                      <p className="text-sm md:text-base font-['Lato',_sans-serif] text-[#F6EDE1]/90 uppercase tracking-[0.2em]">
                        {trader.role}
                      </p>
                      <p className="text-base text-[#F6EDE1] font-['Lato',_sans-serif] leading-relaxed">
                        {trader.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3">
              <p className="text-lg md:text-xl font-semibold text-[#F6EDE1]">
                Learn the method trusted by those who see what others can’t.
              </p>
              <span className="h-px w-20 bg-[#F2C14E]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TradersSection;
