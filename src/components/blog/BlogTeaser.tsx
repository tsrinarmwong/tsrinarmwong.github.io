import { Link } from 'react-router-dom';

export default function BlogTeaser() {
  return (
    <section className="px-6 py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12">From My Journal</h2>
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-2">🎯 Designing the AI Fashion Generator</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          How I built a generative fashion sketching tool with BLIP, OpenPose, and ControlNet in under a week.
        </p>
        <Link to="/blog" className="text-green-700 hover:underline font-medium">Read more →</Link>
      </div>
    </section>
  );
}