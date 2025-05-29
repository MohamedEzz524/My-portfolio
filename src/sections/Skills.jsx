import HeroTitle from "../Components/Hero_title";
import { frontend, backend, tools } from "../Data_Center";
import { AnimatedSection } from "../Components/AnimatedSection";
import { useMemo, useState } from "react";
import FilterWork from "../Components/FilterWork";

const SkillGroup = ({ skills }) => (
  <div className="mb-6 group  min-h-[300px]">
    {/* Skill header */}
    <div className="col-span-full mb-2 py-2"></div>
    <div className="main-trans  grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 2xl:grid-cols-4 gap-3 max-md:gap-2">
      {skills.map(({ id, icon, name }, i) => (
        <AnimatedSection
          delay={0.01 * i}
          key={id + name}
          title={name}
          className="bg-cardBg group-hover:before:opacity-100 skill-item  px-4 py-3 rounded-lg border border-cardBorder shadow-md overflow-hidden flex items-center gap-2 text-[clamp(.5rem,1vw+.25rem,.8rem)] 2xl:text-[.9rem] text-white"
        >
          <div className="absolute left-0 bottom-0 w-1/3 h-full inline-flex justify-center items-center bg-cardBorder text-[clamp(1.1rem,1.75vw+.3rem,2rem)] rounded-lg bg-buttonBg p-1 md:p-1.5 shadow-lg">
            {icon}
          </div>
          <p className="text-text text-xs truncate lg:text-sm relative left-1/3 font-bold font-Space">
            {name}
          </p>
        </AnimatedSection>
      ))}
    </div>
  </div>
);

const filters = ["FRONTEND", "BACKEND", "TOOLS"];
export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("FRONTEND");

  const filteredSkills = useMemo(() => {
    return activeFilter === "BACKEND"
      ? backend
      : activeFilter === "TOOLS"
      ? tools
      : frontend;
  }, [activeFilter]);

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

          <div className="max-md:px-2 py-4 flex flex-col gap-5">
            <FilterWork
              data={filters}
              active={activeFilter}
              setActive={setActiveFilter}
            />

            <SkillGroup skills={filteredSkills} />
            <span className="section-divider" />
          </div>
        </div>
      </div>
      <HeroTitle state={false} title={`</SKILLS>`} />
    </section>
  );
}
