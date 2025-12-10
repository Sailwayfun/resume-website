import { useEffect, useState } from 'react';
import './styles.css';

type Lang = 'zh' | 'en';
type Translations = Record<Lang, Record<string, string>>;

const fallbackI18n: Translations = {
  zh: {
    eyebrow: 'Front-end Engineer · 4-5 年經驗',
    'hero-name': '廖偉帆 <span class="sub">Sail Liao</span>',
    lede:
      '使用 Next.js、React、Vue 與 TypeScript 打造後臺、桌面工具與瀏覽器插件。熟悉 UI 開發、狀態管理、Mock API 與前後端協作，樂於將需求轉化成流暢的互動體驗。',
    'meta-location-label': '所在地',
    'meta-location-value': '新北市汐止區',
    'meta-contact-label': '聯絡',
    'contact-email': 'liaoleon000513@gmail.com',
    'contact-phone': '0937-941-020',
    'meta-title-label': '目標職稱',
    'meta-title-value': '前端工程師 / 軟體工程師',
    'meta-lang-label': '語言',
    'meta-lang-value': '英語 TOEIC 985 ・ 臺語中等',
    'cta-primary': '寫信給我',
    'skills-title': '核心技能',
    'skills-desc': '打造可維護的前端架構、快速還原設計並確保串接效率。',
    'exp-title': '工作經歷',
    'exp-desc': '帶領或參與後臺、管理系統、桌面工具與瀏覽器插件的前端開發。',
    'exp1-time': '2024/4 - 現在',
    'exp1-place': '臺北 · 區塊科技股份有限公司',
    'exp1-role': '網頁前端工程師',
    'exp1-list':
      '<li>以 Next.js App Router 打造 HyperLedger 區塊鏈管理平臺，Tailwind CSS 搭配 Figma Claude MCP 加速 UI 實作。</li><li>使用 MSW 建立模擬 API，並與後端透過 Swagger UI 對齊資料格式，降低正式串接成本。</li><li>以 Vue.js + Pinia 開發內部人員/案件管理系統，支援狀態同步與配置調整。</li><li>運用 Postman Mock Server、jQuery、Electron.js 產出內部工具，提升蒐證與流程效率。</li>',
    'exp2-time': '2023/8 - 2024/1',
    'exp2-place': '臺北 · AppWorks School',
    'exp2-role': '前端工程師（培訓實戰）',
    'exp2-list':
      '<li>4 週內以 React、styled-components 開發電商網站，含輪播、購物車、無限滾動等互動功能。</li><li>5 週內自製 Chrome Extension，採 TypeScript + Zustand + Tailwind，強化靜態型別與狀態管理。</li><li>協助工作坊導入 Tailwind，並在一週內與 iOS/後端協作完成電商功能擴充。</li>',
    'exp3-time': '2019/3 - 2023/8',
    'exp3-place': '臺北 · 三民書局',
    'exp3-role': '高中英文教科書文字編輯',
    'exp3-list':
      '<li>維護教材內容、上架至 App 並同步改版，協調邀稿與審稿流程，確保時程與品質。</li><li>經營高中高職 YouTube 頻道，管理影片上下架與首頁版面。</li>',
    'exp4-time': '2016/8 - 2018/11',
    'exp4-place': '臺大文理補習班',
    'exp4-role': '解題老師／閱卷人員',
    'exp4-desc': '協助高中生英文解題與作文批改，提供技巧回饋。',
    'proj-title': '專案成就',
    'proj-desc': '自製產品與商業側作品，著重資料流、互動體驗與部署。',
    'proj1-time': '2023/11 - 進行中',
    'proj1-title': 'Tabsence · Chrome Extension',
    'proj1-desc':
      '管理瀏覽器分頁的插件，可釘選、排序與自訂空間，並追蹤網站使用時間。透過 chrome.tabs API 取得分頁資料，並以輕量狀態管理維持瀏覽器端的同步性。',
    'proj2-time': '2023/9 - 2023/10',
    'proj2-title': 'STYLiSH · 電商網站',
    'proj2-desc':
      '依 Figma 設計稿完成切版與互動，實作輪播、無限滾動、購物車等功能。採用 CSS-in-JS 保持元件樣式獨立，部署於 Firebase Hosting。',
    'edu-title': '學歷與其他',
    'edu-desc': '語言背景強，能快速吸收新技術並跨國溝通。',
    'edu1-time': '2014/9 - 2018/6',
    'edu1-title': '國立臺灣大學 · 外國語文學系',
    'edu1-desc': '學士，專注語言學與跨文化溝通。',
    'edu2-label': '語言能力',
    'edu2-title': '英文 TOEIC 985 · 中文、臺語',
    'edu2-desc': '聽說讀寫精通；能流暢撰寫技術與產品文件。',
    'footer-contact-label': '聯絡',
    'footer-role-label': '偏好職務 / 地點',
    'footer-role-value': '前端工程師 / 軟體工程師 · 臺北 / 新北 / Remote',
    'footer-update': '最後更新：2025',
  },
  en: {
    eyebrow: 'Front-end Engineer · 4-5 yrs experience',
    'hero-name': 'Wei-Fan Liao <span class="sub">Sail Liao</span>',
    lede:
      'Front-end engineer building dashboards, desktop tools, and browser extensions with Next.js, React, Vue, and TypeScript. Enjoys UI implementation, state management, mock APIs, and tight collaboration with backend teams.',
    'meta-location-label': 'Location',
    'meta-location-value': 'Xizhi, New Taipei',
    'meta-contact-label': 'Contact',
    'contact-email': 'liaoleon000513@gmail.com',
    'contact-phone': '+886 937-941-020',
    'meta-title-label': 'Target Title',
    'meta-title-value': 'Front-end Engineer / Software Engineer',
    'meta-lang-label': 'Languages',
    'meta-lang-value': 'English TOEIC 985 · Intermediate Taiwanese',
    'cta-primary': 'Email me',
    'skills-title': 'Core Skills',
    'skills-desc': 'Build maintainable front-end architecture and ship interfaces quickly with aligned APIs.',
    'exp-title': 'Experience',
    'exp-desc': 'Led or contributed to admin consoles, internal systems, desktop tools, and browser extensions.',
    'exp1-time': '2024/4 - Present',
    'exp1-place': 'Taipei · Block Tech Co., Ltd.',
    'exp1-role': 'Front-end Engineer',
    'exp1-list':
      '<li>Built a HyperLedger blockchain admin console with Next.js App Router; accelerated UI delivery via Tailwind CSS + Figma Claude MCP.</li><li>Created MSW mock APIs and aligned contracts with backend through Swagger UI to reduce integration risk.</li><li>Developed internal personnel/case management with Vue.js + Pinia for synchronized status tracking.</li><li>Delivered internal tools with Postman Mock Server, jQuery, and Electron to speed evidence workflows.</li>',
    'exp2-time': '2023/8 - 2024/1',
    'exp2-place': 'Taipei · AppWorks School',
    'exp2-role': 'Front-end Engineer (Bootcamp)',
    'exp2-list':
      '<li>Shipped an e-commerce site in 4 weeks using React + styled-components with carousel, cart, and infinite scroll.</li><li>Built a Chrome Extension in 5 weeks with TypeScript + Zustand + Tailwind for typed stateful UI.</li><li>Guided teammates to adopt Tailwind and co-delivered new commerce features with iOS/backend in one week.</li>',
    'exp3-time': '2019/3 - 2023/8',
    'exp3-place': 'Taipei · San Min Publishing',
    'exp3-role': 'High-school English Textbook Editor',
    'exp3-list':
      '<li>Maintained and updated app content for textbook releases; coordinated authors and reviewers to meet deadlines.</li><li>Managed the YouTube channel for senior high/vocational materials, handling uploads and homepage curation.</li>',
    'exp4-time': '2016/8 - 2018/11',
    'exp4-place': 'NTU Wen-Li Prep School',
    'exp4-role': 'English Tutor / Essay Reviewer',
    'exp4-desc': 'Helped students solve English questions and provided feedback on essays.',
    'proj-title': 'Projects',
    'proj-desc': 'Personal and commercial-facing builds focused on data flow, interactions, and deployment.',
    'proj1-time': '2023/11 - Ongoing',
    'proj1-title': 'Tabsence · Chrome Extension',
    'proj1-desc':
      'Browser extension for tab management with pinning, sorting, spaces, and usage tracking. Uses chrome.tabs API and lightweight state for sync.',
    'proj2-time': '2023/9 - 2023/10',
    'proj2-title': 'STYLiSH · E-commerce',
    'proj2-desc':
      'Rebuilt a Figma design with React + styled-components; implemented carousel, infinite scroll, and cart; deployed on Firebase Hosting.',
    'edu-title': 'Education & More',
    'edu-desc': 'Strong language background; quick to learn new tech and communicate across teams.',
    'edu1-time': '2014/9 - 2018/6',
    'edu1-title': 'National Taiwan University · Foreign Languages & Literature',
    'edu1-desc': 'B.A. focused on linguistics and cross-cultural communication.',
    'edu2-label': 'Language Proficiency',
    'edu2-title': 'English TOEIC 985 · Mandarin, Taiwanese',
    'edu2-desc': 'Fluent in reading/writing/speaking; comfortable drafting technical and product docs.',
    'footer-contact-label': 'Contact',
    'footer-role-label': 'Preferred Roles / Location',
    'footer-role-value': 'Front-end Engineer / Software Engineer · Taipei / New Taipei / Remote',
    'footer-update': 'Last updated: 2025',
  },
};

