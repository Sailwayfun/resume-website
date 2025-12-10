interface SectionHeadProps {
  title: string;
  desc: string;
}

export function SectionHead({ title, desc }: SectionHeadProps) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
