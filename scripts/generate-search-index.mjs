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
  } catch {
    return null;
  }
}

/**
 * Parse projects into SearchDoc array
 * @param {object} data
 * @param {string} lang
 * @returns {object[]}
 */
function parseProjects(data, lang) {
  if (!data?.items) return [];
  return data.items.map((item, index) => ({
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
  if (!data?.items) return [];
  return data.items.map((item, index) => ({
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
  if (!data?.items) return [];
  return data.items.map((item, index) => ({
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
  if (!data?.items) return [];
  return data.items.map((item, index) => ({
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
    const langDir = path.join(CONTENT_DIR, lang);
    const docs = [];

    // Parse projects
    const projectsData = readJson(path.join(langDir, 'projects.json'));
    if (projectsData) {
      docs.push(...parseProjects(projectsData, lang));
      console.log(`  [${lang}] Projects: ${projectsData.items?.length || 0} items`);
    }

    // Parse experience
    const experienceData = readJson(path.join(langDir, 'experience.json'));
    if (experienceData) {
      docs.push(...parseExperience(experienceData, lang));
      console.log(`  [${lang}] Experience: ${experienceData.items?.length || 0} items`);
    }

    // Parse skills
    const skillsData = readJson(path.join(langDir, 'skills.json'));
    if (skillsData) {
      docs.push(...parseSkills(skillsData, lang));
      console.log(`  [${lang}] Skills: ${skillsData.items?.length || 0} items`);
    }

    // Parse education
    const educationData = readJson(path.join(langDir, 'education.json'));
    if (educationData) {
      docs.push(...parseEducation(educationData, lang));
      console.log(`  [${lang}] Education: ${educationData.items?.length || 0} items`);
    }

    // Build index
    const index = {
      version: VERSION,
      generatedAt: new Date().toISOString(),
      docs,
    };

    // Write output
    const outputPath = path.join(OUTPUT_DIR, `search-index.${lang}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(index, null, 2), 'utf-8');
    console.log(`  ✅ Generated: ${outputPath} (${docs.length} docs)\n`);
  }

  console.log('✨ Search index generation complete!');
}

main().catch((err) => {
  console.error('❌ Error generating search index:', err);
  process.exit(1);
});
