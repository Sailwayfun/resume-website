import { SectionHead } from '../SectionHead';
import type { FC } from 'react';

interface ExperienceItem {
  time: string;
  place: string;
  role: string;
  listHtml?: string;
  desc?: string;
  compact?: boolean;
}

interface ExperienceProps {
  title: string;
  desc: string;
  items: ExperienceItem[];
}

export const Experience: FC<ExperienceProps> = ({ title, desc, items }) => {
  return (
    <section
      id="experience"
      className="mt-9 border rounded-2xl p-6 shadow-[var(--shadow)]"
      style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'var(--border)' }}>
      <SectionHead title={title} desc={desc} />
      <div className="flex flex-col gap-3">
        {items.map((item, idx) => (
          <article
            key={`${item.role}-${idx}`}
            className="border rounded-xl p-5"
            style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.02)' }}>
            <div className="flex justify-between flex-wrap gap-2 text-[13px] text-[var(--muted)]">
              <p className="m-0">{item.time}</p>
              <p className="m-0">{item.place}</p>
            </div>
            <h3 className="mt-2 mb-3 text-lg font-semibold">{item.role}</h3>
            {item.listHtml ? (
              <ul className="mt-0 pl-5 text-[var(--muted)] space-y-2" dangerouslySetInnerHTML={{ __html: item.listHtml }} />
            ) : null}
            {item.desc ? <p className="text-[var(--muted)] mt-2 mb-0 leading-relaxed">{item.desc}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
};
