import client from "./contentful";
import type { BlogPostSkeleton } from "../types/blog";

export const getBlogs = async () => {
  const response = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    include: 2,
  });

  return response.items;
};

export type BlogPost = Awaited<ReturnType<typeof getBlogs>>[number];