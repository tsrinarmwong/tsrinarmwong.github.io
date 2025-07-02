import { motion } from 'framer-motion';

interface Skill {
  category: string;
  skills: {
    name: string;
    proficiency: number; // 0-100
    description: string;
  }[];
}

const aiSkills: Skill[] = [
  {
    category: "Deep Learning & Neural Networks",
    skills: [
      { name: "TensorFlow & Keras", proficiency: 95, description: "Expert in building and training neural networks" },
      { name: "PyTorch", proficiency: 90, description: "Advanced deep learning model development" },
      { name: "CNN & RNN", proficiency: 88, description: "Convolutional and Recurrent neural networks" },
      { name: "VAE & GAN", proficiency: 85, description: "Generative models and variational methods" }
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "Reinforcement Learning", proficiency: 82, description: "NEAT algorithm and RL implementations" },
      { name: "Prompt Engineering", proficiency: 95, description: "Expert in LLM optimization and fine-tuning" },
      { name: "Computer Vision", proficiency: 85, description: "Image processing and generation" },
      { name: "Natural Language Processing", proficiency: 80, description: "Text processing and language models" }
    ]
  },
  {
    category: "AI Applications & Tools",
    skills: [
      { name: "Image-to-Image Generation", proficiency: 90, description: "Diffusion models and creative AI" },
      { name: "Drug Discovery AI", proficiency: 85, description: "Molecular generation and bioinformatics" },
      { name: "Game AI", proficiency: 80, description: "AI agents and evolutionary algorithms" },
      { name: "Data Labeling", proficiency: 95, description: "Specialized in Thai and CS data annotation" }
    ]
  },
  {
    category: "Programming & Tools",
    skills: [
      { name: "Python", proficiency: 95, description: "Primary language for AI development" },
      { name: "Git & Version Control", proficiency: 90, description: "Collaborative development workflows" },
      { name: "Docker & Deployment", proficiency: 75, description: "AI model deployment and scaling" },
      { name: "Cloud Platforms", proficiency: 80, description: "AWS, GCP for AI infrastructure" }
    ]
  }
];

export default function AISkillsSection() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across the AI spectrum, from foundational deep learning 
            to cutting-edge applications in drug discovery and creative AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {aiSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-sm font-medium text-green-600">
                        {skill.proficiency}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                      />
                    </div>
                    
                    <p className="text-sm text-gray-600">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Key AI Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">6+</div>
              <div className="text-green-100">Years in AI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2</div>
              <div className="text-green-100">Major Tech Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-green-100">AI Projects Completed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 