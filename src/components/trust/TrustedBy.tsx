export default function TrustedBy() {
    return (
    <section className="w-full bg-white border border-gray-100 py-6 px-4 flex flex-col items-center md:flex-row md:items-center md:justify-between max-w-5xl mx-auto mb-12 mt-8">
      <div className="w-full md:w-auto flex-shrink-0 mb-4 md:mb-0">
        <span className="block text-gray-500 text-sm font-semibold tracking-wide md:text-left text-center">
          Experience at
        </span>
      </div>
      {/* Glide/Marquee effect on mobile, static on desktop */}
      <div className="relative w-full md:w-auto">
        <div className="flex md:grid md:grid-cols-4 items-center gap-4 w-max md:w-full overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal animate-marquee md:animate-none" style={{animationDuration: '18s'}}>
          {/* <img
            src="/images/openAIexperience.webp"
            alt="OpenAI"
            className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-200 mx-2 inline-block"
          /> */}
          <img
            src="/images/meta.webp"
            alt="Meta"
            className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-200 mx-2 inline-block"
          />
          <img
            src="/images/deeplearningai.webp"
            alt="DeepLearning.AI"
            className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-200 mx-2 inline-block"
          />
          <img
            src="/images/IIT.webp"
            alt="Illinois Tech"
            className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-200 mx-2 inline-block"
          />
          {/* Duplicate for seamless loop */}
          {/* <img
            src="/images/openAIexperience.webp"
            alt="OpenAI"
            className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-200 mx-2 inline-block md:hidden"
          /> */}
          <img
            src="/images/meta.webp"
            alt="Meta"
            className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-200 mx-2 inline-block md:hidden"
          />
          <img
            src="/images/deeplearningai.webp"
            alt="DeepLearning.AI"
            className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-200 mx-2 inline-block md:hidden"
          />
          <img
            src="/images/IIT.webp"
            alt="Illinois Tech"
            className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-200 mx-2 inline-block md:hidden"
          />
        </div>
        </div>
      </section>
    );
  }