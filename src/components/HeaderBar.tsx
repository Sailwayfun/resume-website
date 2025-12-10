import type { Lang } from '../types';

type ThemeMode = 'light' | 'dark';

interface NavItem {
  href: string;
  label: string;
}

interface HeaderBarProps {
  theme: ThemeMode;
  lang: Lang;
  nav: NavItem[];
  toggleTheme: () => void;
  toggleLang: () => void;
}

export function HeaderBar({ theme, lang, nav, toggleTheme, toggleLang }: HeaderBarProps) {
  const baseButtonStyle = {
    borderColor: 'var(--border)',
    background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)',
    color: theme === 'dark' ? 'var(--accent-strong)' : 'var(--text)',
    boxShadow: theme === 'dark' ? '0 10px 26px rgba(77,212,182,0.35)' : '0 8px 18px rgba(0,0,0,0.08)',
  };

  return (
    <header
      className="sticky top-0 backdrop-blur-md border rounded-full px-5 py-3 mb-7 flex items-center gap-4 justify-between shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
      style={{ background: 'var(--panel)', borderColor: 'var(--border)' }}>
      <div className="font-bold tracking-[0.04em] uppercase text-[var(--text)]">Sail Liao</div>
      <nav className="flex gap-3 flex-1 justify-center flex-wrap">
        {nav.map((item) => (
          <a
            key={item.href}
            className="px-3 py-2 rounded-full text-[var(--muted)] hover:text-[var(--accent-strong)] hover:bg-[rgba(255,255,255,0.04)] transition"
            href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2" aria-label="社群連結">
        <a
          className="w-10 h-10 grid place-items-center rounded-xl border transition hover:-translate-y-[1px]"
          style={baseButtonStyle}
          href="https://github.com/Sailwayfun"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.6-.2.6-.4v-1.5c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.7 2.5 1.2 3.1.9.1-.7.4-1.2.7-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2.1 1-2.9-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3.9 0 1.7.1 2.5.3 2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.8 1 1.8 1 2.9 0 3.9-2.4 4.7-4.6 5 .4.3.8 1 .8 2.1v3.1c0 .2.1.5.6.4 4-1.3 6.9-5.1 6.9-9.6C22 6.6 17.5 2 12 2Z" />
          </svg>
        </a>
        <a
          className="w-10 h-10 grid place-items-center rounded-xl border transition hover:-translate-y-[1px]"
          style={baseButtonStyle}
          href="https://www.linkedin.com/in/sailliaodev/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M20.4 3H3.6C3.3 3 3 3.3 3 3.7v16.6c0 .4.3.7.7.7h16.6c.4 0 .7-.3.7-.7V3.7c0-.4-.3-.7-.7-.7ZM8.6 18.4H6V9.9h2.6v8.5Zm-1.3-9.8c-.8 0-1.3-.6-1.3-1.3 0-.8.6-1.4 1.4-1.4.8 0 1.3.6 1.3 1.4 0 .7-.5 1.3-1.4 1.3Zm11.1 9.8h-2.6v-4.5c0-1.2-.4-2.1-1.5-2.1-.8 0-1.2.5-1.5 1-.1.2-.1.5-.1.8v4.8H10V9.9h2.5v1.2c.3-.4.9-1.3 2.2-1.3 1.6 0 2.9 1 2.9 3.4v5.2Z" />
          </svg>
        </a>
        <button
          className="w-11 h-10 grid place-items-center rounded-xl border text-sm font-semibold transition hover:-translate-y-[1px]"
          style={baseButtonStyle}
          type="button"
          aria-label="切換語言"
          onClick={toggleLang}>
          {lang === 'en' ? '中' : 'EN'}
        </button>
        <button
          className="w-11 h-10 grid place-items-center rounded-xl border text-base transition hover:-translate-y-[1px]"
          style={baseButtonStyle}
          type="button"
          aria-label="切換明暗模式"
          onClick={toggleTheme}>
          <span aria-hidden="true">{theme === 'light' ? '☀️' : '🌙'}</span>
        </button>
      </div>
    </header>
  );
}