const translationsPath = '/i18n.json';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [lang, setLang] = useState<Lang>('zh');
  const [translations, setTranslations] = useState<Translations>(fallbackI18n);

  const t = (key: string) => translations[lang]?.[key] ?? translations.zh?.[key] ?? '';
  const html = (key: string) => ({ __html: t(key) });

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(stored || (prefersLight ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('lang');
    const prefersZh = navigator.language && navigator.language.toLowerCase().startsWith('zh');
    setLang(stored || (prefersZh ? 'zh' : 'en'));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    async function loadTranslations() {
      try {
        const res = await fetch(translationsPath);
        if (!res.ok) throw new Error(`status ${res.status}`);
        const json: Translations = await res.json();
        setTranslations(json);
      } catch (err) {
        console.warn('i18n load failed, using fallback', err);
        setTranslations(fallbackI18n);
      }
    }
    loadTranslations();
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'zh-Hant');
  }, [lang]);

  return (
    <>
      <div className="bg-gradient"></div>
      <div className="page-shell">
        <header className="top-bar">
          <div className="brand">Sail Liao</div>
          <nav className="nav-links">
            <a href="#experience">經歷</a>
            <a href="#projects">專案</a>
            <a href="#skills">技能</a>
            <a href="#education">學歷</a>
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
            <button className="icon-pill toggle-pill" id="lang-toggle" type="button" aria-label="切換語言" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}>
              {lang === 'en' ? '中' : 'EN'}
            </button>
            <button className="icon-pill toggle-pill" id="theme-toggle" type="button" aria-label="切換明暗模式" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              <span className="toggle-icon" aria-hidden="true">{theme === 'light' ? '☀️' : '🌙'}</span>
            </button>
          </div>
        </header>

        <section className="hero" id="top">
          <p className="eyebrow" dangerouslySetInnerHTML={html('eyebrow')} />
          <h1 dangerouslySetInnerHTML={html('hero-name')} />
          <p className="lede" dangerouslySetInnerHTML={html('lede')} />
          <div className="meta-row">
            <div className="meta-item">
              <div className="meta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.5c-3.5 0-6.5 2.8-6.5 6.4 0 4.9 6.5 12.6 6.5 12.6s6.5-7.7 6.5-12.6c0-3.6-3-6.4-6.5-6.4Zm0 9.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" />
                </svg>
              </div>
              <div>
                <p className="label">{t('meta-location-label')}</p>
                <p className="value">{t('meta-location-value')}</p>
              </div>
            </div>
            <div className="meta-item">
              <div className="meta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4.5 6.2 10 10c1.2.8 2.8.8 4 0l5.5-3.8c.3-.2.5-.5.5-.9 0-.7-.6-1.3-1.3-1.3H5.3C4.6 4 4 4.6 4 5.3c0 .3.2.7.5.9ZM20 8.3l-4.7 3.3a4.8 4.8 0 0 1-5.6 0L5 8.3V16c0 1 .8 1.8 1.8 1.8h11.4c1 0 1.8-.8 1.8-1.8V8.3Z" />
                </svg>
              </div>
              <div>
                <p className="label">{t('meta-contact-label')}</p>
                <div className="value contact-lines">
                  <div className="contact-line">
                    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4.5 6.2 10 10c1.2.8 2.8.8 4 0l5.5-3.8c.3-.2.5-.5.5-.9 0-.7-.6-1.3-1.3-1.3H5.3C4.6 4 4 4.6 4 5.3c0 .3.2.7.5.9ZM20 8.3l-4.7 3.3a4.8 4.8 0 0 1-5.6 0L5 8.3V16c0 1 .8 1.8 1.8 1.8h11.4c1 0 1.8-.8 1.8-1.8V8.3Z" />
                    </svg>
                    <span>{t('contact-email')}</span>
                  </div>
                  <div className="contact-line">
                    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.6 3.5c.3-.7 1-1 1.7-.8l1.9.6c.7.2 1.2.9 1 1.6l-.5 1.9a1.5 1.5 0 0 1-.7.9 12 12 0 0 0 5 5c.3-.2.6-.5.9-.7l1.9-.5c.7-.2 1.4.2 1.6 1l.6 1.9c.2.7-.1 1.4-.8 1.7l-1.5.7c-.6.3-1.4.4-2 .1A17.2 17.2 0 0 1 4.8 9.1c-.3-.6-.2-1.3.1-2l.7-1.6Z" />
                    </svg>
                    <span>{t('contact-phone')}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="meta-item">
              <div className="meta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 6.5c0-.8.7-1.5 1.5-1.5h13c.8 0 1.5.7 1.5 1.5v2.1c0 .6-.4 1.2-1 1.4l-5.9 2.1a3 3 0 0 1-2.2 0L5 10c-.6-.2-1-.8-1-1.4V6.5Zm0 6.1c0-.7.7-1.2 1.3-.9l6.5 2.7c.2.1.4.1.6 0l6.3-2.6c.7-.3 1.4.2 1.4.9v2.2c0 .6-.4 1.2-1 1.4l-6.7 2.7c-.8.3-1.6.3-2.4 0l-6.7-2.7c-.6-.2-1-.8-1-1.4v-2.3Z" />
                </svg>
              </div>
              <div>
                <p className="label">{t('meta-title-label')}</p>
                <p className="value">{t('meta-title-value')}</p>
              </div>
            </div>
            <div className="meta-item">
              <div className="meta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3.5A8.5 8.5 0 1 1 3.5 12 8.5 8.5 0 0 1 12 3.5Zm0 2a6.5 6.5 0 0 0-6.3 5h3.2c.1-1 .5-1.8 1.2-2.5.5-.5 1.2-.9 1.9-1.1V5.5Zm1.5 0v2.4c.7.2 1.4.6 1.9 1.1.7.7 1.1 1.5 1.2 2.5h3.2a6.5 6.5 0 0 0-6.3-5Zm-4.5 7H5.5a6.5 6.5 0 0 0 6.4 5v-2.4c-.7-.2-1.4-.6-1.9-1.1-.7-.7-1.1-1.5-1.1-2.5Zm6 0c0 1-.4 1.8-1.1 2.5a3.7 3.7 0 0 1-1.9 1.1V18a6.5 6.5 0 0 0 6.4-5h-3.4Z" />
                </svg>
              </div>
              <div>
                <p className="label">{t('meta-lang-label')}</p>
                <p className="value">{t('meta-lang-value')}</p>
              </div>
            </div>
          </div>
          <div className="cta-row">
            <a className="primary" href="mailto:liaoleon000513@gmail.com">
              {t('cta-primary')}
            </a>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-head">
            <h2>{t('skills-title')}</h2>
            <p>{t('skills-desc')}</p>
          </div>
          <div className="tech-strip" aria-label="技術堆疊">
            <div className="tech-row">
              <div className="tech-track">
                <div className="tech-chip">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" loading="lazy" />
                  Next.js
                </div>
                <div className="tech-chip">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=react" alt="React" loading="lazy" />
                  React
                </div>
                <div className="tech-chip">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=vue" alt="Vue.js" loading="lazy" />
                  Vue.js
                </div>
                <div className="tech-chip">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=ts" alt="TypeScript" loading="lazy" />
                  TypeScript
                </div>
                <div className="tech-chip">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=js" alt="JavaScript" loading="lazy" />
                  JavaScript
                </div>
                <div className="tech-chip">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind" loading="lazy" />
                  Tailwind
                </div>
                <div className="tech-chip">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=styledcomponents" alt="styled-components" loading="lazy" />
                  styled-components
                </div>
                <div className="tech-chip">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=git" alt="Git" loading="lazy" />
                  Git / GitHub
                </div>
                <div className="tech-chip" aria-hidden="true">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=nextjs" alt="" loading="lazy" />
                  Next.js
                </div>
                <div className="tech-chip" aria-hidden="true">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=react" alt="" loading="lazy" />
                  React
                </div>
                <div className="tech-chip" aria-hidden="true">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=vue" alt="" loading="lazy" />
                  Vue.js
                </div>
                <div className="tech-chip" aria-hidden="true">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=ts" alt="" loading="lazy" />
                  TypeScript
                </div>
                <div className="tech-chip" aria-hidden="true">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=js" alt="" loading="lazy" />
                  JavaScript
                </div>
                <div className="tech-chip" aria-hidden="true">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=tailwind" alt="" loading="lazy" />
                  Tailwind
                </div>
                <div className="tech-chip" aria-hidden="true">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=styledcomponents" alt="" loading="lazy" />
                  styled-components
                </div>
                <div className="tech-chip" aria-hidden="true">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=git" alt="" loading="lazy" />
                  Git / GitHub
                </div>
              </div>
            </div>
            <div className="tech-row reverse">
              <div className="tech-track slow">
                <div className="tech-chip">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=postman" alt="Postman" loading="lazy" />
                  Postman
                </div>
                <div className="tech-chip">
                  <svg className="chip-svg" viewBox="0 0 256 256" role="img" aria-label="Swagger">
                    <rect width="256" height="256" rx="40" fill="#85EA2D" />
                    <path
                      d="M128 53C86.6437 53 53 86.6437 53 128C53 169.356 86.6437 203 128 203C169.35 203 203 169.356 203 128C203 86.6437 169.35 53 128 53ZM128 60.15C165.469 60.15 195.85 90.525 195.85 128C195.85 165.469 165.475 195.85 128 195.85C90.525 195.85 60.15 165.475 60.15 128C60.15 90.525 90.525 60.15 128 60.15ZM105.312 89.675C104.431 89.6576 103.549 89.668 102.669 89.7063C96.525 90.0563 92.8375 92.9375 91.825 98.9062C91.1062 103.062 91.225 107.331 90.9312 111.513C90.85 113.7 90.6187 115.869 90.2125 118C89.375 121.806 87.7313 122.987 83.8625 123.187C83.3504 123.251 82.8415 123.339 82.3375 123.45V132.594C89.375 132.937 90.325 135.419 90.9 142.775C91.1063 145.456 90.8187 148.138 90.9937 150.819C91.1062 153.356 91.45 155.869 91.9688 158.319C93.5875 165.037 100.138 167.288 108.063 165.931V157.912C106.794 157.912 105.669 157.944 104.575 157.912C101.887 157.831 100.881 157.162 100.625 154.569C100.275 151.225 100.363 147.819 100.156 144.444C99.7563 138.187 99.0625 132.019 92.95 128.037C96.0938 125.725 98.375 122.962 99.0938 119.3C99.6125 116.737 99.9312 114.169 100.131 111.569C100.306 108.975 99.9875 106.319 100.219 103.756C100.594 99.6 100.856 97.9 105.844 98.0687C106.594 98.0687 107.313 97.9625 108.15 97.9V89.7125C107.15 89.7125 106.212 89.6875 105.312 89.675ZM152.769 89.7312C151.067 89.693 149.365 89.8186 147.687 90.1062V98.0687C149.219 98.0687 150.4 98.0688 151.581 98.1C153.631 98.125 155.187 98.9125 155.394 101.188C155.594 103.263 155.588 105.369 155.794 107.475C156.2 111.656 156.425 115.894 157.15 120.019C157.787 123.419 160.119 125.956 163.031 128.037C157.925 131.469 156.425 136.369 156.169 141.881C156.025 145.656 155.937 149.462 155.737 153.269C155.562 156.731 154.35 157.856 150.862 157.944C149.881 157.969 148.925 158.056 147.837 158.119V166.275C149.881 166.275 151.756 166.394 153.631 166.275C159.456 165.931 162.975 163.106 164.131 157.45C164.619 154.337 164.906 151.2 164.994 148.05C165.194 145.169 165.169 142.256 165.456 139.4C165.888 134.931 167.937 133.088 172.406 132.794C172.83 132.742 173.247 132.645 173.65 132.506V123.363C172.9 123.275 172.375 123.194 171.831 123.162C168.481 123.019 166.806 121.894 165.975 118.725C165.457 116.692 165.139 114.614 165.025 112.519C164.794 108.656 164.819 104.763 164.563 100.894C164.063 93.4438 159.6 89.9375 152.769 89.7312ZM109.706 122.731C108.351 122.73 107.048 123.25 106.066 124.184C105.084 125.117 104.499 126.393 104.432 127.747C104.365 129.1 104.822 130.427 105.707 131.453C106.593 132.479 107.839 133.124 109.187 133.256H109.531C110.905 133.337 112.253 132.868 113.281 131.954C114.309 131.04 114.932 129.755 115.012 128.381V128.094C115.034 126.695 114.5 125.345 113.528 124.34C112.555 123.334 111.224 122.756 109.825 122.731H109.706ZM127.9 122.731C126.563 122.687 125.262 123.176 124.285 124.09C123.308 125.004 122.733 126.269 122.687 127.606C122.687 127.775 122.688 127.919 122.713 128.094C122.713 131.238 124.85 133.256 128.081 133.256C131.25 133.256 133.244 131.181 133.244 127.925C133.212 124.781 131.106 122.7 127.9 122.731ZM146.419 122.731C145.003 122.706 143.635 123.24 142.61 124.216C141.585 125.193 140.986 126.535 140.944 127.95C140.944 130.887 143.306 133.256 146.25 133.256H146.306C148.962 133.719 151.638 131.15 151.813 128.069C151.956 125.212 149.362 122.731 146.419 122.731Z" />
                  </svg>
                  Swagger
                </div>
                <div className="tech-chip">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=electron" alt="Electron" loading="lazy" />
                  Electron
                </div>
                <div className="tech-chip">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=jquery" alt="jQuery" loading="lazy" />
                  jQuery
                </div>
                <div className="tech-chip">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=git" alt="Git" loading="lazy" />
                  Git / GitHub
                </div>
                <div className="tech-chip">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" loading="lazy" />
                  Next.js
                </div>
                <div className="tech-chip">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=react" alt="React" loading="lazy" />
                  React
                </div>
                <div className="tech-chip" aria-hidden="true">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=postman" alt="" loading="lazy" />
                  Postman
                </div>
                <div className="tech-chip" aria-hidden="true">
                  <svg className="chip-svg" viewBox="0 0 256 256" aria-hidden="true">
                    <rect width="256" height="256" rx="40" fill="#85EA2D" />
                    <path
                      d="M128 53C86.6437 53 53 86.6437 53 128C53 169.356 86.6437 203 128 203C169.35 203 203 169.356 203 128C203 86.6437 169.35 53 128 53ZM128 60.15C165.469 60.15 195.85 90.525 195.85 128C195.85 165.469 165.475 195.85 128 195.85C90.525 195.85 60.15 165.475 60.15 128C60.15 90.525 90.525 60.15 128 60.15ZM105.312 89.675C104.431 89.6576 103.549 89.668 102.669 89.7063C96.525 90.0563 92.8375 92.9375 91.825 98.9062C91.1062 103.062 91.225 107.331 90.9312 111.513C90.85 113.7 90.6187 115.869 90.2125 118C89.375 121.806 87.7313 122.987 83.8625 123.187C83.3504 123.251 82.8415 123.339 82.3375 123.45V132.594C89.375 132.937 90.325 135.419 90.9 142.775C91.1063 145.456 90.8187 148.138 90.9937 150.819C91.1062 153.356 91.45 155.869 91.9688 158.319C93.5875 165.037 100.138 167.288 108.063 165.931V157.912C106.794 157.912 105.669 157.944 104.575 157.912C101.887 157.831 100.881 157.162 100.625 154.569C100.275 151.225 100.363 147.819 100.156 144.444C99.7563 138.187 99.0625 132.019 92.95 128.037C96.0938 125.725 98.375 122.962 99.0938 119.3C99.6125 116.737 99.9312 114.169 100.131 111.569C100.306 108.975 99.9875 106.319 100.219 103.756C100.594 99.6 100.856 97.9 105.844 98.0687C106.594 98.0687 107.313 97.9625 108.15 97.9V89.7125C107.15 89.7125 106.212 89.6875 105.312 89.675ZM152.769 89.7312C151.067 89.693 149.365 89.8186 147.687 90.1062V98.0687C149.219 98.0687 150.4 98.0688 151.581 98.1C153.631 98.125 155.187 98.9125 155.394 101.188C155.594 103.263 155.588 105.369 155.794 107.475C156.2 111.656 156.425 115.894 157.15 120.019C157.787 123.419 160.119 125.956 163.031 128.037C157.925 131.469 156.425 136.369 156.169 141.881C156.025 145.656 155.937 149.462 155.737 153.269C155.562 156.731 154.35 157.856 150.862 157.944C149.881 157.969 148.925 158.056 147.837 158.119V166.275C149.881 166.275 151.756 166.394 153.631 166.275C159.456 165.931 162.975 163.106 164.131 157.45C164.619 154.337 164.906 151.2 164.994 148.05C165.194 145.169 165.169 142.256 165.456 139.4C165.888 134.931 167.937 133.088 172.406 132.794C172.83 132.742 173.247 132.645 173.65 132.506V123.363C172.9 123.275 172.375 123.194 171.831 123.162C168.481 123.019 166.806 121.894 165.975 118.725C165.457 116.692 165.139 114.614 165.025 112.519C164.794 108.656 164.819 104.763 164.563 100.894C164.063 93.4438 159.6 89.9375 152.769 89.7312ZM109.706 122.731C108.351 122.73 107.048 123.25 106.066 124.184C105.084 125.117 104.499 126.393 104.432 127.747C104.365 129.1 104.822 130.427 105.707 131.453C106.593 132.479 107.839 133.124 109.187 133.256H109.531C110.905 133.337 112.253 132.868 113.281 131.954C114.309 131.04 114.932 129.755 115.012 128.381V128.094C115.034 126.695 114.5 125.345 113.528 124.34C112.555 123.334 111.224 122.756 109.825 122.731H109.706ZM127.9 122.731C126.563 122.687 125.262 123.176 124.285 124.09C123.308 125.004 122.733 126.269 122.687 127.606C122.687 127.775 122.688 127.919 122.713 128.094C122.713 131.238 124.85 133.256 128.081 133.256C131.25 133.256 133.244 131.181 133.244 127.925C133.212 124.781 131.106 122.7 127.9 122.731ZM146.419 122.731C145.003 122.706 143.635 123.24 142.61 124.216C141.585 125.193 140.986 126.535 140.944 127.95C140.944 130.887 143.306 133.256 146.25 133.256H146.306C148.962 133.719 151.638 131.15 151.813 128.069C151.956 125.212 149.362 122.731 146.419 122.731Z" />
                  </svg>
                  Swagger
                </div>
                <div className="tech-chip" aria-hidden="true">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=electron" alt="" loading="lazy" />
                  Electron
                </div>
                <div className="tech-chip" aria-hidden="true">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=jquery" alt="" loading="lazy" />
                  jQuery
                </div>
                <div className="tech-chip" aria-hidden="true">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=git" alt="" loading="lazy" />
                  Git / GitHub
                </div>
                <div className="tech-chip" aria-hidden="true">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=nextjs" alt="" loading="lazy" />
                  Next.js
                </div>
                <div className="tech-chip" aria-hidden="true">
                  <img className="chip-img" src="https://skillicons.dev/icons?i=react" alt="" loading="lazy" />
                  React
                </div>
              </div>
            </div>
          </div>
          <div className="skill-grid">
            <div className="skill-card">
              <p className="label">前端框架</p>
              <div className="tags">
                <span>Next.js (App Router)</span>
                <span>React</span>
                <span>Vue.js</span>
                <span>Pinia</span>
                <span>Electron.js</span>
              </div>
            </div>
            <div className="skill-card">
              <p className="label">UI / 樣式</p>
              <div className="tags">
                <span>Tailwind CSS</span>
                <span>Windi CSS</span>
                <span>styled-components</span>
                <span>Figma Claude MCP</span>
              </div>
            </div>
            <div className="skill-card">
              <p className="label">狀態管理</p>
              <div className="tags">
                <span>Zustand</span>
                <span>Pinia</span>
                <span>React hooks</span>
              </div>
            </div>
            <div className="skill-card">
              <p className="label">API / 開發流程</p>
              <div className="tags">
                <span>MSW Mock</span>
                <span>Swagger</span>
                <span>TypeScript</span>
                <span>Axios/Fetch</span>
                <span>Postman Mock Server</span>
              </div>
            </div>
            <div className="skill-card">
              <p className="label">其他</p>
              <div className="tags">
                <span>jQuery</span>
                <span>Git / GitHub</span>
                <span>AJAX</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-head">
            <h2>{t('exp-title')}</h2>
            <p>{t('exp-desc')}</p>
          </div>
          <div className="timeline">
            <article className="exp-card">
              <div className="exp-meta">
                <p className="label">{t('exp1-time')}</p>
                <p className="label">{t('exp1-place')}</p>
              </div>
              <h3>{t('exp1-role')}</h3>
              <ul dangerouslySetInnerHTML={html('exp1-list')} />
            </article>

            <article className="exp-card">
              <div className="exp-meta">
                <p className="label">{t('exp2-time')}</p>
                <p className="label">{t('exp2-place')}</p>
              </div>
              <h3>{t('exp2-role')}</h3>
              <ul dangerouslySetInnerHTML={html('exp2-list')} />
            </article>

            <article className="exp-card">
              <div className="exp-meta">
                <p className="label">{t('exp3-time')}</p>
                <p className="label">{t('exp3-place')}</p>
              </div>
              <h3>{t('exp3-role')}</h3>
              <ul dangerouslySetInnerHTML={html('exp3-list')} />
            </article>

            <article className="exp-card compact">
              <div className="exp-meta">
                <p className="label">{t('exp4-time')}</p>
                <p className="label">{t('exp4-place')}</p>
              </div>
              <h3>{t('exp4-role')}</h3>
              <p className="muted">{t('exp4-desc')}</p>
            </article>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-head">
            <h2>{t('proj-title')}</h2>
            <p>{t('proj-desc')}</p>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-head">
                <div>
                  <p className="label">{t('proj1-time')}</p>
                  <h3>{t('proj1-title')}</h3>
                </div>
                <span className="chip">TypeScript · Tailwind · DaisyUI · Zustand</span>
              </div>
              <p>{t('proj1-desc')}</p>
            </article>

            <article className="project-card">
              <div className="project-head">
                <div>
                  <p className="label">{t('proj2-time')}</p>
                  <h3>{t('proj2-title')}</h3>
                </div>
                <span className="chip">React · styled-components · React Router · Firebase Hosting</span>
              </div>
              <p>{t('proj2-desc')}</p>
            </article>
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-head">
            <h2>{t('edu-title')}</h2>
            <p>{t('edu-desc')}</p>
          </div>
          <div className="edu-grid">
            <div className="edu-card">
              <p className="label">{t('edu1-time')}</p>
              <h3>{t('edu1-title')}</h3>
              <p className="muted">{t('edu1-desc')}</p>
            </div>
            <div className="edu-card">
              <p className="label">{t('edu2-label')}</p>
              <h3>{t('edu2-title')}</h3>
              <p className="muted">{t('edu2-desc')}</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="meta-item flat">
            <div className="meta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4.5 6.2 10 10c1.2.8 2.8.8 4 0l5.5-3.8c.3-.2.5-.5.5-.9 0-.7-.6-1.3-1.3-1.3H5.3C4.6 4 4 4.6 4 5.3c0 .3.2.7.5.9ZM20 8.3l-4.7 3.3a4.8 4.8 0 0 1-5.6 0L5 8.3V16c0 1 .8 1.8 1.8 1.8h11.4c1 0 1.8-.8 1.8-1.8V8.3Z" />
              </svg>
            </div>
            <div>
              <p className="label">{t('footer-contact-label')}</p>
              <div className="value contact-lines">
                <div className="contact-line">
                  <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4.5 6.2 10 10c1.2.8 2.8.8 4 0l5.5-3.8c.3-.2.5-.5.5-.9 0-.7-.6-1.3-1.3-1.3H5.3C4.6 4 4 4.6 4 5.3c0 .3.2.7.5.9ZM20 8.3l-4.7 3.3a4.8 4.8 0 0 1-5.6 0L5 8.3V16c0 1 .8 1.8 1.8 1.8h11.4c1 0 1.8-.8 1.8-1.8V8.3Z" />
                  </svg>
                  <span>{t('contact-email')}</span>
                </div>
                <div className="contact-line">
                  <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.6 3.5c.3-.7 1-1 1.7-.8l1.9.6c.7.2 1.2.9 1 1.6l-.5 1.9a1.5 1.5 0 0 1-.7.9 12 12 0 0 0 5 5c.3-.2.6-.5.9-.7l1.9-.5c.7-.2 1.4.2 1.6 1l.6 1.9c.2.7-.1 1.4-.8 1.7l-1.5.7c-.6.3-1.4.4-2 .1A17.2 17.2 0 0 1 4.8 9.1c-.3-.6-.2-1.3.1-2l.7-1.6Z" />
                  </svg>
                  <span>{t('contact-phone')}</span>
                </div>
              </div>
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
