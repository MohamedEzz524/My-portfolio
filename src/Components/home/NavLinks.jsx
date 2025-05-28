import { AnimatedSection } from "../AnimatedSection";
import { useSectionObserver } from "../../hooks/useSectionObserver";

const sections = ["about", "skills", "projects", "contact"];

const NavLinks = () => {
  const activeLink = useSectionObserver(sections); // ✅ clean, minimal

  return (
    <>
      {/* Large Screen */}
      <div className="lg:flex gap-4 relative hidden">
        <AnimatedSection className="relative w-[2px] h-48 bg-linkHover" />

        <div className="flex flex-col gap-[20px]">
          {sections.map((item, i) => (
            <NavItem
              i={i}
              key={item}
              item={item}
              activeLink={activeLink}
              isMobile={false}
            />
          ))}
        </div>
      </div>

      {/* Small Screens */}
      <div className="fixed lg:hidden top-1/2 right-4 -translate-y-1/2 flex flex-col items-center gap-1.5 z-[99]">
        {sections.map((item, i) => (
          <NavItem
            key={item}
            item={item}
            activeLink={activeLink}
            isMobile={true}
          />
        ))}
      </div>
    </>
  );
};

export default NavLinks;

// ⬇️ NavItem Component
const NavItem = ({ item, activeLink, isMobile, i }) => (
  <AnimatedSection key={item + i} delay={0.1 * i}>
    <div className="text-link relative group">
      {isMobile && (
        <span
          aria-hidden={!isMobile}
          role="tooltip"
          className="absolute left-0 -translate-x-[150%] rounded-md shadow-md p-1 bg-border small-body opacity-0 pointer-events-none main-trans group-hover:opacity-90 group-hover:-translate-x-[120%]"
        >
          {item}
          <span className="w-0 h-0 absolute right-0 top-1/2 translate-x-full -translate-y-1/2 border-4 border-transparent  border-l-border "></span>
        </span>
      )}
      <a
        href={`#${item}`}
        className={`main-trans group cursor-pointer text-[clamp(1rem,1.2vw+.1rem,1.2rem)] flex items-center font-medium w-fit
          ${
            isMobile
              ? activeLink === item
                ? "text-linkActive pointer-events-none"
                : "text-link hover:text-linkHover"
              : `${
                  activeLink === item
                    ? "translate-x-5 text-linkActive before:-left-[36px] before:w-8"
                    : "text-link hover:text-linkHover hover:before:-left-[36px] hover:translate-x-5 before:w-5 hover:before:w-8"
                }
              before:absolute before:content-[''] before:bottom-[-1px] before:-left-[18px] before:h-[2px] before:bg-linkHover before:rounded-full before:main-trans`
          }`}
        aria-current={activeLink === item ? "page" : undefined}
      >
        &lt;{" "}
        <span
          className={`ml-1 main-trans hover:mr-1.5 ${
            activeLink === item ? "mr-1" : ""
          }`}
        />
        {!isMobile && item.toUpperCase()}
        <span
          className={`${
            activeLink === item
              ? "opacity-100 translate-x-0 translate-y-0 rotate-[360deg]"
              : "opacity-0 translate-x-full -translate-y-full group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-[360deg]"
          } main-trans`}
        >
          /
        </span>
        &gt;
      </a>
    </div>
  </AnimatedSection>
);
