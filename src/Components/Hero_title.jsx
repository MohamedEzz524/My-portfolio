export default function HeroTitle({ title }) {
  return (
    <p className="text-sectionTitle font-bold text-[clamp(1rem,2vw+.1rem,1.5rem)] pb-2 ">
      {`${title}`}
    </p>
  );
}
