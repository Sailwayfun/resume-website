import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const contactSchema = z.object({
  email: z.string().email(),
});

const resumeSchema = z.object({
  locale: z.enum(['zh', 'en']),
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
  sections: z.object({
    skills: z.object({
      title: z.string(),
      desc: z.string(),
      items: z.array(
        z.object({
          label: z.string(),
          tags: z.array(z.string()),
        })
      ),
    }),
    experience: z.object({
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
    }),
    projects: z.object({
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
    }),
    education: z.object({
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
    }),
  }),
  footer: z.object({
    contactLabel: z.string(),
    roleLabel: z.string(),
    roleValue: z.string(),
    updateText: z.string(),
  }),
});

const contact = defineCollection({
  schema: contactSchema,
  loader: glob({
    pattern: 'src/data/contact/*.json',
  }),
});

const resume = defineCollection({
  schema: resumeSchema,
  loader: glob({
    pattern: 'src/content/*/resume.json',
  }),
});

export const collections = {
  contact,
  resume,
};
