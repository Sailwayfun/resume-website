export type SearchDocType = 'project' | 'experience' | 'skill' | 'education';

export type SearchDoc = {
  id: string; // Format: lang:type:index (e.g., "zh:project:0")
  type: SearchDocType;
  lang: 'zh' | 'en';
  title: string;
  subtitle?: string;
  tags?: string[];
  summary?: string;
  url: string; // /#projects-0 or /en/#projects-0
  section: string; // Display group name
  rank: number; // 0-100 for tie-breaking
};

export type SearchIndex = {
  version: string;
  generatedAt: string;
  docs: SearchDoc[];
};
