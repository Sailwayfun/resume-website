import { SectionHead } from '../SectionHead';
import type { FC } from 'react';

interface ProjectItem {
  time: string;
  title: string;
  desc: string;
  chip: string;
}

interface ProjectsProps {
  title: string;
  desc: string;
  items: ProjectItem[];
}

export const Projects: FC<ProjectsProps> = ({ title, desc, items }) => {
  return (
    <section
      id="projects"
      className="mt-9 border rounded-2xl p-6 shadow-[var(--shadow)]"
      style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'var(--border)' }}>
      <SectionHead title={title} desc={desc} />
      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {items.map((item) => (
          <article
            key={item.title}
            className="border rounded-xl p-4"
            style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.02)' }}>
            <div className="flex justify-between gap-3 items-center flex-wrap">
              <div>
                <p className="text-[13px] text-[var(--muted)] m-0 mb-1">{item.time}</p>
                <h3 className="m-0">{item.title}</h3>
              </div>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold border"
                style={{
                  background: 'rgba(77, 212, 182, 0.12)',
                  color: 'var(--accent-strong)',
                  borderColor: 'rgba(77, 212, 182, 0.24)',
                }}>
                {item.chip}
              </span>
            </div>
            <p className="mt-2 mb-0 text-[var(--muted)]">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
