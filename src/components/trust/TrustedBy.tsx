export default function TrustedBy() {
    return (
      <section className="bg-green-50 dark:bg-green-900 px-6 py-8 text-center">
        <p className="uppercase text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400 mb-4">
          Trusted by teams like
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <span>Goldi</span>
          <span>IIT</span>
          <span>VanderCook</span>
          <span>Freelance Clients</span>
        </div>
      </section>
    );
  }