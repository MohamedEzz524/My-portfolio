import HeroTitle from "../Components/Hero_title";
import { frontend, backend, tools } from "../Data_Center";
import { AnimatedSection } from "../Components/AnimatedSection";
import { motion } from "framer-motion";

const SkillGroup = ({ title, skills }) => (
  <div className="mb-6 group">
    {/* Skill header */}
    <div className="col-span-full mb-2 py-2">
      <h3 className="text-mainTitle font-bold uppercase mb-2 relative w-fit ">
        {title}:
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute -bottom-0.5 left-0 -translate-x-1/2 bg-mainTitle w-full h-[1px]"
        />
      </h3>
    </div>
    <div className="main-trans  grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 2xl:grid-cols-4 gap-3 max-md:gap-2">
      {skills.map(({ id, icon, name }, i) => (
        <AnimatedSection key={id} delay={0.05 * i}>
          <div
            title={name}
            className="bg-cardBg group-hover:before:opacity-100 skill-item  px-4 py-3 rounded-lg border border-cardBorder shadow-md overflow-hidden flex items-center gap-2 text-[clamp(.5rem,1vw+.25rem,.8rem)] 2xl:text-[.9rem] text-white"
          >
            <span className="absolute rounded-l-lg shadow-md left-0 bottom-0 w-1/3 h-full inline-flex justify-center items-center bg-cardBorder text-[clamp(1.1rem,1.75vw+.3rem,2rem)]">
              <span className="rounded-full bg-buttonBg p-1 md:p-1.5 shadow-lg">
                {icon}
              </span>
            </span>
            <p className="text-text text-xs truncate lg:text-sm relative left-1/3 font-bold font-Space">
              {name}
            </p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="section-style pb-[20px] border-divider">
      <HeroTitle state={true} title={`<SKILLS>`} />
      <div className="px-5 max-md:px-2 py-4 shadow-md">
        <div className="relative">
          <h3 className="col-span-full font-medium small-body mb-4 text-text">
            These are the skills and tools I use to build fast, responsive, and
            beautiful UIs. I'm always eager to learn more in this fast-paced
            industry.
          </h3>

          <SkillGroup title="Frontend" skills={frontend} />
          <span className="section-divider" />
          <SkillGroup title="Backend & CS" skills={backend} />
          <span className="section-divider" />
          <SkillGroup title="Tools & Platforms" skills={tools} />
        </div>
      </div>
      <HeroTitle state={false} title={`</SKILLS>`} />
    </section>
  );
}
