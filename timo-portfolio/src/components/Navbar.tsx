import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="text-xl font-bold">
        <Link to="/">TimoBuilds</Link>
      </div>
      <nav className="space-x-6">
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/blog" className="hover:underline">Blog</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}