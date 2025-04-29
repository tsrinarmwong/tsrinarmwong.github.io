import { useParams } from 'react-router-dom';
import BlogPost from '../components/blog/BlogPost';
import ContactCTA from '../components/cta/ContactCTA';

const BlogPostPage = () => {
  const { slug } = useParams();

  return (
    <>
      <BlogPost postUrl={`/blogs/${slug}.md`} />
      <ContactCTA />
    </>
  );
};

export default BlogPostPage;