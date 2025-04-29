import BlogCard from '../components/blog/BlogCard';
import blogs from '../components/blog/blogList';

const BlogPage = () => {
  return (
    <main className="px-6 py-12 space-y-10 max-w-5xl mx-auto">
      {blogs.map(blog => (
        <BlogCard key={blog.slug} {...blog} />
      ))}
    </main>
  );
};

export default BlogPage;