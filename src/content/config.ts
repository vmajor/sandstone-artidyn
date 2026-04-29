import { defineCollection, z } from "astro:content";

const team = defineCollection({
  schema: z.object({
      name: z.string(),
      role: z.string().optional(),
      bio: z.string().optional(),
      image: z.object({
        url: z.string(),
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

const postsCollection = defineCollection({
  schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      team: z.string(),
      image: z.object({
        url: z.string(),
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

const projects = defineCollection({
  schema: z.object({
      title: z.string(),
      pubDate: z.date().optional(),
      price: z.number().optional(),
      dimensions: z.string().optional(),
      weight: z.string().optional(),
      kinematics: z.string().optional(),
      espressoUnit: z.string().optional(),
      power: z.string().optional(),
      productionTime: z.string().optional(),
      throughput: z.string().optional(),
      cupCapacity: z.string().optional(),
      recipes: z.string().optional(),
      syrups: z.string().optional(),
      toppings: z.string().optional(),
      iceCapacity: z.string().optional(),
      milkRefrigeration: z.string().optional(),
      milkFrothingTemp: z.string().optional(),
      cleaningSystem: z.string().optional(),
      latteArt: z.string().optional(),
      enclosureType: z.string().optional(),
      display: z.string().optional(),
      paymentSystems: z.array(z.string()).optional(),
      fleetManagement: z.string().optional(),
      mobility: z.string().optional(),
      certifications: z.array(z.string()).optional(),
      features: z.array(z.string()).optional(),
      scenarios: z.array(z.string()).optional(),
      category: z.enum(["high-volume", "craft", "compact", "certified"]).optional(),
      client: z.string().optional(), 
      location: z.string().optional(), 
      year: z.string().optional(), 
      status: z.enum(["high-volume", "craft", "compact", "certified"]).optional(), 
      area: z.string().optional(), 
      cover: z.object({
        url: z.string(),
        alt: z.string(),
      }),
      gallery: z.array(
        z.object({
          url: z.string(),
          alt: z.string().optional(),
        })
      ).default([]),
    }),
});

const services = defineCollection({
  schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      category: z.string().optional(),
      image: z
        .object({
          url: z.string(),
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
