import type { Lang } from '../types';
import { t } from '../i18n/translations';

export type NavItem = { href: string; label: string };

export function getNav(lang: Lang): NavItem[] {
  return [
    { href: '#experience', label: t(lang, 'nav-experience') || '經歷' },
    { href: '#projects', label: t(lang, 'nav-projects') || '專案' },
    { href: '#skills', label: t(lang, 'nav-skills') || '技能' },
    { href: '#education', label: t(lang, 'nav-education') || '學歷' },
  ];
}

export type SkillItem = { label: string; tags: string[] };

export function getSkillItems(lang: Lang): SkillItem[] {
  if (lang === 'en') {
    return [
      {
        label: 'Frameworks',
        tags: ['Next.js (App Router)', 'React', 'Vue.js', 'Pinia', 'Electron.js'],
      },
      {
        label: 'UI / Styling',
        tags: ['Tailwind CSS', 'Windi CSS', 'styled-components', 'Figma Claude MCP'],
      },
      { label: 'State', tags: ['Zustand', 'Pinia', 'React hooks'] },
      {
        label: 'API / Workflow',
        tags: ['MSW Mock', 'Swagger', 'TypeScript', 'Axios/Fetch', 'Postman Mock Server'],
      },
      { label: 'Other', tags: ['jQuery', 'Git / GitHub', 'AJAX'] },
    ];
  }

  return [
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
}

export type ExperienceItem = {
  time: string;
  place: string;
  role: string;
  listHtml?: string;
  desc?: string;
  compact?: boolean;
};

export function getExperienceItems(lang: Lang): ExperienceItem[] {
  return [
    {
      time: t(lang, 'exp1-time'),
      place: t(lang, 'exp1-place'),
      role: t(lang, 'exp1-role'),
      listHtml: t(lang, 'exp1-list'),
    },
    {
      time: t(lang, 'exp2-time'),
      place: t(lang, 'exp2-place'),
      role: t(lang, 'exp2-role'),
      listHtml: t(lang, 'exp2-list'),
    },
    {
      time: t(lang, 'exp3-time'),
      place: t(lang, 'exp3-place'),
      role: t(lang, 'exp3-role'),
      listHtml: t(lang, 'exp3-list'),
    },
    {
      time: t(lang, 'exp4-time'),
      place: t(lang, 'exp4-place'),
      role: t(lang, 'exp4-role'),
      desc: t(lang, 'exp4-desc'),
      compact: true,
    },
  ];
}

export type ProjectItem = { time: string; title: string; desc: string; chip: string };

export function getProjectItems(lang: Lang): ProjectItem[] {
  return [
    {
      time: t(lang, 'proj1-time'),
      title: t(lang, 'proj1-title'),
      desc: t(lang, 'proj1-desc'),
      chip: 'TypeScript · Tailwind · DaisyUI · Zustand',
    },
    {
      time: t(lang, 'proj2-time'),
      title: t(lang, 'proj2-title'),
      desc: t(lang, 'proj2-desc'),
      chip: 'React · styled-components · React Router · Firebase Hosting',
    },
  ];
}

export type EducationItem = { time: string; title: string; desc: string; label?: string };

export function getEducationItems(lang: Lang): EducationItem[] {
  return [
    { time: t(lang, 'edu1-time'), title: t(lang, 'edu1-title'), desc: t(lang, 'edu1-desc') },
    {
      label: t(lang, 'edu2-label'),
      time: t(lang, 'edu2-label'),
      title: t(lang, 'edu2-title'),
      desc: t(lang, 'edu2-desc'),
    },
  ];
}
