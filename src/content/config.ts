// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const projectsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    description: z.string(),
    featuredImage: z.string(),
    floorPlan: z.string(),
  }),
});

const servicesCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    description: z.string(),
    featuredImage: z.string(),
    gallery: z.array(z.string()).optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'projects': projectsCollection,
  'services': servicesCollection,
};