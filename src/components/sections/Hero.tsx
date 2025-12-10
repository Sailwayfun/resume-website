import { ContactLines } from '../ContactLines';
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
  return (
    <section className="hero" id="top">
      <p className="eyebrow" dangerouslySetInnerHTML={{ __html: eyebrow }} />
      <h1 dangerouslySetInnerHTML={{ __html: nameHtml }} />
      <p className="lede" dangerouslySetInnerHTML={{ __html: ledeHtml }} />
      <div className="meta-row">
        <div className="meta-item">
          <div className="meta-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 2.5c-3.5 0-6.5 2.8-6.5 6.4 0 4.9 6.5 12.6 6.5 12.6s6.5-7.7 6.5-12.6c0-3.6-3-6.4-6.5-6.4Zm0 9.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" />
            </svg>
          </div>
          <div>
            <p className="label">{locationLabel}</p>
            <p className="value">{locationValue}</p>
          </div>
        </div>
        <div className="meta-item">
          <div className="meta-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M4.5 6.2 10 10c1.2.8 2.8.8 4 0l5.5-3.8c.3-.2.5-.5.5-.9 0-.7-.6-1.3-1.3-1.3H5.3C4.6 4 4 4.6 4 5.3c0 .3.2.7.5.9ZM20 8.3l-4.7 3.3a4.8 4.8 0 0 1-5.6 0L5 8.3V16c0 1 .8 1.8 1.8 1.8h11.4c1 0 1.8-.8 1.8-1.8V8.3Z" />
            </svg>
          </div>
          <div>
            <p className="label">{contactLabel}</p>
            <ContactLines email={contactEmail} phone={contactPhone} />
          </div>
        </div>
        <div className="meta-item">
          <div className="meta-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M4 6.5c0-.8.7-1.5 1.5-1.5h13c.8 0 1.5.7 1.5 1.5v2.1c0 .6-.4 1.2-1 1.4l-5.9 2.1a3 3 0 0 1-2.2 0L5 10c-.6-.2-1-.8-1-1.4V6.5Zm0 6.1c0-.7.7-1.2 1.3-.9l6.5 2.7c.2.1.4.1.6 0l6.3-2.6c.7-.3 1.4.2 1.4.9v2.2c0 .6-.4 1.2-1 1.4l-6.7 2.7c-.8.3-1.6.3-2.4 0l-6.7-2.7c-.6-.2-1-.8-1-1.4v-2.3Z" />
            </svg>
          </div>
          <div>
            <p className="label">{titleLabel}</p>
            <p className="value">{titleValue}</p>
          </div>
        </div>
        <div className="meta-item">
          <div className="meta-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 3.5A8.5 8.5 0 1 1 3.5 12 8.5 8.5 0 0 1 12 3.5Zm0 2a6.5 6.5 0 0 0-6.3 5h3.2c.1-1 .5-1.8 1.2-2.5.5-.5 1.2-.9 1.9-1.1V5.5Zm1.5 0v2.4c.7.2 1.4.6 1.9 1.1.7.7 1.1 1.5 1.2 2.5h3.2a6.5 6.5 0 0 0-6.3-5Zm-4.5 7H5.5a6.5 6.5 0 0 0 6.4 5v-2.4c-.7-.2-1.4-.6-1.9-1.1-.7-.7-1.1-1.5-1.1-2.5Zm6 0c0 1-.4 1.8-1.1 2.5a3.7 3.7 0 0 1-1.9 1.1V18a6.5 6.5 0 0 0 6.4-5h-3.4Z" />
            </svg>
          </div>
          <div>
            <p className="label">{langLabel}</p>
            <p className="value">{langValue}</p>
          </div>
        </div>
      </div>
      <div className="cta-row">
        <a className="primary" href="mailto:liaoleon000513@gmail.com">
          {ctaLabel}
        </a>
      </div>
    </section>
  );
};
