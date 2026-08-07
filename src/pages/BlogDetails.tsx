import { useParams } from "react-router-dom";
import { blogs } from "../data/blogData";

const BlogDetails = () => {
  const { slug } = useParams();

  const post = blogs.find((blog) => blog.slug === slug);

  if (!post) {
    return <h2>Article not found.</h2>;
  }

  return (
    <article className="max-w-4xl mx-auto py-20 px-6">
      <img src={post.image} alt={post.title} className="rounded-xl" />

      <h1 className="text-5xl font-bold mt-10">{post.title}</h1>

      <p className="mt-3 text-gray-500">
        {post.category} • {post.date}
      </p>

      <div className="mt-10 leading-8 text-lg">{post.content}</div>
    </article>
  );
};

export default BlogDetails;
