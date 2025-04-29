import { useParams } from 'react-router-dom';
import BlogPost from '../components/blog/blogPost';

const BlogPostPage = () => {
  const { slug } = useParams();
  return <BlogPost postUrl={`/blogs/${slug}.md`} />;
};

export default BlogPostPage;