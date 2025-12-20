export type Lang = 'zh' | 'en';

export type NavItem = { href: string; label: string };

export type SkillItem = { label: string; tags: string[] };

export type ExperienceItem = {
  time: string;
  place: string;
  role: string;
  listHtml?: string;
  desc?: string;
  compact?: boolean;
};

export type ProjectItem = { time: string; title: string; desc: string; chip: string };

export type EducationItem = { time: string; title: string; desc: string; label?: string };

export type ResumeContent = {
  meta: {
    title: string;
    description: string;
    ogUrl: string;
    ogImageUrl: string;
  };
  hero: {
    eyebrowHtml: string;
    nameHtml: string;
    ledeHtml: string;
    locationLabel: string;
    locationValue: string;
    contactLabel: string;
    contactEmail: string;
    titleLabel: string;
    titleValue: string;
    langLabel: string;
    langValue: string;
    ctaLabel: string;
  };
  nav: NavItem[];
  sections: {
    skills: {
      title: string;
      desc: string;
      items: SkillItem[];
    };
    experience: {
      title: string;
      desc: string;
      items: ExperienceItem[];
    };
    projects: {
      title: string;
      desc: string;
      items: ProjectItem[];
    };
    education: {
      title: string;
      desc: string;
      items: EducationItem[];
    };
  };
  footer: {
    contactLabel: string;
    roleLabel: string;
    roleValue: string;
    updateText: string;
  };
};
