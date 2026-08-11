import { useEffect, useState } from "react";

import BlogCard from "../components/BlogCard";
import { getBlogs } from "../lib/blogApi";
import type { BlogPost } from "../lib/blogApi";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const posts = await getBlogs();

        setBlogs(posts);
      } catch (error) {
        console.error("Failed to load blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (loading) {
    return <h2>Loading blogs...</h2>;
  }

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <BlogCard key={post.sys.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
