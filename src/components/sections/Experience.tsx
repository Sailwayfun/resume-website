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
    <section className="section" id="experience">
      <SectionHead title={title} desc={desc} />
      <div className="timeline">
        {items.map((item, idx) => (
          <article className={`exp-card ${item.compact ? 'compact' : ''}`} key={`${item.role}-${idx}`}>
            <div className="exp-meta">
              <p className="label">{item.time}</p>
              <p className="label">{item.place}</p>
            </div>
            <h3>{item.role}</h3>
            {item.listHtml ? <ul dangerouslySetInnerHTML={{ __html: item.listHtml }} /> : null}
            {item.desc ? <p className="muted">{item.desc}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
};
