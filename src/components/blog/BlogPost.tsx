import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import TableOfContents from './TableOfContents';

interface BlogPostProps {
  postUrl: string;
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

const BlogPost: React.FC<BlogPostProps> = ({ postUrl }) => {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    fetch(postUrl)
      .then((res) => res.text())
      .then((text) => {
        const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
        const match = text.match(frontmatterRegex);

        if (match) {
          const frontmatter = match[1];
          const body = text.replace(frontmatterRegex, '');

          const titleMatch = frontmatter.match(/title:\s*(.*)/);
          const dateMatch = frontmatter.match(/date:\s*(.*)/);

          setTitle(titleMatch ? titleMatch[1].replace(/['"]/g, '') : 'Untitled');
          setDate(dateMatch ? dateMatch[1].replace(/['"]/g, '') : 'Unknown date');
          setContent(body.trim());
          extractHeadings(body.trim());
        } else {
          setContent(text.trim());
          extractHeadings(text.trim());
        }
      });
  }, [postUrl]);

  const extractHeadings = (markdown: string) => {
    const lines = markdown.split('\n');
    const headingsData: Heading[] = [];

    lines.forEach((line) => {
      const headingMatch = line.match(/^(#{2,3}) (.+)/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const text = headingMatch[2].trim();
        const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        headingsData.push({ id, text, level });
      }
    });

    setHeadings(headingsData);
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 py-12 gap-12">
      <div className="lg:w-1/4 w-full order-last lg:order-first">
        <TableOfContents headings={headings} />
      </div>

      <article className="prose prose-lg lg:prose-xl flex-1 text-gray-800 dark:text-gray-100">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Published: {date}</p>
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        <ReactMarkdown rehypePlugins={[rehypeSlug]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPost;