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
