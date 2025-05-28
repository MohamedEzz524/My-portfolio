const FilterWork = ({ active, setActive, data }) => {
  return (
    <div className="w-full flex justify-center gap-2 text-base md:text-xl my-2.5">
      {data.map((filter) => (
        <button
          key={filter}
          className={`
        relative p-2 font-mono
        ${
          active === filter
            ? "text-primary font-bold"
            : "text-primary opacity-60 hover:opacity-90"
        }
        transition-all duration-300
        before:content-['//'] before:mr-1
        after:absolute after:bottom-0
        after:w-0 after:h-[2px] after:left-1/2 after:-translate-x-1/2
        after:bg-gradient-to-r from-transparent via-primary to-transparent
        after:transition-all after:duration-500
        ${active === filter ? "after:w-3/4" : "hover:after:w-1/2"}
        active:scale-[97%]
      `}
          onClick={() => setActive(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterWork;
