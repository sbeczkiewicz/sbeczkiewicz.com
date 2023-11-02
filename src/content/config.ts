import { defineCollection } from "astro:content";
import { photoSchema } from "../composables/Photo";

const photos = defineCollection({
  schema: photoSchema,
});

export const collections = {
  photos,
};