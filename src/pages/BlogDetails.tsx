import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getBlogs } from "../lib/blogApi";
import type { BlogPost } from "../lib/blogApi";

const BlogDetails = () => {
  const { slug } = useParams();

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const posts = await getBlogs();

        const foundPost = posts.find((blog) => blog.fields.slug === slug);

        setPost(foundPost ?? null);
      } catch (error) {
        console.error("Failed to load blog:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [slug]);

  if (loading) {
    return <h2>Loading article...</h2>;
  }

  if (!post) {
    return <h2>Article not found.</h2>;
  }

  const image = post.fields.featuredImage;

  const imageUrl =
    "fields" in image && image.fields.file
      ? `https:${image.fields.file.url}`
      : "";

  return (
    <article className="max-w-4xl mx-auto py-20 px-6">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={post.fields.title}
          className="w-full rounded-xl"
        />
      )}

      <h1 className="text-5xl font-bold mt-10">{post.fields.title}</h1>

      <p className="mt-3 text-gray-500">
        {post.fields.category} • {post.fields.date}
      </p>

      <div className="mt-10 leading-8 text-lg">
        {documentToReactComponents(post.fields.content)}
      </div>
    </article>
  );
};

export default BlogDetails;
