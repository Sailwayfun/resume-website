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
    <section className="section" id="education">
      <SectionHead title={title} desc={desc} />
      <div className="edu-grid">
        {items.map((item, idx) => (
          <div className="edu-card" key={`${item.title}-${idx}`}>
            <p className="label">{item.label || item.time}</p>
            <h3>{item.title}</h3>
            <p className="muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
