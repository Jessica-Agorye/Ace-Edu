import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { BlogPost } from "../types/blog";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="rounded-xl overflow-hidden shadow bg-white">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <div className="flex justify-between text-sm">
          <span>{post.category}</span>

          <span>{post.date}</span>
        </div>

        <h2 className="text-2xl font-bold mt-3">{post.title}</h2>

        <p className="mt-4">{post.description}</p>

        <Link
          to={`/blog/${post.slug}`}
          className="flex items-center gap-2 mt-6"
        >
          Read Article
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
