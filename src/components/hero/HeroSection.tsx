import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-white via-green-50 to-white overflow-hidden overflow-x-hidden">
      
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold leading-tight text-gray-900"
      >
        AI Engineer & Deep Learning Specialist<br />
        <span className="text-green-600">From Research to Production</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl"
      >
        Expert in deep learning, prompt engineering, and AI applications. 
        From drug discovery with VAEs to fashion AI and Meta/OpenAI experience.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <a 
          href="#ai-projects"
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-medium rounded-lg transition-all"
        >
          View AI Projects
        </a>
        <a 
          href="#contact"
          className="px-6 py-3 border border-green-500 hover:border-green-600 text-green-600 hover:text-green-700 text-lg font-medium rounded-lg transition-all"
        >
          Let's Connect
        </a>
      </motion.div>

    </section>
  );
}