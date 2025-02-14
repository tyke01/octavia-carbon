import AnimatedButton from "../animated-button";
import MaxWidthWrapper from "../max-width-wrapper";

const FirstPlant = () => {
  return (
    <section className="bg-black relative z-20 text-white py-8 md:py-16 min-h-screen flex items-center">
      <MaxWidthWrapper className="w-full">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-1 flex-col justify-between md:h-[700px] mb-8 md:mb-0">
            {/* Text content */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-0">
              Take a closer look at our first plant
            </h2>

            {/* Button - shows at bottom on desktop, below text on mobile */}
            <div className="mt-auto">
              <AnimatedButton
                href="/video"
                className="bg-yellow-500 text-black w-full md:w-fit"
                iconClassName=""
              >
                Watch Video
              </AnimatedButton>
            </div>
          </div>

          {/* Separator - visible only on md screens and above */}
          <div className="hidden md:block w-[2px] h-[700px] bg-gray-200 self-center" />

          {/* Video container */}
          <div className="w-full md:w-1/2">
            <video
              className="w-full h-[300px] sm:h-[400px] md:h-[700px] object-cover rounded-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/first-plant.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FirstPlant;
