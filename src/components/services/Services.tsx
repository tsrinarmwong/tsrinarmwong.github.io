export default function Services() {
    return (
      <section className="px-6 py-16 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">AI Services & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Service Cards */}
          <ServiceCard title="Deep Learning Development" description="Custom neural networks, CNNs, RNNs, and advanced AI models for your specific use case." />
          <ServiceCard title="Prompt Engineering & LLM Optimization" description="Expert prompt design and fine-tuning for optimal AI model performance and accuracy." />
          <ServiceCard title="AI-Powered Applications" description="End-to-end AI solutions from drug discovery to creative AI and computer vision applications." />
          <ServiceCard title="AI Strategy & Consulting" description="Strategic guidance on AI implementation, model selection, and technical architecture." />
        </div>
      </section>
    );
  }
  
  function ServiceCard({ title, description }: { title: string; description: string }) {
    return (
      <div className="border rounded-xl p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    );
  }