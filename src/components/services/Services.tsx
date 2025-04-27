export default function Services() {
    return (
      <section className="px-6 py-16 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">How I Can Help</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Service Cards */}
          <ServiceCard title="MVP App Development" description="Mobile/web apps that ship fast and scale cleanly." />
          <ServiceCard title="AI-Powered Tools" description="Generative AI and smart systems for creators and businesses." />
          <ServiceCard title="Creative Tech / Gamified Ads" description="Interactive, playful experiences that engage and retain." />
          <ServiceCard title="Idea Acceleration / Strategy" description="You bring the spark. I help build the fire." />
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