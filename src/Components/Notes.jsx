import { notes } from "../Data_Center";

const Notes = () => {
  return (
    <div
      className="p-6 mb-4 rounded-2xl border backdrop-blur-md animate-fade-bottom transition-all
          bg-cardBg border-cardBorder shadow-[0_4px_15px_var(--card-glow)] text-text"
    >
      <div className="flex flex-col gap-3 small-body">
        <p className="mb-4 big-body leading-relaxed ">
          <strong>Note:</strong> There are many more apps uploaded on GitHub,
          including problem-solving solutions and competitive programming work.
          Explore them through these links.
        </p>
        {notes.map(({ id, title, link }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="font-semibold main-trans text-link hover:text-linkHover hover:translate-x-1"
          >
            ➔ {title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Notes;
