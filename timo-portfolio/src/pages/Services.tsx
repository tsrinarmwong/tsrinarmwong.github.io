import React from 'react';

export default function Services() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold">What I Build</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Solutions tailored to your needs.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="border rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Full Stack Apps</h2>
          <p className="text-sm">From mobile to web — beautiful, scalable apps using React, Flutter, Node.js, Firebase, and more.</p>
        </div>
        <div className="border rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">AI-Powered Tools</h2>
          <p className="text-sm">Innovative AI integrations — text-to-image generators, personalization engines, and creative tech MVPs.</p>
        </div>
        <div className="border rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Creative AdTech Concepts</h2>
          <p className="text-sm">Gamified ads, interactive media ideas, and branded experiences that stand out.</p>
        </div>
        <div className="border rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Idea Acceleration</h2>
          <p className="text-sm">Strategy sessions to turn creative visions into tangible MVPs or proof-of-concept demos.</p>
        </div>
      </div>
    </div>
  );
}