
const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
          We are reinventing carbon for a thriving planet
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl">
          We develop technology to efficiently recover CO₂ from our atmosphere —
          anywhere, at any scale.
        </p>

        <a
          href="/contact"
          className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors duration-300"
        >
          Get in touch
        </a>
      </div>
      
    </section>
  );
};

export default Hero;
