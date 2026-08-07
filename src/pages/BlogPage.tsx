import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogData";

const BlogPage = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold">Latest Articles</h1>

      <p className="mt-5 text-gray-600">
        Read our latest travel and relocation articles.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {blogs.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
