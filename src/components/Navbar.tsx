import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const navItems = [
    { label: 'AI Projects', to: '/ai-projects' },
    { label: 'Services', to: '/services' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700 md:static md:border-none overflow-x-hidden">
      <header className="flex justify-between items-center px-3 md:px-6 py-4 max-w-7xl mx-auto text-gray-900 dark:text-white w-full">
        <div className="text-lg font-semibold tracking-tight">
          <Link to="/" className="hover:opacity-80 transition">
            Timo
            AI
          </Link>
        </div>
        <nav className="flex space-x-6 text-sm font-medium overflow-x-auto whitespace-nowrap max-w-full">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`hover:text-green-600 transition ${
                pathname === item.to ? 'text-green-700 dark:text-green-400' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}