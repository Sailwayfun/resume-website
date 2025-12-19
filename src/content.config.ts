import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const contactSchema = z.object({
  email: z.string().email(),
});

const contact = defineCollection({
  schema: contactSchema,
  loader: glob({
    pattern: 'src/data/contact/*.json',
  }),
});

export const collections = {
  contact,
};
