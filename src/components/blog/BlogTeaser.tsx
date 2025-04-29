import BlogCard from './BlogCard';
import blogs from './blogList';

const BlogTeaser = () => {
  const latestBlog = blogs[0];

  return (
    <section className="px-6 py-16">
      <BlogCard
        title={latestBlog.title}
        snippet={latestBlog.snippet}
        date={latestBlog.date}
        slug={latestBlog.slug}
        poster={latestBlog.poster}
      />
    </section>
  );
};

export default BlogTeaser;