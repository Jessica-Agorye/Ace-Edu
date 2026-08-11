import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import type { BlogPost } from "../lib/blogApi";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const image = post.fields.featuredImage;

  const imageUrl =
    "fields" in image && image.fields.file
      ? `https:${image.fields.file.url}`
      : "";

  return (
    <article className="rounded-xl overflow-hidden shadow bg-white">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={post.fields.title}
          className="w-full h-64 object-cover"
        />
      )}

      <div className="p-6">
        <div className="flex justify-between text-sm">
          <span>{post.fields.category}</span>

          <span>{post.fields.date}</span>
        </div>

        <h2 className="text-2xl font-bold mt-3">
          {post.fields.title}
        </h2>

        <p className="mt-4">
          {post.fields.excerpt}
        </p>

        <Link
          to={`/blog/${post.fields.slug}`}
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