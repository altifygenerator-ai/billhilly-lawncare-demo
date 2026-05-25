type SectionHeadingProps = {
  kicker: string;
  title: string;
  text?: string;
  light?: boolean;
};

export default function SectionHeading({
  kicker,
  title,
  text,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={light ? "section-heading light-heading" : "section-heading"}>
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}