import { motion } from "framer-motion";
import { FaBriefcase, FaFileDownload } from "react-icons/fa";

const Buttons = () => {
  const cvPath = process.env.PUBLIC_URL + "/documents/MohamedE._CV.pdf";

  return (
    <div className=" flex gap-5 max-sm:gap-3 py-2 small-body">
      <motion.a
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: "300", duration: 1 }}
        href="mailto:moelsayed524@gmail.com?subject=Contact"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-[min(5%,1rem)] ring-style py-2 rounded-lg text-text font-semibold bg-white/10 backdrop-blur-cardBlur hover:bg-white/20 hover:shadow-[0_0_24px_rgba(255,255,255,0.1)] hover:-translate-y-1 "
      >
        <FaBriefcase className="inline-block mr-2 main-trans text-xl" />
        Hire Me
      </motion.a>
      <motion.a
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: "300",
          duration: 1,
          damping: 8,
        }}
        href={cvPath}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-[min(5%,1rem)] ring-style py-2 rounded-lg bg-buttonBg text-buttonText font-semibold shadow-[0_4px_16px_var(--shadow)]"
      >
        <FaFileDownload className="inline-block mr-2 main-trans " />
        Print CV
      </motion.a>
    </div>
  );
};

export default Buttons;
