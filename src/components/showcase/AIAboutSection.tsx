import { motion } from 'framer-motion';

export default function AIAboutSection() {
  return (
    <section className="px-6 py-16 bg-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI Engineer with 6+ years of experience in deep learning, 
            specializing in cutting-edge AI applications and prompt engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <img
                src="/images/pfp.webp"
                alt="Profile"
                className="w-48 h-48 md:w-80 md:h-80 mx-auto object-cover rounded-full shadow-xl border-4 border-white bg-gradient-to-br from-green-400 to-green-600"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">6+</div>
                <div className="text-sm text-gray-600">Years in AI</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">2</div>
                <div className="text-sm text-gray-600">Major Tech Companies</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">10+</div>
                <div className="text-sm text-gray-600">AI Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Engineering Specialist
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'm an AI Engineer with a passion for pushing the boundaries of artificial intelligence. 
                My journey began in 2019 with deep learning foundations and has evolved to encompass 
                cutting-edge applications in drug discovery, creative AI, and prompt engineering.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Current Focus
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Currently working on advanced prompt engineering at a leading AI research lab and Meta, 
                specializing in Thai language processing and computer science education. 
                My expertise spans from foundational neural networks to state-of-the-art 
                diffusion models and generative AI applications.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Key Expertise
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Deep Learning & Neural Networks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Prompt Engineering</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Drug Discovery AI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Computer Vision</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Generative AI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Reinforcement Learning</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Professional Experience
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Leading AI Research Lab</div>
                    <div className="text-sm text-gray-600">Prompt Engineering - CS Data Labeling</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Meta</div>
                    <div className="text-sm text-gray-600">Prompt Engineering - Thai Data Labeling</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Research & Development</div>
                    <div className="text-sm text-gray-600">VAE for Drug Discovery, Fashion AI</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
              >
                Let's Discuss AI Projects
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 