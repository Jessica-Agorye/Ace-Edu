import type { EntryFieldTypes, EntrySkeletonType } from "contentful";

export type BlogPostSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    category: EntryFieldTypes.Text;
    date: EntryFieldTypes.Date;
    excerpt: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    featuredImage: EntryFieldTypes.AssetLink;
  },
  "blogPost"
>;

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  content: string;
  date: string;
  image: string;
};
