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
    <section
      className="mt-9 border rounded-2xl p-6 shadow-[var(--shadow)]"
      style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'var(--border)' }}
      id="skills">
      <SectionHead title={title} desc={desc} />
      <TechStrip />
      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {items.map((item) => (
          <div
            key={item.label}
            className="border rounded-xl p-4"
            style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.02)' }}>
            <p className="text-[13px] text-[var(--muted)] m-0 mb-2">{item.label}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold border"
                  style={{
                    background: 'rgba(77, 212, 182, 0.12)',
                    color: 'var(--accent-strong)',
                    borderColor: 'rgba(77, 212, 182, 0.24)',
                  }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
