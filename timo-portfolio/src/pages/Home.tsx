// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* Hero Section */}
      <section className="px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Every project has a purpose.</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-700 dark:text-gray-300">
          I build mobile apps, AI tools, and playful experiences that make impact — fast, efficient, and clean.
        </p>
        <div className="space-x-4">
          <Link to="/services" className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">View My Work</Link>
          <Link to="/contact" className="px-6 py-3 border border-green-600 text-green-600 rounded-xl hover:bg-green-100 transition">Start a Project</Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-green-50 dark:bg-green-900 px-6 py-8 text-center">
        <p className="uppercase text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400 mb-4">Trusted by teams like</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <span>Umee</span>
          <span>Goldi</span>
          <span>IIT</span>
          <span>VanderCook</span>
          <span>Freelance Clients</span>
        </div>
      </section>

      {/* Showcase Highlight */}
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

      {/* Services */}
      <section className="px-6 py-16 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">How I Can Help</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">MVP App Development</h3>
            <p className="text-sm">Mobile/web apps that ship fast and scale cleanly.</p>
          </div>
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Tools</h3>
            <p className="text-sm">Generative AI and smart systems for creators and businesses.</p>
          </div>
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Creative Tech / Gamified Ads</h3>
            <p className="text-sm">Interactive, playful experiences that engage and retain.</p>
          </div>
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Idea Acceleration / Strategy</h3>
            <p className="text-sm">You bring the spark. I help build the fire.</p>
          </div>
        </div>
      </section>

      {/* Impact Strip */}
      <section className="px-6 py-16 bg-white dark:bg-gray-950 text-center">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-2xl font-bold">📱 15K+</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">App downloads</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">⚡ 7 Days</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">From idea to MVP</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">🌱 Sustainable</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Tech built for purpose</p>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
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

      {/* Contact CTA */}
      <section className="px-6 py-20 bg-green-100 dark:bg-green-800 text-center">
        <h2 className="text-3xl font-bold mb-4">Have an idea? Let’s make it real.</h2>
        <p className="mb-6">Whether you need help designing, coding, or launching — I'm here for it.</p>
        <Link to="/contact" className="px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition">Start a Project</Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500 dark:text-gray-400">
        © 2025 Timo Srinarmwong — All rights reserved.
      </footer>

    </div>
  );
}
