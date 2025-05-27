export default function TextAnimation({ text, type = " ", animation, delay }) {
  return (
    <>
      {text.split(type).map((e, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * delay}s` }}
          className={`inline-block animate-${animation} `}
        >
          {type === " " ? e + "\u00A0 " : e === " " ? "\u00A0" : e}
        </span>
      ))}
    </>
  );
}
