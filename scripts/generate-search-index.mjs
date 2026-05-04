// scripts/generate-search-index.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '..', 'src', 'content');
const OUTPUT_DIR = path.join(__dirname, '..', 'public');

const LANGS = ['zh', 'en'];
const VERSION = '1.0.0';

// Section display names per language
const SECTION_NAMES = {
  zh: {
    projects: '專案成就',
    experience: '工作經歷',
    skills: '核心技能',
    education: '學歷與其他',
  },
  en: {
    projects: 'Projects',
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
  },
};

// Rank by type (higher = more prominent in tie-break)
const RANK_MAP = {
  project: 90,
  experience: 80,
  skill: 70,
  education: 60,
};

const CONTENT_SOURCES = [
  {
    file: 'projects.json',
    label: 'Projects',
    parse: parseProjects,
  },
  {
    file: 'experience.json',
    label: 'Experience',
    parse: parseExperience,
  },
  {
    file: 'skills.json',
    label: 'Skills',
    parse: parseSkills,
  },
  {
    file: 'education.json',
    label: 'Education',
    parse: parseEducation,
  },
];

/**
 * Strip HTML tags from string
 * @param {string} html
 * @returns {string}
 */
function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Parse chip string into tags array
 * @param {string} chip
 * @returns {string[]}
 */
function parseTags(chip) {
  if (!chip) return [];
  return chip
    .split(/\s*[·,]\s*/)
    .map((t) => t.trim())
    .filter(Boolean);
}

/**
 * Build URL with anchor
 * @param {string} lang
 * @param {string} anchorId
 * @returns {string}
 */
function buildUrl(lang, anchorId) {
  const base = lang === 'zh' ? '/' : '/en/';
  return `${base}#${anchorId}`;
}

/**
 * Read JSON file
 * @param {string} filePath
 * @returns {object|null}
 */
function readJson(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    if (err.code === 'ENOENT') {
      return null;
    }

    throw new Error(`Unable to read JSON file: ${filePath}`, { cause: err });
  }
}

function getItems(data) {
  return data?.items || [];
}

function logSourceCount(lang, source, data) {
  console.log(`  [${lang}] ${source.label}: ${getItems(data).length} items`);
}

function buildDocsForLang(lang) {
  const langDir = path.join(CONTENT_DIR, lang);

  return CONTENT_SOURCES.flatMap((source) => {
    const data = readJson(path.join(langDir, source.file));
    if (!data) {
      return [];
    }

    logSourceCount(lang, source, data);
    return source.parse(data, lang);
  });
}

function writeSearchIndex(lang, docs) {
  const outputPath = path.join(OUTPUT_DIR, `search-index.${lang}.json`);
  const index = {
    version: VERSION,
    generatedAt: new Date().toISOString(),
    docs,
  };

  fs.writeFileSync(outputPath, JSON.stringify(index, null, 2), 'utf-8');
  console.log(`  ✅ Generated: ${outputPath} (${docs.length} docs)\n`);
}

function parseItems(data, mapItem) {
  return getItems(data).map(mapItem);
}

/**
 * Parse projects into SearchDoc array
 * @param {object} data
 * @param {string} lang
 * @returns {object[]}
 */
function parseProjects(data, lang) {
  return parseItems(data, (item, index) => ({
    id: `${lang}:project:${index}`,
    type: 'project',
    lang,
    title: item.title,
    subtitle: item.time,
    tags: parseTags(item.chip),
    summary: item.desc,
    url: buildUrl(lang, `projects-${index}`),
    section: SECTION_NAMES[lang].projects,
    rank: RANK_MAP.project,
  }));
}

/**
 * Parse experience into SearchDoc array
 * @param {object} data
 * @param {string} lang
 * @returns {object[]}
 */
function parseExperience(data, lang) {
  return parseItems(data, (item, index) => ({
    id: `${lang}:experience:${index}`,
    type: 'experience',
    lang,
    title: item.role,
    subtitle: item.place,
    tags: [],
    summary: item.desc || stripHtml(item.listHtml),
    url: buildUrl(lang, `experience-${index}`),
    section: SECTION_NAMES[lang].experience,
    rank: RANK_MAP.experience,
  }));
}

/**
 * Parse skills into SearchDoc array
 * @param {object} data
 * @param {string} lang
 * @returns {object[]}
 */
function parseSkills(data, lang) {
  return parseItems(data, (item, index) => ({
    id: `${lang}:skill:${index}`,
    type: 'skill',
    lang,
    title: item.label,
    subtitle: undefined,
    tags: item.tags || [],
    summary: item.tags?.join(', '),
    url: buildUrl(lang, `skills-${index}`),
    section: SECTION_NAMES[lang].skills,
    rank: RANK_MAP.skill,
  }));
}

/**
 * Parse education into SearchDoc array
 * @param {object} data
 * @param {string} lang
 * @returns {object[]}
 */
function parseEducation(data, lang) {
  return parseItems(data, (item, index) => ({
    id: `${lang}:education:${index}`,
    type: 'education',
    lang,
    title: item.title,
    subtitle: item.label || item.time,
    tags: [],
    summary: item.desc,
    url: buildUrl(lang, `education-${index}`),
    section: SECTION_NAMES[lang].education,
    rank: RANK_MAP.education,
  }));
}

async function main() {
  console.log('🔍 Generating search index...\n');

  for (const lang of LANGS) {
    writeSearchIndex(lang, buildDocsForLang(lang));
  }

  console.log('✨ Search index generation complete!');
}

main().catch((err) => {
  console.error('❌ Error generating search index:', err);
  process.exit(1);
});
