import { SectionHead } from '../SectionHead';
import { TechStrip } from '../TechStrip';

interface SkillItem {
  label: string;
  tags: string[];
}

interface SkillsProps {
  title: string;
  desc: string;
  items: SkillItem[];
}

export function Skills({ title, desc, items }: SkillsProps) {
  return (
    <section className="section" id="skills">
      <SectionHead title={title} desc={desc} />
      <TechStrip />
      <div className="skill-grid">
        {items.map((item) => (
          <div className="skill-card" key={item.label}>
            <p className="label">{item.label}</p>
            <div className="tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
