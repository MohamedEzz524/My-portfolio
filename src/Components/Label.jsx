export default function Label({ text }) {
  return (
    <span className="absolute pointer-events-none text-lg w-fit px-2 py-.5 bg-shadow left-1/2 top-0 -translate-x-1/2 -translate-y-[200%] opacity-0 group-hover:-translate-y-[160%] group-hover:opacity-100 main-trans">
      {text}
      <span className="absolute w-0 h-0 bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-[10px] border-transparent border-t-shadow"></span>
    </span>
  );
}
