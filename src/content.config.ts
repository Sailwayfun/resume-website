import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const contactSchema = z.object({
  email: z.string().email(),
});

const localeSchema = z.object({
  locale: z.enum(['zh', 'en']),
});

const baseSchema = localeSchema.extend({
  meta: z.object({
    title: z.string(),
    description: z.string(),
    ogUrl: z.string(),
    ogImageUrl: z.string(),
  }),
  hero: z.object({
    eyebrowHtml: z.string(),
    nameHtml: z.string(),
    ledeHtml: z.string(),
    locationLabel: z.string(),
    locationValue: z.string(),
    contactLabel: z.string(),
    contactEmail: z.string(),
    titleLabel: z.string(),
    titleValue: z.string(),
    langLabel: z.string(),
    langValue: z.string(),
    ctaLabel: z.string(),
  }),
  nav: z.array(
    z.object({
      href: z.string(),
      label: z.string(),
    })
  ),
  footer: z.object({
    contactLabel: z.string(),
    roleLabel: z.string(),
    roleValue: z.string(),
    updateText: z.string(),
  }),
});

const skillsSchema = localeSchema.extend({
  title: z.string(),
  desc: z.string(),
  items: z.array(
    z.object({
      label: z.string(),
      tags: z.array(z.string()),
    })
  ),
});

const experienceSchema = localeSchema.extend({
  title: z.string(),
  desc: z.string(),
  items: z.array(
    z.object({
      time: z.string(),
      place: z.string(),
      role: z.string(),
      listHtml: z.string().optional(),
      desc: z.string().optional(),
      compact: z.boolean().optional(),
    })
  ),
});

const projectsSchema = localeSchema.extend({
  title: z.string(),
  desc: z.string(),
  items: z.array(
    z.object({
      time: z.string(),
      title: z.string(),
      desc: z.string(),
      chip: z.string(),
    })
  ),
});

const educationSchema = localeSchema.extend({
  title: z.string(),
  desc: z.string(),
  items: z.array(
    z.object({
      time: z.string(),
      title: z.string(),
      desc: z.string(),
      label: z.string().optional(),
    })
  ),
});

const linksSchema = z.object({
  links: z.object({
    social: z.array(
      z.object({
        id: z.string(),
        label: z.string(),
        url: z.string().url(),
      })
    ),
    projects: z.array(
      z.object({
        id: z.string(),
        urls: z.object({
          web: z.string().url().optional(),
          repo: z.string().url(),
        }),
      })
    ),
  }),
});

const contact = defineCollection({
  schema: contactSchema,
  loader: glob({
    pattern: 'src/content/shared/contact.json',
  }),
});

const base = defineCollection({
  schema: baseSchema,
  loader: glob({
    pattern: 'src/content/*/base.json',
  }),
});

const skills = defineCollection({
  schema: skillsSchema,
  loader: glob({
    pattern: 'src/content/*/skills.json',
  }),
});

const experience = defineCollection({
  schema: experienceSchema,
  loader: glob({
    pattern: 'src/content/*/experience.json',
  }),
});

const projects = defineCollection({
  schema: projectsSchema,
  loader: glob({
    pattern: 'src/content/*/projects.json',
  }),
});

const education = defineCollection({
  schema: educationSchema,
  loader: glob({
    pattern: 'src/content/*/education.json',
  }),
});

const links = defineCollection({
  schema: linksSchema,
  loader: glob({
    pattern: 'src/content/shared/links.json',
  }),
});

export const collections = {
  contact,
  base,
  skills,
  experience,
  projects,
  education,
  links,
};
