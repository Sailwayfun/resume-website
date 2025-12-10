const topBar = document.querySelector('.top-bar');
const toggleButton = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const translationsPath = 'i18n.json';

function handleScroll() {
  if (!topBar) return;
  const shouldFloat = window.scrollY > 10;
  topBar.classList.toggle('floating', shouldFloat);
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

function applyTheme(mode) {
  const root = document.documentElement;
  if (mode === 'light') {
    root.classList.add('light');
    toggleButton.innerText = '☀️';
  } else {
    root.classList.remove('light');
    toggleButton.innerText = '🌙';
  }
}

function initTheme() {
  const stored = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const mode = stored || (prefersLight ? 'light' : 'dark');
  applyTheme(mode);
}

toggleButton?.addEventListener('click', () => {
  const isLight = document.documentElement.classList.contains('light');
  const next = isLight ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

initTheme();

let translations = null;
let currentLang = 'zh';
const fallbackI18n = {
  zh: {
    eyebrow: 'Front-end Engineer · 1-2 年經驗',
    'hero-name': '廖偉帆 <span class="sub">Sail Liao</span>',
    lede:
      '使用 Next.js、React、Vue 與 TypeScript 打造後臺、桌面工具與瀏覽器插件。熟悉 UI 開發、狀態管理、Mock API 與前後端協作，樂於將需求轉化成流暢的互動體驗。',
    'meta-location-label': '所在地',
    'meta-location-value': '新北市汐止區',
    'meta-contact-label': '聯絡',
    'meta-contact-value': 'liaoleon000513@gmail.com ・ 0937-941-020',
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
    'footer-contact-value': 'liaoleon000513@gmail.com ・ 0937-941-020',
    'footer-role-label': '偏好職務 / 地點',
    'footer-role-value': '前端工程師 / 軟體工程師 · 臺北 / 新北 / Remote',
    'footer-update': '最後更新：2025',
  },
  en: {
    eyebrow: 'Front-end Engineer · 1-2 yrs experience',
    'hero-name': 'Wei-Fan Liao <span class="sub">Sail Liao</span>',
    lede:
      'Front-end engineer building dashboards, desktop tools, and browser extensions with Next.js, React, Vue, and TypeScript. Enjoys UI implementation, state management, mock APIs, and tight collaboration with backend teams.',
    'meta-location-label': 'Location',
    'meta-location-value': 'Xizhi, New Taipei',
    'meta-contact-label': 'Contact',
    'meta-contact-value': 'liaoleon000513@gmail.com · +886 937-941-020',
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
    'footer-contact-value': 'liaoleon000513@gmail.com · +886 937-941-020',
    'footer-role-label': 'Preferred Roles / Location',
    'footer-role-value': 'Front-end Engineer / Software Engineer · Taipei / New Taipei / Remote',
    'footer-update': 'Last updated: 2025',
  },
};

async function loadTranslations() {
  if (translations) return translations;
  try {
    const res = await fetch(translationsPath);
    if (!res.ok) throw new Error(`status ${res.status}`);
    translations = await res.json();
  } catch (err) {
    console.warn('i18n load failed, fallback to embedded zh content', err);
    translations = fallbackI18n;
  }
  return translations;
}

function applyLang(lang) {
  if (!translations) return;
  const dict = translations[lang] || translations.zh || {};
  currentLang = lang in translations ? lang : 'zh';
  document.documentElement.setAttribute('lang', currentLang === 'en' ? 'en' : 'zh-Hant');
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) el.innerHTML = dict[key];
  });
  if (langToggle) langToggle.textContent = currentLang === 'en' ? '中' : 'EN';
}

async function initLang() {
  const stored = localStorage.getItem('lang');
  const prefersZh = navigator.language && navigator.language.toLowerCase().startsWith('zh');
  const lang = stored || (prefersZh ? 'zh' : 'en');
  await loadTranslations();
  applyLang(lang);
}

langToggle?.addEventListener('click', async () => {
  await loadTranslations();
  const next = currentLang === 'zh' ? 'en' : 'zh';
  applyLang(next);
  localStorage.setItem('lang', next);
});

loadTranslations().then(() => initLang());
