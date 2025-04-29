import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  snippet: string;
  date: string;
  slug: string;
  poster: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, snippet, date, slug, poster }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all">
      <div className="w-full md:w-1/2 aspect-video overflow-hidden rounded-lg bg-gray-100">
  <img
    src={poster}
    alt={`Cover for ${title}`}
    className="w-full h-full object-contain"
  />
</div>
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{date}</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{snippet}</p>
        </div>
        <Link
          to={`/blog/${slug}`}
          className="text-green-700 dark:text-green-400 font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;