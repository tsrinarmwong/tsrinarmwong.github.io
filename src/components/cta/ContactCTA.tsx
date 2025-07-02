import { Link } from 'react-router-dom';

export default function ContactCTA() {
  return (
    <section className="px-6 py-20 bg-green-100 dark:bg-green-800 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Build the Future with AI?</h2>
      <p className="mb-6">Let's discuss your AI project, from deep learning models to cutting-edge applications.</p>
      <Link to="/contact" className="px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition">
        Discuss AI Projects
      </Link>
    </section>
  );
}