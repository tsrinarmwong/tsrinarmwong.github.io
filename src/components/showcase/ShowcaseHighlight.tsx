import { Link } from 'react-router-dom';

export default function ShowcaseHighlight() {
  return (
    <section className="px-6 py-16 flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2 h-64 bg-gray-200 dark:bg-gray-800 rounded-xl" />
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">From idea to launch — in a week.</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Whether it’s a utility app, AI prototype, or something playful — I help founders and creators go from concept to reality.
        </p>
        <Link to="/services" className="text-green-700 hover:underline font-medium">See My Projects →</Link>
      </div>
    </section>
  );
}