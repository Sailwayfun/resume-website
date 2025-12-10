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
    <section className="section" id="projects">
      <SectionHead title={title} desc={desc} />
      <div className="project-grid">
        {items.map((item) => (
          <article className="project-card" key={item.title}>
            <div className="project-head">
              <div>
                <p className="label">{item.time}</p>
                <h3>{item.title}</h3>
              </div>
              <span className="chip">{item.chip}</span>
            </div>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
