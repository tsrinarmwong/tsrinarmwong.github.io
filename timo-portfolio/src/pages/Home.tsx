// src/pages/Home.tsx
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-green-50 dark:bg-green-900">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Hi, I'm Timo 👋</h1>
        <p className="text-lg sm:text-xl max-w-2xl mb-6">
          I build powerful apps, creative AI tools, and scalable solutions for a better future.
        </p>
        <div className="space-x-4">
          <a href="services" className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">View My Work</a>
          <a href="contact" className="px-6 py-3 border border-green-600 text-green-600 rounded-xl hover:bg-green-100 transition">Contact Me</a>
        </div>
      </section>

      {/* What I Build */}
      <section id="services" className="px-6 py-16 bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">What I Build</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI Fashion Generator</h3>
            <p className="mb-4 text-sm">A generative AI tool for fashion sketching using BLIP, OpenPose, and ControlNet.</p>
            <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded">AI / Fashion / HuggingFace</span>
          </div>
          {/* Project 2 */}
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Goldi Calculator App</h3>
            <p className="mb-4 text-sm">A Flutter-based app to help groups split bills and track expenses. 15k+ downloads.</p>
            <span className="text-xs text-yellow-700 bg-yellow-100 px-2 py-1 rounded">Flutter / Utility / Mobile</span>
          </div>
          {/* Project 3 */}
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Gamified Podcast Ads</h3>
            <p className="mb-4 text-sm">A creative ad-tech concept blending narrative and interactivity for brand engagement.</p>
            <span className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded">Creative Tech / Ads / MVP</span>
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section id="blog" className="px-6 py-16 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">From My Journal</h2>
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>Coming soon — weekly thoughts on tech, creativity, AI, and freelancing ✍️</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 bg-green-100 dark:bg-green-800 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's build something together.</h2>
        <p className="mb-6">Freelance inquiries, project ideas, or just saying hi — reach out anytime.</p>
        <a href="mailto:hello@timobuilds.pro" className="px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition">
          Email Me
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500 dark:text-gray-400">
        © 2025 Timo S. — All rights reserved.
      </footer>
    </div>
  );
}