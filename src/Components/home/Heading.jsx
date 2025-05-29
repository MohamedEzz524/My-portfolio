import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = ["Software Eng.", "Problem Solver.", "Web Developer."];

const FLIP_DURATION = 1.5; // seconds per role
const FLIP_DELAY = 3; // seconds between animations

const Heading = () => {
  return (
    <div className="space-y-1">
      <p className="text-text font-bold text-[clamp(1rem,2vw+.1rem,1.5rem)] ">
        Hello, I am
      </p>

      <h1 className="text-mainTitle font-Space font-extrabold text-[clamp(2rem,3vw+.5rem,3.5rem)]">
        Mohamed ElSayed
      </h1>

      <RolesAnimation />

      <p className="max-w-[430px] text-text big-body font-medium opacity-90">
        I am building and managing Websites and Web Applications lead for
        engaging, interactive, and user-friendly web experiences
      </p>
    </div>
  );
};

export default Heading;

const RolesAnimation = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      // After flip animation completes, change text
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        setIsAnimating(false);
      }, FLIP_DURATION * 500); // Halfway through animation
    }, (FLIP_DURATION + FLIP_DELAY) * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[2.5rem] flex items-center gap-1 perspective  text-[clamp(1.2rem,2.5vw+.3rem,2rem)] font-medium ">
      <div className="text-primary">Creative</div>
      <AnimatePresence mode="wait">
        <motion.p
          key={currentRoleIndex}
          initial={{ rotateX: -90, opacity: 0.8 }}
          animate={{
            rotateX: isAnimating ? -90 : 0,
            opacity: isAnimating ? 0 : 0.8,
          }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{
            duration: FLIP_DURATION / 2,
            ease: "easeInOut",
          }}
          className="origin-bottom bg-buttonBg text-white transform-gpu px-1 rounded-md shadow-md"
        >
          {ROLES[currentRoleIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};
