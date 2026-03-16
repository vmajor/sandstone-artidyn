import { defineCollection, z } from "astro:content";

const team = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string().optional(),
      bio: z.string().optional(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      socials: z
        .object({
          twitter: z.string().optional(),
          website: z.string().optional(),
          linkedin: z.string().optional(),
          email: z.string().optional(),
          github: z.string().optional(),
          huggingface: z.string().optional(),
        })
        .optional(),
    }),
});

// Use 'posts' for your "Wild West" narrative and "Case Studies"
const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      team: z.string(), // This matches the author name
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    }),
});

const legal = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});

// THE BIG CHANGE: Hijacking Projects for Robots
const projects = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date().optional(),
      
      // Detailed Robot Specifications
      price: z.number().optional(),
      dimensions: z.string().optional(),
      weight: z.string().optional(),
      kinematics: z.string().optional(),
      espressoUnit: z.string().optional(),
      power: z.string().optional(),
      productionTime: z.string().optional(),
      throughput: z.string().optional(),
      cupCapacity: z.string().optional(),
      flavorMatrix: z.string().optional(),
      latteArt: z.string().optional(),
      enclosureType: z.string().optional(),

      // Filtering fields
      features: z.array(z.string()).optional(),
      scenarios: z.array(z.string()).optional(),
      category: z.enum(["high-volume", "craft", "compact", "certified"]).optional(),

      // Mapped to "Manufacturer / Engine"
      client: z.string().optional(), 
      
      // Mapped to "Best For / Use Case"
      location: z.string().optional(), 
      
      // Mapped to "Throughput / Specs"
      year: z.string().optional(), 
      
      // Mapped to "Category" - We kept this for backward compatibility if needed
      status: z.enum(["high-volume", "craft", "compact", "certified"]).optional(), 
      
      // Mapped to "Footprint"
      area: z.string().optional(), 
      
      cover: z.object({
        url: image(),
        alt: z.string(),
      }),
      gallery: z.array(
        z.object({
          url: image(),
          alt: z.string().optional(),
        })
      ).default([]),
    }),
});

const services = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      category: z.string().optional(),
      image: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

export const collections = {
  team: team,
  legal: legal,
  posts: postsCollection,
  projects: projects,
  services: services,
};
