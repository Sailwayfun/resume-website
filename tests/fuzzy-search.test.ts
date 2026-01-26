import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import Fuse from 'fuse.js';

type SearchIndex = {
  docs: Array<{
    id: string;
    title: string;
    subtitle?: string;
    summary?: string;
    tags?: string[];
    section: string;
    type: string;
    lang: string;
    url: string;
  }>;
};

const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'tags', weight: 0.25 },
    { name: 'subtitle', weight: 0.2 },
    { name: 'summary', weight: 0.15 },
    { name: 'section', weight: 0.05 },
  ],
  threshold: 0.4,
  includeScore: true,
  ignoreLocation: true,
};

function loadIndex(lang: 'en' | 'zh'): SearchIndex {
  const indexPath = path.join(process.cwd(), 'public', `search-index.${lang}.json`);
  const content = fs.readFileSync(indexPath, 'utf-8');
  return JSON.parse(content) as SearchIndex;
}

function search(fuse: Fuse<SearchIndex['docs'][number]>, query: string) {
  return fuse.search(query).map((result) => result.item);
}

describe('fuzzy search for HR-style keywords', () => {
  const enIndex = loadIndex('en');
  const zhIndex = loadIndex('zh');
  const fuseEn = new Fuse(enIndex.docs, fuseOptions);
  const fuseZh = new Fuse(zhIndex.docs, fuseOptions);

  it('finds common English hiring keywords (TypeScript, React, Front-end, Experience, Education)', () => {
    const typescriptDoc = enIndex.docs.find((doc) => doc.tags?.includes('TypeScript'));
    const reactDoc = enIndex.docs.find((doc) => doc.tags?.includes('React'));
    const frontendDoc = enIndex.docs.find((doc) => doc.title.includes('Front-end Engineer'));
    const experienceDoc = enIndex.docs.find((doc) => doc.section === 'Experience');
    const educationDoc = enIndex.docs.find((doc) => doc.section === 'Education');

    expect(typescriptDoc).toBeTruthy();
    expect(reactDoc).toBeTruthy();
    expect(frontendDoc).toBeTruthy();
    expect(experienceDoc).toBeTruthy();
    expect(educationDoc).toBeTruthy();

    const typescriptResults = search(fuseEn, 'TypeScript');
    const reactResults = search(fuseEn, 'React');
    const frontendResults = search(fuseEn, 'frontend engineer');
    const experienceResults = search(fuseEn, 'Experience');
    const educationResults = search(fuseEn, 'Education');

    expect(typescriptResults).toContain(typescriptDoc);
    expect(reactResults).toContain(reactDoc);
    expect(frontendResults).toContain(frontendDoc);
    expect(experienceResults).toContain(experienceDoc);
    expect(educationResults).toContain(educationDoc);
  });

  it('finds common Chinese hiring keywords (前端, 區塊鏈, TypeScript, 工作經歷, 學歷)', () => {
    const frontendDoc = zhIndex.docs.find((doc) => doc.title.includes('前端'));
    const blockchainDoc = zhIndex.docs.find((doc) => doc.summary?.includes('區塊鏈'));
    const typescriptDoc = zhIndex.docs.find((doc) => doc.tags?.includes('TypeScript'));
    const experienceDoc = zhIndex.docs.find((doc) => doc.section === '工作經歷');
    const educationDoc = zhIndex.docs.find((doc) => doc.section === '學歷與其他');

    expect(frontendDoc).toBeTruthy();
    expect(blockchainDoc).toBeTruthy();
    expect(typescriptDoc).toBeTruthy();
    expect(experienceDoc).toBeTruthy();
    expect(educationDoc).toBeTruthy();

    const frontendResults = search(fuseZh, '前端');
    const blockchainResults = search(fuseZh, '區塊鏈');
    const typescriptResults = search(fuseZh, 'TypeScript');
    const experienceResults = search(fuseZh, '工作經歷');
    const educationResults = search(fuseZh, '學歷');

    expect(frontendResults).toContain(frontendDoc);
    expect(blockchainResults).toContain(blockchainDoc);
    expect(typescriptResults).toContain(typescriptDoc);
    expect(experienceResults).toContain(experienceDoc);
    expect(educationResults).toContain(educationDoc);
  });
});
