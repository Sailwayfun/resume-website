interface SectionHeadProps {
  title: string;
  desc: string;
}

export function SectionHead({ title, desc }: SectionHeadProps) {
  return (
    <div className="mb-4">
      <h2 className="text-[24px] font-semibold m-0">{title}</h2>
      <p className="mt-2 mb-4 text-[var(--muted)]">{desc}</p>
    </div>
  );
}
