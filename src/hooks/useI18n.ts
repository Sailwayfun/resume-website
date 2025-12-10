import { useEffect, useState, useCallback } from 'react';
import { TRANSLATIONS_PATH, fallbackTranslations } from '../i18n';
import type { Lang, Translations } from '../types';

const STORAGE_KEY = 'lang';

export function useI18n() {
  const [lang, setLang] = useState<Lang>('zh');
  const [translations, setTranslations] = useState<Translations>(fallbackTranslations);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    const prefersZh = navigator.language && navigator.language.toLowerCase().startsWith('zh');
    setLang(stored || (prefersZh ? 'zh' : 'en'));
  }, []);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(TRANSLATIONS_PATH);
        if (!res.ok) throw new Error(`status ${res.status}`);
        const json: Translations = await res.json();
        setTranslations(json);
      } catch (err) {
        console.warn('i18n load failed, using fallback', err);
        setTranslations(fallbackTranslations);
      }
    }
    load();
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'zh-Hant');
  }, [lang]);

  const t = useCallback(
    (key: string) => translations[lang]?.[key] ?? translations.zh?.[key] ?? '',
    [lang, translations]
  );

  const html = useCallback((key: string) => ({ __html: t(key) }), [t]);

  const toggleLang = () => setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));

  return { lang, toggleLang, t, html };
}
