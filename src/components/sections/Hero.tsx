import { ContactLines } from '../ContactLines';
import { IconBadge } from '../IconBadge';
import type { FC } from 'react';

interface HeroProps {
  eyebrow: string;
  nameHtml: string;
  ledeHtml: string;
  locationLabel: string;
  locationValue: string;
  contactLabel: string;
  contactEmail: string;
  contactPhone: string;
  titleLabel: string;
  titleValue: string;
  langLabel: string;
  langValue: string;
  ctaLabel: string;
}

export const Hero: FC<HeroProps> = ({
  eyebrow,
  nameHtml,
  ledeHtml,
  locationLabel,
  locationValue,
  contactLabel,
  contactEmail,
  contactPhone,
  titleLabel,
  titleValue,
  langLabel,
  langValue,
  ctaLabel,
}) => {
  const metaBoxStyle = { border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)' };

  return (
    <section
      id="top"
      className="bg-[rgba(255,255,255,0.02)] border rounded-[28px] p-7 shadow-[var(--shadow)]"
      style={{ borderColor: 'var(--border)' }}>
      <p
        className="text-[13px] font-semibold tracking-[0.05em] uppercase text-[var(--accent-strong)] mb-2"
        dangerouslySetInnerHTML={{ __html: eyebrow }}
      />
      <h1 className="m-0 text-[36px] tracking-wide flex gap-2 items-baseline" dangerouslySetInnerHTML={{ __html: nameHtml }} />
      <p className="mt-3 mb-5 text-[var(--muted)]" dangerouslySetInnerHTML={{ __html: ledeHtml }} />
      <div className="flex flex-wrap gap-3 my-4">
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl min-w-[240px]" style={metaBoxStyle}>
          <IconBadge size="sm">
            <svg className="w-[18px] h-[18px] fill-[var(--accent-strong)]" viewBox="0 0 24 24">
              <path d="M12 2.5c-3.5 0-6.5 2.8-6.5 6.4 0 4.9 6.5 12.6 6.5 12.6s6.5-7.7 6.5-12.6c0-3.6-3-6.4-6.5-6.4Zm0 9.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" />
            </svg>
          </IconBadge>
          <div>
            <p className="text-[13px] text-[var(--muted)] m-0 mb-1">{locationLabel}</p>
            <p className="m-0 font-semibold leading-6">{locationValue}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl min-w-[240px]" style={metaBoxStyle}>
          <IconBadge size="sm">
            <svg className="w-[18px] h-[18px] fill-[var(--accent-strong)]" viewBox="0 0 24 24">
              <path d="M4.5 6.2 10 10c1.2.8 2.8.8 4 0l5.5-3.8c.3-.2.5-.5.5-.9 0-.7-.6-1.3-1.3-1.3H5.3C4.6 4 4 4.6 4 5.3c0 .3.2.7.5.9ZM20 8.3l-4.7 3.3a4.8 4.8 0 0 1-5.6 0L5 8.3V16c0 1 .8 1.8 1.8 1.8h11.4c1 0 1.8-.8 1.8-1.8V8.3Z" />
            </svg>
          </IconBadge>
          <div>
            <p className="text-[13px] text-[var(--muted)] m-0 mb-1">{contactLabel}</p>
            <ContactLines email={contactEmail} phone={contactPhone} />
          </div>
        </div>
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl min-w-[240px]" style={metaBoxStyle}>
          <IconBadge size="sm">
            <svg className="w-[18px] h-[18px] fill-[var(--accent-strong)]" viewBox="0 0 24 24">
              <path d="M4 6.5c0-.8.7-1.5 1.5-1.5h13c.8 0 1.5.7 1.5 1.5v2.1c0 .6-.4 1.2-1 1.4l-5.9 2.1a3 3 0 0 1-2.2 0L5 10c-.6-.2-1-.8-1-1.4V6.5Zm0 6.1c0-.7.7-1.2 1.3-.9l6.5 2.7c.2.1.4.1.6 0l6.3-2.6c.7-.3 1.4.2 1.4.9v2.2c0 .6-.4 1.2-1 1.4l-6.7 2.7c-.8.3-1.6.3-2.4 0l-6.7-2.7c-.6-.2-1-.8-1-1.4v-2.3Z" />
            </svg>
          </IconBadge>
          <div>
            <p className="text-[13px] text-[var(--muted)] m-0 mb-1">{titleLabel}</p>
            <p className="m-0 font-semibold leading-6">{titleValue}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl min-w-[240px]" style={metaBoxStyle}>
          <IconBadge size="sm">
            <svg className="w-[18px] h-[18px] fill-[var(--accent-strong)]" viewBox="0 0 24 24">
              <path d="M12 3.5A8.5 8.5 0 1 1 3.5 12 8.5 8.5 0 0 1 12 3.5Zm0 2a6.5 6.5 0 0 0-6.3 5h3.2c.1-1 .5-1.8 1.2-2.5.5-.5 1.2-.9 1.9-1.1V5.5Zm1.5 0v2.4c.7.2 1.4.6 1.9 1.1.7.7 1.1 1.5 1.2 2.5h3.2a6.5 6.5 0 0 0-6.3-5Zm-4.5 7H5.5a6.5 6.5 0 0 0 6.4 5v-2.4c-.7-.2-1.4-.6-1.9-1.1-.7-.7-1.1-1.5-1.1-2.5Zm6 0c0 1-.4 1.8-1.1 2.5a3.7 3.7 0 0 1-1.9 1.1V18a6.5 6.5 0 0 0 6.4-5h-3.4Z" />
            </svg>
          </IconBadge>
          <div>
            <p className="text-[13px] text-[var(--muted)] m-0 mb-1">{langLabel}</p>
            <p className="m-0 font-semibold leading-6">{langValue}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 flex-wrap">
        <a
          className="inline-flex items-center gap-2 rounded-xl px-4 py-3 font-semibold shadow-[0_14px_28px_rgba(77,212,182,0.26)]"
          style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-strong))', color: 'var(--bg)' }}
          href="mailto:liaoleon000513@gmail.com">
          {ctaLabel}
        </a>
      </div>
    </section>
  );
};
