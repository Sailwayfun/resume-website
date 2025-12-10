import { SectionHead } from '../SectionHead';
import type { FC } from 'react';

interface EducationItem {
  time: string;
  title: string;
  desc: string;
  label?: string;
}

interface EducationProps {
  title: string;
  desc: string;
  items: EducationItem[];
}

export const Education: FC<EducationProps> = ({ title, desc, items }) => {
  return (
    <section
      id="education"
      className="mt-9 border rounded-2xl p-6 shadow-[var(--shadow)]"
      style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'var(--border)' }}
    >
      <SectionHead title={title} desc={desc} />
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
      >
        {items.map((item, idx) => (
          <div
            key={`${item.title}-${idx}`}
            className="border rounded-xl p-4"
            style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.02)' }}
          >
            <p className="text-[13px] text-[var(--muted)] m-0 mb-1">{item.label || item.time}</p>
            <h3 className="m-0 mb-2">{item.title}</h3>
            <p className="m-0 text-[var(--muted)]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
