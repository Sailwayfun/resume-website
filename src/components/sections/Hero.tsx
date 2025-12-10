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

function SailSvg() {
  return (
    <div className="pointer-events-none absolute -right-10 -bottom-12 opacity-40">
      <svg
        width="360"
        height="280"
        viewBox="0 0 360 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="junk-sail-a"
            x1="50"
            y1="12"
            x2="200"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--accent-strong)" stopOpacity="0.96" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0.28" />
          </linearGradient>
          <linearGradient
            id="junk-sail-b"
            x1="140"
            y1="26"
            x2="300"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--accent-strong)" stopOpacity="0.88" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0.22" />
          </linearGradient>
          <linearGradient
            id="junk-hull"
            x1="150"
            y1="212"
            x2="280"
            y2="234"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--accent-strong)" stopOpacity="0.7" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <path
          d="M150 26c-1 0-2 .4-2.6 1l-66 94c-.7.9-.1 2.2.9 2.3l68 11.5c1 .2 2-.6 2-1.6V28c0-1.1-.9-2-2-2Z"
          fill="url(#junk-sail-a)"
        />
        <path
          d="M198 36c0-1 .8-1.8 1.8-1.6l86 18c.9.2 1.6 1 1.6 1.9v106c0 1.3-1.5 2.2-2.8 1.6l-86-44c-.6-.3-.9-.9-.9-1.6V36Z"
          fill="url(#junk-sail-b)"
        />
        <path d="M126 96c34 7 94 6 140-14" stroke="rgba(233,236,245,0.42)" strokeWidth="2.4" />
        <path d="M118 112c38 7.5 102 10 154-10" stroke="rgba(233,236,245,0.36)" strokeWidth="2.4" />
        <path d="M110 128c40 8.5 112 16 166-6" stroke="rgba(233,236,245,0.32)" strokeWidth="2.2" />
        <path d="M104 144c42 9 120 22 178-2" stroke="rgba(233,236,245,0.26)" strokeWidth="2.1" />
        <path d="M98 160c44 9.5 128 28 190 8" stroke="rgba(233,236,245,0.2)" strokeWidth="2" />
        <path
          d="M152 96v120"
          stroke="rgba(233,236,245,0.9)"
          strokeWidth="3.3"
          strokeLinecap="round"
        />
        <path
          d="M170 208h114c1.3 0 1.7 1.7.5 2.3-36 15-74.6 20.5-116.6 16-14-1.5-29.2-5.8-48.2-9.6-1.4-.3-1.5-2.3-.1-2.8 21.6-5.2 35.8-6.1 49.4-5.9Z"
          fill="url(#junk-hull)"
        />
        <circle cx="152" cy="96" r="5.2" fill="rgba(233,236,245,0.95)" />
        <circle cx="254" cy="168" r="3.6" fill="rgba(233,236,245,0.95)" />
        <path
          d="M116 220c40 14.5 110 24 182-6"
          stroke="rgba(125,240,218,0.34)"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M104 238c36 13 126 22 206-6"
          stroke="rgba(125,240,218,0.2)"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
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
      className="relative overflow-hidden bg-[rgba(255,255,255,0.02)] border rounded-[28px] p-7 shadow-[var(--shadow)]"
      style={{ borderColor: 'var(--border)' }}
    >
      <SailSvg />
      <p
        className="text-[13px] font-semibold tracking-[0.05em] uppercase text-[var(--accent-strong)] mb-2"
        dangerouslySetInnerHTML={{ __html: eyebrow }}
      />
      <h1
        className="m-0 text-[36px] tracking-wide flex gap-2 items-baseline"
        dangerouslySetInnerHTML={{ __html: nameHtml }}
      />
      <p className="mt-3 mb-5 text-[var(--muted)]" dangerouslySetInnerHTML={{ __html: ledeHtml }} />
      <div className="flex flex-wrap gap-3 my-4">
        <div
          className="flex items-center gap-3 px-3 py-3 rounded-xl min-w-[240px]"
          style={metaBoxStyle}
        >
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
        <div
          className="flex items-center gap-3 px-3 py-3 rounded-xl min-w-[240px]"
          style={metaBoxStyle}
        >
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
        <div
          className="flex items-center gap-3 px-3 py-3 rounded-xl min-w-[240px]"
          style={metaBoxStyle}
        >
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
        <div
          className="flex items-center gap-3 px-3 py-3 rounded-xl min-w-[240px]"
          style={metaBoxStyle}
        >
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
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent-strong))',
            color: 'var(--bg)',
          }}
          href="mailto:liaoleon000513@gmail.com"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
};
