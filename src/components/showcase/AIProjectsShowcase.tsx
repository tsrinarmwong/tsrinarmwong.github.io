import { motion } from 'framer-motion';
import { useState } from 'react';

interface AIProject {
  year: number;
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  image?: string; // Path to image
}

const aiProjects: AIProject[] = [
  // {
  //   year: 2025,
  //   title: "Prompt Engineering at OpenAI",
  //   description: "Advanced prompt engineering for computer science data labeling, contributing to model training and evaluation at OpenAI.",
  //   technologies: ["Prompt Engineering", "CS Data", "Model Training", "OpenAI"],
  //   impact: "Enhanced AI model training and evaluation",
  //   image: "/images/openAI-Feather.webp"
  // },
  {
    year: 2025,
    title: "Prompt Engineering at Meta",
    description: "Specialized in prompt engineering for Thai language data labeling, optimizing AI model performance for Southeast Asian markets.",
    technologies: ["Prompt Engineering", "Thai NLP", "Data Labeling", "LLM Optimization"],
    impact: "Improved AI model performance for Thai language",
    image: "/images/meta_prompt_engineering.webp"
  },
  {
    year: 2025,
    title: "Fashion Designer AI",
    description: "Built image-to-image generation system for fashion design, enabling AI-powered clothing and accessory creation.",
    technologies: ["Image-to-Image Generation", "Diffusion Models", "Fashion AI", "Computer Vision"],
    impact: "Revolutionizing fashion design with AI creativity",
    image: "/images/fashion.webp"
  },
  {
    year: 2023,
    title: "VAE for Drug Discovery",
    description: "Developed Variational Autoencoder (VAE) neural network for molecular generation and latent space perturbation in drug discovery applications.",
    technologies: ["VAE", "PyTorch", "Molecular Generation", "Latent Space", "Drug Discovery"],
    impact: "Advanced molecular design and drug discovery research",
    image: "/images/VAE.gif"
  },
  {
    year: 2020,
    title: "AI Flappy Bird with NEAT",
    description: "Implemented NeuroEvolution of Augmenting Topologies (NEAT) algorithm to train AI agents to play Flappy Bird through reinforcement learning.",
    technologies: ["NEAT Algorithm", "Reinforcement Learning", "Python", "Game AI"],
    impact: "Demonstrated evolutionary algorithms and RL concepts",
    image: "/images/ai_play_flappy_bird.gif"
  },
  {
    year: 2019,
    title: "Deep Learning Specialization",
    description: "Completed comprehensive deep learning course by DeepLearning.AI, covering neural networks, CNNs, RNNs, and practical applications.",
    technologies: ["TensorFlow", "Keras", "Python", "Neural Networks", "CNN", "RNN"],
    impact: "Foundation for all subsequent AI work",
    image: "/images/deeplearning_cert.webp"
  }
];

export default function AIProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<AIProject | null>(null);

  return (
    <section className="px-6 py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My AI Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From deep learning foundations to cutting-edge AI applications, 
            here's my evolution in artificial intelligence from 2019 to 2025.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-500 h-full hidden md:block"></div>
          
          <div className="space-y-12">
            {aiProjects.map((project, index) => (
              <motion.div
                key={project.year + project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-stretch ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                {/* Project image - expanded */}
                <div className={`w-full md:w-1/2 flex-shrink-0 flex justify-center items-stretch ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  {project.image ? (
                    project.title.includes('Fashion Designer AI') ? (
                      <a href="https://www.upwork.com/freelancers/~0125b5811d0c0a390d?p=1914697979918512128" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-56 md:h-full object-cover rounded-3xl shadow-lg border-4 border-white hover:opacity-80 transition"
                        />
                      </a>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 md:h-full object-cover rounded-3xl shadow-lg border-4 border-white"
                      />
                    )
                  ) : (
                    <div className="w-full h-56 md:h-full flex items-center justify-center rounded-3xl shadow-lg border-4 border-white bg-gradient-to-br from-green-100 to-green-300 text-green-700 text-3xl font-bold">
                      {project.title.split(' ').slice(0,2).join(' ')}
                    </div>
                  )}
                </div>

                {/* Project card */}
                <div className={`w-full md:w-1/2 flex flex-col justify-center ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div 
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 h-full flex flex-col justify-center"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-600">{project.year}</span>
                      <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        AI Project
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="text-sm text-green-600 font-medium">
                      Impact: {project.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-3xl font-bold text-green-600">{selectedProject.year}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              {/* Modal image */}
              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-3xl shadow-lg border-4 border-white bg-gray-100 mb-6 mx-auto"
                />
              )}
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
                <p className="text-green-600 font-medium">{selectedProject.impact}</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
} 