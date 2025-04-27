export default function ImpactStrip() {
    return (
      <section className="px-6 py-16 bg-white dark:bg-gray-950 text-center">
        <div className="grid md:grid-cols-3 gap-6">
          <ImpactItem value="📱 15K+" label="App downloads" />
          <ImpactItem value="⚡ 7 Days" label="From idea to MVP" />
          <ImpactItem value="🌱 Sustainable" label="Tech built for purpose" />
        </div>
      </section>
    );
  }
  
  function ImpactItem({ value, label }: { value: string; label: string }) {
    return (
      <div>
        <h4 className="text-2xl font-bold">{value}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
      </div>
    );
  }