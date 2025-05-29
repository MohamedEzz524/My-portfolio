import { FaBriefcase, FaFileDownload } from "react-icons/fa";
const CV_PATH = process.env.PUBLIC_URL + "/documents/MohamedE._CV.pdf";

const Buttons = () => {
  return (
    <div className=" flex gap-5 max-sm:gap-3 py-2 small-body">
      <a
        href="mailto:moelsayed524@gmail.com?subject=Contact"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-[min(5%,1rem)] main-trans ring-style py-2 shadow-lg rounded-lg text-text font-semibold bg-white/10 backdrop-blur-cardBlur hover:bg-white/20 "
      >
        <FaBriefcase className="inline-block mr-2 text-xl" />
        Hire Me
      </a>

      <a
        href={CV_PATH}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-[min(5%,1rem)] main-trans ring-style py-2 rounded-lg bg-buttonBg text-buttonText hover:bg-buttonHover font-semibold shadow-lg"
      >
        <FaFileDownload className="inline-block mr-2 " />
        Print CV
      </a>
    </div>
  );
};

export default Buttons;
