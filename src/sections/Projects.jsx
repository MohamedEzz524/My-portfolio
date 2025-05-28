import HeroTitle from "../Components/Hero_title";
import { websites, apps } from "../Data_Center";
import { AnimatedSection } from "../Components/AnimatedSection";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import CardButtons from "../Components/projects/CardButtons";
import Notes from "../Components/Notes";
import { FaArrowDownAZ, FaArrowDownZA } from "react-icons/fa6";
import FilterWork from "../Components/projects/FilterWork";

const allData = [apps, websites];
const projectsFilters = ["ALL", "Websites", "Apps"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeSort, setActiveSort] = useState("Newest");

  const filteredData = useMemo(() => {
    return activeFilter === "Apps"
      ? allData[0]
      : activeFilter === "Websites"
      ? allData[1]
      : [...allData[0], ...allData[1]];
  }, [activeFilter]);

  const sortedData = useMemo(() => {
    const current = [...filteredData];
    return activeSort === "Newest" ? current : [...current].reverse();
  }, [filteredData, activeSort]);

  return (
    <section id="projects" className="section-style pb-[20px] border-divider">
      <HeroTitle title={`<PROJECTS>`} />

      <div className="max-md:px-2 py-4 flex flex-col gap-5 ">
        <FilterWork
          data={projectsFilters}
          active={activeFilter}
          setActive={setActiveFilter}
        />

        {/* MyWork */}
        <div className="flex items-center justify-between gap-1 text-mainTitle">
          <div className="flex items-center gap-2">
            Viewing:
            <span className="text-sectionTitle title-body py-1 px-4 rounded-full bg-cardBg font-semibold underline underline-offset-2">
              {activeFilter}
            </span>
            <span className="text-sectionTitle title-body py-1 px-4 rounded-full bg-cardBg font-semibold underline underline-offset-2">
              {activeSort}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 rounded-full hover:bg-cardBg cursor-pointer transition-colors duration-300 ease-out active:opacity-80"
            onClick={() =>
              setActiveSort((prev) => (prev === "Newest" ? "Oldest" : "Newest"))
            }
          >
            {activeSort === "Oldest" ? (
              <FaArrowDownZA size={24} />
            ) : (
              <FaArrowDownAZ size={24} />
            )}
          </motion.div>
        </div>

        {sortedData.map((project, i) => (
          <ProjectCard key={project.id} project={project} i={i} />
        ))}

        <span className="section-divider"></span>

        {/* Notes */}
        <Notes />
      </div>

      <HeroTitle title={`</PROJECTS>`} />
    </section>
  );
}

const ProjectCard = ({ project, i }) => {
  return (
    <AnimatedSection>
      <div
        className={` flex flex-col gap-2.5 border-divider group items-start relative z-[1] rounded-lg main-trans shadow-lg text-[clamp(0.9rem,1vw+0.3rem,1.1rem)] `}
      >
        {/* Device Mockups - Left Column */}
        <div className="flex flex-col sm:flex-row gap-2.5 max-sm:card-style">
          <div className="flex flex-col gap-2.5 sm:w-52 ">
            <div className="relative">
              <div className="desktop-mockup w-full h-full rounded-lg overflow-hidden shadow-xl border-[6px] border-[#374151]">
                <img
                  src={project.large}
                  alt={`${project.title} desktop view`}
                  loading="lazy"
                  decoding="async"
                  className={` w-full object-cover transition-opacity duration-300 group-hover:opacity-100 opacity-80`}
                />
              </div>

              <div className="mobile-mockup z-10 absolute bottom-1 rotate-2 right-1 max-sm:w-14 w-10 h-auto border-4 border-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src={project.small}
                  loading="lazy"
                  decoding="async"
                  alt={`${project.title} mobile view`}
                  className={`w-full h-auto object-cover transition-brightness duration-300 `}
                />
              </div>
            </div>

            {/* Buttons */}
            <CardButtons project={project} />
          </div>

          {/* Desc */}
          <div className="sm:card-style group-hover:before:opacity-100 space-y-2">
            <h3 className="underline font-semibold text-primary title-body">
              {project.title}
            </h3>
            <p className="opacity-90 big-body text-text font-medium">
              {project.desc}
            </p>
          </div>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap w-full gap-2.5 items-center bg-cardBg group  rounded-xl p-4 justify-between">
          <div className="flex flex-wrap justify-end flex-1 gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="tool-style">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {i !== websites.length - 1 && <span className="section-divider"></span>}
    </AnimatedSection>
  );
};
