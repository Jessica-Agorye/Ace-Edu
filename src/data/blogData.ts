import { BlogPost } from "../types/blog";

export const blogs: BlogPost[] = [
  {
    id: 1,
    title: "How to Prepare for Studying Abroad",
    slug: "prepare-for-studying-abroad",
    category: "Study Abroad",
    description: "Everything you should know before leaving your country.",
    content:
      "This is the full article. Here you can write as many paragraphs as you want.",
    date: "August 7, 2026",
    image: "https://picsum.photos/600/400?random=1",
  },

  {
    id: 2,
    title: "Top Countries for International Students",
    slug: "top-countries",
    category: "Travel",
    description: "Discover the best destinations for higher education.",
    content: "This is another article. Imagine this came from a CMS.",
    date: "August 5, 2026",
    image: "https://picsum.photos/600/400?random=2",
  },

  {
    id: 3,
    title: "Visa Interview Tips",
    slug: "visa-interview",
    category: "Visa",
    description: "Simple ways to prepare for your visa interview.",
    content: "Full article goes here.",
    date: "August 2, 2026",
    image: "https://picsum.photos/600/400?random=3",
  },
];
