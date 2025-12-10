import './styles.css';
import { ContactLines } from './components/ContactLines';
import { Education } from './components/sections/Education';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { useI18n } from './hooks/useI18n';
import { useTheme } from './hooks/useTheme';

const skillItems = [
  { label: '前端框架', tags: ['Next.js (App Router)', 'React', 'Vue.js', 'Pinia', 'Electron.js'] },
  { label: 'UI / 樣式', tags: ['Tailwind CSS', 'Windi CSS', 'styled-components', 'Figma Claude MCP'] },
  { label: '狀態管理', tags: ['Zustand', 'Pinia', 'React hooks'] },
  { label: 'API / 開發流程', tags: ['MSW Mock', 'Swagger', 'TypeScript', 'Axios/Fetch', 'Postman Mock Server'] },
  { label: '其他', tags: ['jQuery', 'Git / GitHub', 'AJAX'] },
];

function App() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t, html } = useI18n();

  const experienceItems = [
    {
      time: t('exp1-time'),
      place: t('exp1-place'),
      role: t('exp1-role'),
      listHtml: t('exp1-list'),
    },
    {
      time: t('exp2-time'),
      place: t('exp2-place'),
      role: t('exp2-role'),
      listHtml: t('exp2-list'),
    },
    {
      time: t('exp3-time'),
      place: t('exp3-place'),
      role: t('exp3-role'),
      listHtml: t('exp3-list'),
    },
    {
      time: t('exp4-time'),
      place: t('exp4-place'),
      role: t('exp4-role'),
      desc: t('exp4-desc'),
      compact: true,
    },
  ];

  const projectItems = [
    {
      time: t('proj1-time'),
      title: t('proj1-title'),
      desc: t('proj1-desc'),
      chip: 'TypeScript · Tailwind · DaisyUI · Zustand',
    },
    {
      time: t('proj2-time'),
      title: t('proj2-title'),
      desc: t('proj2-desc'),
      chip: 'React · styled-components · React Router · Firebase Hosting',
    },
  ];

  const educationItems = [
    { time: t('edu1-time'), title: t('edu1-title'), desc: t('edu1-desc') },
    { label: t('edu2-label'), time: t('edu2-label'), title: t('edu2-title'), desc: t('edu2-desc') },
  ];

  return (
    <>
      <div className="bg-gradient"></div>
      <div className="page-shell">
        <header className="top-bar">
          <div className="brand">Sail Liao</div>
          <nav className="nav-links">
            <a href="#experience">{t('nav-experience') || '經歷'}</a>
            <a href="#projects">{t('nav-projects') || '專案'}</a>
            <a href="#skills">{t('nav-skills') || '技能'}</a>
            <a href="#education">{t('nav-education') || '學歷'}</a>
          </nav>
          <div className="icon-links" aria-label="社群連結">
            <a className="icon-pill" href="https://github.com/Sailwayfun" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.6-.2.6-.4v-1.5c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.7 2.5 1.2 3.1.9.1-.7.4-1.2.7-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2.1 1-2.9-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3.9 0 1.7.1 2.5.3 2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.8 1 1.8 1 2.9 0 3.9-2.4 4.7-4.6 5 .4.3.8 1 .8 2.1v3.1c0 .2.1.5.6.4 4-1.3 6.9-5.1 6.9-9.6C22 6.6 17.5 2 12 2Z" />
              </svg>
            </a>
            <a className="icon-pill" href="https://www.linkedin.com/in/sailliaodev/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24">
                <path d="M20.4 3H3.6C3.3 3 3 3.3 3 3.7v16.6c0 .4.3.7.7.7h16.6c.4 0 .7-.3.7-.7V3.7c0-.4-.3-.7-.7-.7ZM8.6 18.4H6V9.9h2.6v8.5Zm-1.3-9.8c-.8 0-1.3-.6-1.3-1.3 0-.8.6-1.4 1.4-1.4.8 0 1.3.6 1.3 1.4 0 .7-.5 1.3-1.4 1.3Zm11.1 9.8h-2.6v-4.5c0-1.2-.4-2.1-1.5-2.1-.8 0-1.2.5-1.5 1-.1.2-.1.5-.1.8v4.8H10V9.9h2.5v1.2c.3-.4.9-1.3 2.2-1.3 1.6 0 2.9 1 2.9 3.4v5.2Z" />
              </svg>
            </a>
            <button className="icon-pill toggle-pill" type="button" aria-label="切換語言" onClick={toggleLang}>
              {lang === 'en' ? '中' : 'EN'}
            </button>
            <button className="icon-pill toggle-pill" type="button" aria-label="切換明暗模式" onClick={toggleTheme}>
              <span className="toggle-icon" aria-hidden="true">{theme === 'light' ? '☀️' : '🌙'}</span>
            </button>
          </div>
        </header>

        <Hero
          eyebrow={t('eyebrow')}
          nameHtml={t('hero-name')}
          ledeHtml={t('lede')}
          locationLabel={t('meta-location-label')}
          locationValue={t('meta-location-value')}
          contactLabel={t('meta-contact-label')}
          contactEmail={t('contact-email')}
          contactPhone={t('contact-phone')}
          titleLabel={t('meta-title-label')}
          titleValue={t('meta-title-value')}
          langLabel={t('meta-lang-label')}
          langValue={t('meta-lang-value')}
          ctaLabel={t('cta-primary')}
        />

        <Skills title={t('skills-title')} desc={t('skills-desc')} items={skillItems} />

        <Experience title={t('exp-title')} desc={t('exp-desc')} items={experienceItems} />

        <Projects title={t('proj-title')} desc={t('proj-desc')} items={projectItems} />

        <Education title={t('edu-title')} desc={t('edu-desc')} items={educationItems} />

        <footer className="footer">
          <div className="meta-item flat">
            <div className="meta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4.5 6.2 10 10c1.2.8 2.8.8 4 0l5.5-3.8c.3-.2.5-.5.5-.9 0-.7-.6-1.3-1.3-1.3H5.3C4.6 4 4 4.6 4 5.3c0 .3.2.7.5.9ZM20 8.3l-4.7 3.3a4.8 4.8 0 0 1-5.6 0L5 8.3V16c0 1 .8 1.8 1.8 1.8h11.4c1 0 1.8-.8 1.8-1.8V8.3Z" />
              </svg>
            </div>
            <div>
              <p className="label">{t('footer-contact-label')}</p>
              <ContactLines email={t('contact-email')} phone={t('contact-phone')} />
            </div>
          </div>
          <div className="meta-item flat">
            <div className="meta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.5c-3.5 0-6.5 2.8-6.5 6.4 0 4.9 6.5 12.6 6.5 12.6s6.5-7.7 6.5-12.6c0-3.6-3-6.4-6.5-6.4Zm0 9.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" />
              </svg>
            </div>
            <div>
              <p className="label">{t('footer-role-label')}</p>
              <p className="value">{t('footer-role-value')}</p>
            </div>
          </div>
        </footer>
        <p className="muted footer-note">{t('footer-update')}</p>
      </div>
    </>
  );
}

export default App;
