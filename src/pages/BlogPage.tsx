import { useEffect, useState } from "react";

import BlogCard from "../components/BlogCard";
import { getBlogs } from "../lib/blogApi";
import type { BlogPost } from "../lib/blogApi";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 6;

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

  // Calculate where the current page starts
  const startIndex = (currentPage - 1) * blogsPerPage;

  // Get only the blogs for the current page
  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  if (loading) {
    return <h2>Loading blogs...</h2>;
  }

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBlogs.map((post) => (
          <BlogCard key={post.sys.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setCurrentPage((page) => page - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((page) => page + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default BlogPage;
