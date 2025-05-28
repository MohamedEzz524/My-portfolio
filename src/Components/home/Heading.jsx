import { useEffect, useState } from "react";
import TextAnimation from "../TextAnimation";
import { motion } from "framer-motion";

const words = ["Software Eng.", "Problem Solver.", "Web Developer."];

const Heading = () => {
  const [text, setText] = useState(words[0].charAt(0));
  const [isFinished, setIsFinished] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let frameId; //store frame id
    let lastTime = performance.now(); // keep track of the last timestamp
    let delay = isDeleting ? 50 : 150;
    const type = (currentTime) => {
      if (currentTime - lastTime >= delay) {
        const currentWord = words[currentWordIndex];
        setIsFinished(false);

        if (isDeleting) {
          // Delete a letter
          if (text.length > 0) {
            setText((prev) => prev.slice(0, -1));
          } else {
            // When fully deleted, move to next word
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        } else {
          // Add a letter
          if (text.length < currentWord.length) {
            setText((prev) => currentWord.slice(0, prev.length + 1));
          } else {
            // When the word is fully typed, wait before deleting
            setIsFinished(true);
            setTimeout(() => {
              setIsDeleting(true);
            }, 1500); // 1.5s pause
          }
        }

        lastTime = currentTime; // Reset lastTime for next character
      }
      frameId = requestAnimationFrame(type);
    };

    frameId = requestAnimationFrame(type);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [currentWordIndex, isDeleting, text]);

  return (
    <div>
      <p className="text-text font-bold text-[clamp(1rem,2vw+.1rem,1.5rem)] ">
        Hello, I am
      </p>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-mainTitle font-Space font-extrabold text-[clamp(2rem,3vw+.5rem,3.5rem)]"
      >
        <TextAnimation
          text="Mohamed ElSayed"
          animation="pulse"
          type=""
          delay={0.25}
        />
      </motion.h1>
      <p className="relative content-center text-primary text-[clamp(1.2rem,2.5vw+.3rem,2rem)] mb-[10px]  font-medium">
        Creative {text}
        <span
          className={`${
            isFinished ? "animate-pulse" : ""
          } w-[1.5px] h-[.5em] bg-primary`}
        >
          |
        </span>
      </p>
      <p className="max-w-[430px]  text-text big-body font-medium opacity-90">
        <TextAnimation
          text="I am building and managing Websites and Web Applications lead for engaging, interactive, and user-friendly web
              experiences "
        />
      </p>
    </div>
  );
};

export default Heading;
