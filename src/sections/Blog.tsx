import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { client } from "../services/contentful";
import { Link } from "react-router-dom";

import { EntrySkeletonType, Asset } from "contentful";

/* ✅ BLOG POST TYPE (frontend model) */
type BlogPost = {
  title: string;
  slug: string;
  category: string;
  description: string;
  date: string;
  image: string;
};

/* ✅ CONTENTFUL FIELDS */
type BlogFields = {
  title: string;
  slug: string;
  category: string;
  description: string;
  date: string;
  image: Asset;
};

/* ✅ CONTENTFUL SKELETON */
type BlogSkeleton = EntrySkeletonType<BlogFields, "blogPost">;

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries<BlogSkeleton>({
          content_type: "blogPost",
          include: 2,
        });

        const formattedPosts: BlogPost[] = response.items.map((item) => ({
          title: item.fields.title,
          slug: item.fields.slug,
          category: item.fields.category,
          description: item.fields.description,
          date: item.fields.date,
          image: `https:${(item.fields.image as Asset)?.fields?.file?.url ?? ""}`,
        }));

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section
      id="blog"
      className="relative py-24 px-5 md:px-10 bg-[#f8fafc] overflow-hidden"
    >
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-amber-200/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-amber-500 transition"
          >
            ← Back to Home
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-amber-500 font-semibold mb-5">
            Blog & Insights
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Resources For Your Global Journey
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Stay informed with travel tips, visa insights, relocation guidance,
            and international opportunities curated for you.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/70 backdrop-blur-sm border border-white/40 rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-amber-500">
                    {post.category}
                  </p>
                  <p className="text-sm text-gray-400">{post.date}</p>
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {post.title}
                </h3>

                <p className="mt-4 text-gray-600">{post.description}</p>

                <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-amber-500 transition">
                  Read Article
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
