import { FaArrowUp, FaGithub } from 'react-icons/fa'

const CardButtons = ({project}) => {
  return (
    <div className="flex gap-2.5 sm:justify-between p-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 ring-style rounded-lg text-buttonText group font-bold small-body shadow-[0_2px_4px_var(--shadow)]  transition-all duration-300 hover:shadow-lg bg-buttonBg hover:bg-buttonHover flex items-center gap-1"
                >
                  Live
                  <FaArrowUp className="rotate-45 main-trans group-hover:translate-x-1  group-hover:-translate-y-1" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg font-medium small-body border border-primary text-primary shadow-[0_2px_4px_var(--shadow)] transition-all duration-300 hover:shadow-lg  group flex items-center gap-2"
                >
                  Code
                  <FaGithub className=" main-trans group-hover:scale-105 " />
                </a>
              </div>
  )
}

export default CardButtons
