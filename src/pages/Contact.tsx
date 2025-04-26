export default function Contact() {
  return (
    <div className="min-h-screen bg-green-100 dark:bg-green-800 text-gray-900 dark:text-white p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold mb-6">Let's Connect</h1>
      <p className="text-lg text-center mb-8 max-w-lg">
        Freelance inquiries, project ideas, or just saying hi — feel free to reach out anytime!
      </p>
      <a
        href="mailto:hello@timobuilds.pro"
        className="px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition"
      >
        Email Me
      </a>
    </div>
  );
}