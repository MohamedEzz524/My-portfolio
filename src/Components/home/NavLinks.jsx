import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { useEffect, useRef, useState } from "react";
import { throttle } from "../../utils/throttle";

const nav = ["about", "skills", "projects", "contact"];

const NavLinks = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [activeLink, setActiveLink] = useState("about");
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    nav.forEach((link) => {
      const section = document.getElementById(link);
      if (section) observer.current.observe(section);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsSmall(window.innerWidth <= 1024);
    }, 200);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return !isSmall ? (
    <div className="flex gap-4 relative ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-[2px] h-48 bg-linkHover"
      />
      <ul className="flex flex-col gap-[20px]">
        {nav.map((item, i) => (
          <AnimatedSection key={item + i} delay={0.2 * i}>
            <li className="text-link relative ">
              <a
                href={`#${item}`}
                onClick={() => setActiveLink(item)}
                className={`flex items-center font-medium w-fit   ${
                  activeLink === item
                    ? "translate-x-5 text-linkActive before:-left-[36px] before:w-8"
                    : "text-link hover:text-linkHover hover:before:-left-[36px] hover:translate-x-5 before:w-5 hover:before:w-8 "
                } main-trans group cursor-pointer text-[clamp(1rem,1.2vw+.1rem,1.2rem)] before:absolute before:content-[''] before:bottom-[-1px] before:-left-[18px] before:h-[2px] before:bg-linkHover before:rounded-full before:main-trans
                      `}
              >
                &lt;
                <span
                  className={`ml-1 main-trans hover:mr-1.5 ${
                    activeLink === item ? "mr-1" : ""
                  }`}
                >
                  {item.toUpperCase()}
                </span>
                <span
                  className={`${
                    activeLink === item
                      ? "opacity-100 translate-x-0 translate-y-0 rotate-[360deg]"
                      : "opacity-0 translate-x-full -translate-y-full group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-[360deg]"
                  }  main-trans `}
                >
                  /
                </span>
                &gt;
              </a>
            </li>
          </AnimatedSection>
        ))}
      </ul>
    </div>
  ) : (
    <ul className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col items-center gap-1.5 z-[99]">
      {nav.map((item, i) => (
        <AnimatedSection key={item + i} delay={0.25 * i}>
          <li className="text-link  relative group">
            <span className="absolute left-0 -translate-x-[150%] rounded-md shadow-md p-1 bg-border small-body opacity-0 pointer-events-none main-trans group-hover:opacity-90 group-hover:-translate-x-[120%] ">
              {item}
              <span className="w-0 h-0 absolute right-0 top-1/2 translate-x-full -translate-y-1/2 border-4 border-transparent  border-l-border "></span>
            </span>
            <a
              href={`#${item}`}
              onClick={() => setActiveLink(item)}
              className={`flex items-center font-medium w-fit   ${
                activeLink === item
                  ? "text-linkActive pointer-events-none"
                  : "text-link hover:text-linkHover"
              } main-trans group cursor-pointer text-[clamp(1rem,1.2vw+.1rem,1.2rem)]`}
            >
              &lt;
              <span
                className={`ml-1 main-trans hover:mr-1.5 ${
                  activeLink === item ? "" : "mr-1"
                }`}
              ></span>
              <span
                className={`${
                  activeLink === item
                    ? "opacity-100 translate-x-0 translate-y-0 rotate-[360deg]"
                    : "opacity-0 translate-x-full -translate-y-full group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-[360deg]"
                }  main-trans `}
              >
                /
              </span>
              &gt;
            </a>
          </li>
        </AnimatedSection>
      ))}
    </ul>
  );
};

export default NavLinks;
