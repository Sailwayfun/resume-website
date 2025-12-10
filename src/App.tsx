import { ContactLines } from './components/ContactLines';
import { IconBadge } from './components/IconBadge';
import { HeaderBar } from './components/HeaderBar';
import { Education } from './components/sections/Education';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { useI18n } from './hooks/useI18n';
import { useTheme } from './hooks/useTheme';

const skillItems = [
  {
    label: '前端框架',
    tags: ['Next.js (App Router)', 'React', 'Vue.js', 'Pinia', 'Electron.js'],
  },
  {
    label: 'UI / 樣式',
    tags: ['Tailwind CSS', 'Windi CSS', 'styled-components', 'Figma Claude MCP'],
  },
  { label: '狀態管理', tags: ['Zustand', 'Pinia', 'React hooks'] },
  {
    label: 'API / 開發流程',
    tags: ['MSW Mock', 'Swagger', 'TypeScript', 'Axios/Fetch', 'Postman Mock Server'],
  },
  { label: '其他', tags: ['jQuery', 'Git / GitHub', 'AJAX'] },
];

function App() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useI18n();

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
    {
      label: t('edu2-label'),
      time: t('edu2-label'),
      title: t('edu2-title'),
      desc: t('edu2-desc'),
    },
  ];
  const navItems = [
    { href: '#experience', label: t('nav-experience') || '經歷' },
    { href: '#projects', label: t('nav-projects') || '專案' },
    { href: '#skills', label: t('nav-skills') || '技能' },
    { href: '#education', label: t('nav-education') || '學歷' },
  ];

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-[rgba(77,212,182,0.08)] to-[rgba(55,107,255,0.05)] blur-[40px] opacity-90 pointer-events-none z-0 print-hidden"></div>
      <div className="relative z-10 max-w-[1080px] mx-auto px-7 pb-16 pt-12">
        <HeaderBar
          theme={theme}
          lang={lang}
          nav={navItems}
          toggleLang={toggleLang}
          toggleTheme={toggleTheme}
          onPrint={() => window.print()}
        />

        <Hero
          eyebrow={t('eyebrow')}
          nameHtml={t('hero-name')}
          ledeHtml={t('lede')}
          locationLabel={t('meta-location-label')}
          locationValue={t('meta-location-value')}
          contactLabel={t('meta-contact-label')}
          contactEmail={t('contact-email')}
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

        <footer
          className="mt-8 border rounded-xl p-5 flex flex-wrap gap-3 items-center shadow-[var(--shadow)]"
          style={{
            background: 'rgba(255,255,255,0.02)',
            borderColor: 'var(--border)',
            color: 'var(--muted)',
          }}
        >
          <div
            className="flex items-center gap-3 px-3 py-3 rounded-xl"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <IconBadge>
              <svg className="w-[18px] h-[18px] fill-[var(--accent-strong)]" viewBox="0 0 24 24">
                <path d="M4.5 6.2 10 10c1.2.8 2.8.8 4 0l5.5-3.8c.3-.2.5-.5.5-.9 0-.7-.6-1.3-1.3-1.3H5.3C4.6 4 4 4.6 4 5.3c0 .3.2.7.5.9ZM20 8.3l-4.7 3.3a4.8 4.8 0 0 1-5.6 0L5 8.3V16c0 1 .8 1.8 1.8 1.8h11.4c1 0 1.8-.8 1.8-1.8V8.3Z" />
              </svg>
            </IconBadge>
            <div>
              <p className="text-[13px] text-[var(--muted)] m-0 mb-1">
                {t('footer-contact-label')}
              </p>
              <ContactLines email={t('contact-email')} />
            </div>
          </div>
          <div
            className="flex items-center gap-3 px-3 py-3 rounded-xl"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <IconBadge>
              <svg className="w-[18px] h-[18px] fill-[var(--accent-strong)]" viewBox="0 0 24 24">
                <path d="M12 2.5c-3.5 0-6.5 2.8-6.5 6.4 0 4.9 6.5 12.6 6.5 12.6s6.5-7.7 6.5-12.6c0-3.6-3-6.4-6.5-6.4Zm0 9.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" />
              </svg>
            </IconBadge>
            <div>
              <p className="text-[13px] text-[var(--muted)] m-0 mb-1">{t('footer-role-label')}</p>
              <p className="m-0 font-semibold leading-6 text-[var(--text)]">
                {t('footer-role-value')}
              </p>
            </div>
          </div>
          <p className="m-0 ml-auto text-[var(--muted)]">{t('footer-update')}</p>
        </footer>
      </div>
    </>
  );
}

export default App;
