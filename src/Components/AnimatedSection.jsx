import { motion } from "framer-motion";

export const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          ease: "easeOut",
          delay,
        },
      }}
      viewport={{ once: true, margin: "0px 0px 0px 0px" }}
      className={`motion-section ${className}`}
      style={{
        // CSS-based mobile optimizations
        transform: "translateZ(0)", // Force GPU acceleration
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
};
