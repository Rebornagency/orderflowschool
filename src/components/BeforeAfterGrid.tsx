import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const BeforeAfterGrid = () => {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.3 });

  const transformations = [
    {
      before: "Stopped out before the real move",
      after: "Enter after smart money with precision"
    },
    {
      before: "Chasing fake breakouts",
      after: "Spot exhaustion & avoid traps (footprint)"
    },
    {
      before: "Guessing entries",
      after: "Checklist entries with institutional clarity"
    },
    {
      before: "Inconsistent results",
      after: "Consistent execution aligned to prop-firm rules"
    }
  ];

  return (
    <div ref={gridRef} className="mt-12 transformation-grid">
      {transformations.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="transformation-card"
        >
          {/* Before section */}
          <div className="transformation-band transformation-band--before">
            <span className="transformation-chip transformation-chip--before">
              BEFORE
            </span>
            <p className="transformation-text transformation-text--before">
              {item.before}
            </p>
          </div>

          {/* After section */}
          <div className="transformation-band transformation-band--after">
            <span className="transformation-chip transformation-chip--after">
              AFTER
            </span>
            <p className="transformation-text transformation-text--after">
              {item.after}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BeforeAfterGrid;
