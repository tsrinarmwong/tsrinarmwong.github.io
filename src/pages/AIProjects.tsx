import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from '../components/footer/Footer';

interface DetailedProject {
  year: number;
  title: string;
  description: string;
  technicalDetails: string;
  technologies: string[];
  outcomes: string[];
  challenges: string[];
  codeSnippet?: string;
  image?: string;
}

const detailedProjects: DetailedProject[] = [
  {
    year: 2019,
    title: "Deep Learning Specialization",
    description: "Comprehensive deep learning course covering the fundamentals of neural networks, convolutional networks, recurrent networks, and practical applications.",
    technicalDetails: "Completed 5-course specialization including Neural Networks and Deep Learning, Improving Deep Neural Networks, Structuring Machine Learning Projects, Convolutional Neural Networks, and Sequence Models.",
    technologies: ["TensorFlow", "Keras", "Python", "NumPy", "Matplotlib", "Scikit-learn"],
    outcomes: [
      "Mastered neural network architectures and training",
      "Gained practical experience with real-world datasets",
      "Learned optimization techniques and hyperparameter tuning",
      "Understood the mathematics behind deep learning"
    ],
    challenges: [
      "Complex mathematical concepts in backpropagation",
      "Optimizing model performance on large datasets",
      "Understanding attention mechanisms in sequence models"
    ]
  },
  {
    year: 2020,
    title: "AI Flappy Bird with NEAT",
    description: "Implemented NeuroEvolution of Augmenting Topologies (NEAT) algorithm to train AI agents to play Flappy Bird through reinforcement learning.",
    technicalDetails: "Developed a genetic algorithm that evolves neural network topologies. The NEAT algorithm starts with simple networks and gradually adds complexity through mutation and crossover operations.",
    technologies: ["NEAT Algorithm", "Python", "Pygame", "NumPy", "Reinforcement Learning"],
    outcomes: [
      "Successfully trained AI agents to play Flappy Bird",
      "Demonstrated evolutionary algorithm concepts",
      "Achieved consistent high scores through AI optimization",
      "Gained understanding of genetic algorithms and neural evolution"
    ],
    challenges: [
      "Implementing the NEAT algorithm from scratch",
      "Balancing exploration vs exploitation in evolution",
      "Optimizing fitness functions for game performance"
    ],
    codeSnippet: `def calculate_fitness(genome, game_score, distance_traveled):
    # Fitness function for NEAT algorithm
    fitness = game_score * 100 + distance_traveled * 10
    return max(fitness, 0)`
  },
  {
    year: 2023,
    title: "VAE for Drug Discovery",
    description: "Developed Variational Autoencoder (VAE) neural network for molecular generation and latent space perturbation in drug discovery applications.",
    technicalDetails: "Built a VAE that learns a continuous latent representation of molecular structures. The model can generate novel drug-like molecules and perform targeted modifications through latent space interpolation.",
    technologies: ["VAE", "PyTorch", "RDKit", "Molecular Generation", "Latent Space", "Drug Discovery"],
    outcomes: [
      "Generated novel drug-like molecules with desired properties",
      "Achieved successful latent space interpolation between molecules",
      "Improved molecular property prediction accuracy",
      "Contributed to drug discovery research pipeline"
    ],
    challenges: [
      "Handling molecular representation and encoding",
      "Balancing reconstruction loss and KL divergence",
      "Ensuring generated molecules are chemically valid",
      "Optimizing latent space for meaningful interpolations"
    ],
    codeSnippet: `class MolecularVAE(nn.Module):
    def __init__(self, input_dim, latent_dim):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Linear(input_dim, 512),
            nn.ReLU(),
            nn.Linear(512, 256),
            nn.ReLU()
        )
        self.fc_mu = nn.Linear(256, latent_dim)
        self.fc_var = nn.Linear(256, latent_dim)
        self.decoder = nn.Sequential(
            nn.Linear(latent_dim, 256),
            nn.ReLU(),
            nn.Linear(256, 512),
            nn.ReLU(),
            nn.Linear(512, input_dim),
            nn.Sigmoid()
        )`
  },
  {
    year: 2025,
    title: "Fashion Designer AI",
    description: "Built image-to-image generation system for fashion design, enabling AI-powered clothing and accessory creation.",
    technicalDetails: "Developed a diffusion-based model that transforms text descriptions and reference images into fashion designs. The system uses advanced computer vision techniques for style transfer and creative generation.",
    technologies: ["Image-to-Image Generation", "Diffusion Models", "PyTorch", "Computer Vision", "Fashion AI", "Style Transfer"],
    outcomes: [
      "Generated diverse fashion designs from text prompts",
      "Achieved high-quality image synthesis for clothing",
      "Enabled rapid prototyping of fashion concepts",
      "Demonstrated creative AI applications in fashion industry"
    ],
    challenges: [
      "Training large diffusion models with limited data",
      "Ensuring fashion-specific style consistency",
      "Balancing creativity with practical design constraints",
      "Optimizing generation speed for real-time use"
    ]
  },
  {
    year: 2025,
    title: "Prompt Engineering at Meta",
    description: "Specialized in prompt engineering for Thai language data labeling, optimizing AI model performance for Southeast Asian markets.",
    technicalDetails: "Developed sophisticated prompt engineering techniques for Thai language processing, including cultural context understanding, regional dialect handling, and bias mitigation strategies.",
    technologies: ["Prompt Engineering", "Thai NLP", "Data Labeling", "LLM Optimization", "Bias Mitigation"],
    outcomes: [
      "Improved AI model accuracy for Thai language by 25%",
      "Reduced cultural bias in Thai language models",
      "Established best practices for Southeast Asian AI development",
      "Enhanced model performance across diverse Thai dialects"
    ],
    challenges: [
      "Understanding Thai cultural nuances and context",
      "Handling regional dialect variations",
      "Mitigating bias in language models",
      "Scaling prompt engineering for large datasets"
    ]
  },
  {
    year: 2025,
    title: "Prompt Engineering at OpenAI",
    description: "Advanced prompt engineering for computer science data labeling, contributing to model training and evaluation at OpenAI.",
    technicalDetails: "Worked on cutting-edge prompt engineering for CS education and technical content, developing techniques for accurate knowledge assessment and educational AI applications.",
    technologies: ["Prompt Engineering", "CS Education", "Model Training", "OpenAI", "Educational AI"],
    outcomes: [
      "Enhanced model performance on CS education tasks",
      "Developed robust evaluation frameworks for technical content",
      "Contributed to OpenAI's model training pipeline",
      "Improved accuracy in programming and algorithm questions"
    ],
    challenges: [
      "Creating prompts for complex technical concepts",
      "Ensuring consistent evaluation across diverse CS topics",
      "Balancing accuracy with educational value",
      "Scaling prompt engineering for large-scale training"
    ]
  }
];

export default function AIProjects() {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  return (
    <main className="min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20"
      >
        {/* Hero Section */}
        <section className="px-6 py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Projects Portfolio
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A comprehensive showcase of my AI journey from foundational deep learning 
              to cutting-edge applications in drug discovery, creative AI, and prompt engineering.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {detailedProjects.map((project, index) => (
                <motion.div
                  key={project.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-600">{project.year}</span>
                      <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        AI Project
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-4">
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
                      Click to view details →
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
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
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Description</h4>
                  <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Technical Details</h4>
                  <p className="text-gray-600 mb-6">{selectedProject.technicalDetails}</p>
                  
                  {selectedProject.codeSnippet && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Code Snippet</h4>
                      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                        <code>{selectedProject.codeSnippet}</code>
                      </pre>
                    </div>
                  )}
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Key Outcomes</h4>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                    {selectedProject.outcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Challenges Overcome</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
      
      <Footer />
    </main>
  );
} 