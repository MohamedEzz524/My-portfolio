import { motion } from "framer-motion";

import {
  FaUniversity,
  FaGraduationCap,
  FaBookmark,
  FaIdCard,
} from "react-icons/fa";
import HeroTitle from "../Components/Hero_title.jsx";
import { academic, aboutInfo } from "../Data_Center.js";
import { useState } from "react";
import AboutMeParagraph from "../Components/AboutMeParagraph.jsx";

export default function About() {
  const [showAbout, setShowAbout] = useState(Array(5).fill(true));

  const toggleParent = (i, setShow) => {
    setShow((prev) => {
      const newShow = [...prev];
      newShow[i] = !newShow[i];
      return newShow;
    });
  };

  return (
    <section id="about" className="section-style pb-[20px] border-divider">
      <HeroTitle setShow={setShowAbout} state={true} title={`<ABOUT ME>`} />
      <div className="flex flex-col gap-2 px-5 py-4 shadow-md max-sm:border-none max-sm:p-0">
        {/* 0 */}
        <div
          className={`text-text small-body hover:bg-cardBg rounded-sm font-medium my-1 relative main-trans group sm:p-2 backdrop-blur-lg `}
        >
          <span
            className="big-dot max-sm:hidden -translate-x-3.5 cursor-pointer group
              ring-2 ring-ring ring-offset-2 ring-offset-bg group-hover:ring-primary"
            onClick={() => toggleParent(0, setShowAbout)}
          />

          <div className={`${!showAbout[0] ? "hidden" : "block"}`}>
            <AboutMeParagraph
              mark="Hi there!"
              para="I'm Mohamed ElSayed a Computer Engineer and React Developer, I enjoy building clean, functional interfaces with **React** and **TypeScript**, focusing on accessibility and maintainable code.  
              My engineering background helps me approach problems methodically, while my design curiosity keeps me focused on creating intuitive user experiences.  
              Always learning, always iterating—I’m excited to contribute to meaningful projects and grow alongside talented teams."
            />
          </div>

          <p
            className={`collapse-title  ${!showAbout[0] ? "block" : "hidden"}`}
            onClick={() => toggleParent(0, setShowAbout)}
          >
            Know Me
          </p>
        </div>
        <span className="section-divider" />

        {/* Academic Foundation */}
        <div>
          <div
            className={`relative ${!showAbout[1] ? "" : "card-style "} group `}
          >
            <span
              className="shadow-dot max-sm:hidden -translate-x-[14px] cursor-pointer group-hover:shadow-[inset_0_0_4px_4px_var(--primary)] transition-shadow duration-300"
              onClick={() => toggleParent(1, setShowAbout)}
            />

            {showAbout[1] ? (
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 1 }}
                >
                  <h3 className="card-title">
                    <FaGraduationCap className="inline-block" />
                    Education
                  </h3>
                  <p className="text-text font-semibold big-body flex items-center gap-2">
                    Ain Shams University{" "}
                    <FaUniversity className="inline-block" />
                  </p>
                  <p className="text-text font-medium small-body">
                    B.Sc. in Computer & Systems Engineering
                  </p>
                  <p className="text-primary font-medium mt-1">2018 – 2023</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 1 }}
                  className="mt-6 p-4 rounded-xl bg-[var(--card-bg)] shadow-md border border-[var(--card-border)] backdrop-blur-md"
                >
                  <h3 className="text-sectionTitle text-lg font-semibold mb-1">
                    🎓 Graduation Project –
                    <span className="text-primary">Online Clinic Platform</span>
                  </h3>
                  <p className="text-sm text-text mb-2">
                    A full-stack web app enabling remote healthcare via secure
                    consultations, appointment booking, payments, and admin
                    management.
                  </p>
                  <p className="text-sm font-medium text-specialText mb-1">
                    <span className="font-semibold">Role:</span> Documentation
                    Lead & Frontend Contributor
                  </p>
                  <p className="text-sm text-text mb-2">
                    <span className="font-semibold">Tech Stack:</span> MERN
                    (MongoDB, Express.js, React.js, Node.js)
                  </p>
                  <ul className="list-disc list-inside text-sm text-text space-y-1">
                    <li>
                      Led documentation across the development cycle to ensure
                      project clarity and maintainability.
                    </li>
                    <li>
                      Implemented frontend components for secure login, chat,
                      and responsive dashboards.
                    </li>
                  </ul>
                </motion.div>
              </div>
            ) : (
              <p
                className="collapse-title"
                onClick={() => toggleParent(1, setShowAbout)}
              >
                Education
              </p>
            )}
          </div>
        </div>

        <span className="section-divider" />

        {/* Academic Foundation*/}
        <div
          className={`font-medium relative group ${
            !showAbout[2] ? "" : "card-style "
          }`}
        >
          <span
            className="shadow-dot max-sm:hidden -translate-x-[14px] cursor-pointer group-hover:shadow-[inset_0_0_4px_4px_var(--primary)] transition-shadow duration-300"
            onClick={() => toggleParent(2, setShowAbout)}
          />

          {showAbout[2] ? (
            <div>
              <h3 className="card-title">
                <FaBookmark /> Academic Foundation
              </h3>
              <div className="grid max-sm:grid-cols-1 lg:grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 gap-1">
                {academic.map((a, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * i,
                      ease: "easeOut",
                    }}
                    key={a.id}
                    className=" text-text rounded-sm p-2"
                  >
                    <h4 className="flex items-center gap-1 font-bold big-body mb-1 underline">
                      <span className="icon-style">{a.titleIcon}</span>{" "}
                      {a.title}
                    </h4>
                    <ul className="small-body group">
                      {a.values.map((v, i) => (
                        <li
                          key={i}
                          className="group-hover:translate-x-1 group-hover:scale-[1.01] main-trans"
                        >
                          <span className="text-primary ">➛</span> {v}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <p
              className="collapse-title"
              onClick={() => toggleParent(2, setShowAbout)}
            >
              Academic Foundation
            </p>
          )}
        </div>

        <span className="section-divider" />

        {/* Personal Information */}
        <div
          className={` ${
            !showAbout[3] ? "" : "card-style "
          } relative font-medium w-full group `}
        >
          <span
            className="shadow-dot max-sm:hidden -translate-x-[14px] cursor-pointer group-hover:shadow-[inset_0_0_4px_4px_var(--primary)] transition-shadow duration-300"
            onClick={() => toggleParent(3, setShowAbout)}
          />

          <div className={`${!showAbout[3] ? "hidden" : "block"}`}>
            <h3 className="card-title">
              <FaIdCard className="inline-block" />
              Personal
            </h3>
            <div className="grid max-sm:grid-cols-1 lg:grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 gap-1">
              {aboutInfo.map(({ name, id, value, icon }, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 * i,
                    ease: "easeOut",
                  }}
                  key={id}
                  className="small-body rounded-sm p-2"
                >
                  <p className="flex items-center gap-1.5 underline text-primary font-bold mb-1 main-trans">
                    <span className="icon-style">{icon}</span>
                    {name}:
                  </p>
                  <p className="text-text font-medium  main-trans">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <p
            className={`collapse-title col-span-2 ${
              !showAbout[3] ? "block" : "hidden"
            }`}
            onClick={() => toggleParent(3, setShowAbout)}
          >
            More Info
          </p>
        </div>
        <span className="section-divider"></span>

        {/* DownTime */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="text-text small-body font-medium my-1 relative main-trans group hover:bg-cardBg rounded-sm  sm:p-2 backdrop-blur-xl"
        >
          <span
            className="big-dot max-sm:hidden -translate-x-3.5 cursor-pointer
            ring-2 ring-ring ring-offset-2 ring-offset-bg group-hover:ring-primary"
            onClick={() => toggleParent(4, setShowAbout)}
          />

          {showAbout[4] ? (
            <div className="text-text font-medium leading-relaxed tracking-wide">
              <AboutMeParagraph
                mark="In my downtime"
                para="I enjoy
              climbing, reading, and exploring new technologies. I’m driven by
              curiosity and enjoy solving real-world problems—whether it’s
              through code or personal growth. Always open to new conversations,
              ideas, and opportunities to collaborate."
              />
            </div>
          ) : (
            <p
              className="collapse-title"
              onClick={() => toggleParent(4, setShowAbout)}
            >
              Off Screen
            </p>
          )}
        </motion.div>
      </div>
      <HeroTitle setShow={setShowAbout} state={false} title={`</ABOUT ME>`} />
    </section>
  );
}
