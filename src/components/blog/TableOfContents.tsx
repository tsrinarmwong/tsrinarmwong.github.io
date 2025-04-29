import React from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  return (
    <aside className="hidden md:block w-1/4 sticky top-20 self-start">
      <div className="text-sm text-gray-600 dark:text-gray-300">
        <h2 className="text-lg font-bold mb-4">Contents</h2>
        <div className="flex flex-col space-y-2">
          {headings.map((heading) => (
            <div key={heading.id} className={`ml-${(heading.level - 2) * 4}`}>
              <a
                href={`#${heading.id}`}
                className="hover:underline transition-colors"
              >
                {heading.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default TableOfContents;