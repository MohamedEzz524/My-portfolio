import Label from "../Components/Label.jsx";
import { links } from "../Data_Center.js";
import Buttons from "../Components/home/Buttons.jsx";
import Heading from "../Components/home/Heading.jsx";
import NavLinks from "../Components/home/NavLinks.jsx";
import { AnimatedSection } from "../Components/AnimatedSection.jsx";

export default function Home() {
  return (
    <section id="home" className="h-full">
      <div className="flex flex-col justify-between h-full lg:gap-[50px] gap-[20px] px-2 max-lg:mb-[3rem]">
        {/* Heading */}
        <Heading />

        {/* Nav - Links */}
        <NavLinks />

        {/* Hire - CV */}
        <Buttons />

        {/* Socials Hidden On Small */}
        <div className="mt-auto lg:block hidden">
          <div className="mt-auto w-full flex items-center gap-3 py-2 h-fit flex-wrap  ">
            {links.map((l, i) => (
              <AnimatedSection delay={0.05 * i} key={l.id}>
                <a
                  href={l.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cursor-pointer  relative group text-primary flex items-center card-style"
                >
                  {l.icon}
                  <Label text={l.label} />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
