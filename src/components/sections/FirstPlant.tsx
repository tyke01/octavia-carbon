import AnimatedButton from "@/components/animated-button";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { SlideIn } from "@/components/slide-in";

const FirstPlant = () => {
  return (
    <section className="relative z-20 flex min-h-screen items-center bg-black py-8 text-white md:py-16">
      <MaxWidthWrapper>
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="mb-8 flex flex-1 flex-col justify-between md:mb-0 md:h-[700px]">
            {/* Text content */}
            <SlideIn>
              <h2 className="mb-6 text-3xl sm:text-4xl md:mb-0 md:text-5xl lg:text-6xl">
                Take a closer look at our first plant
              </h2>
            </SlideIn>

            <div className="mt-auto">
              <SlideIn>
                <AnimatedButton
                  href="/video"
                  className="w-full bg-yellow-500 text-black md:w-fit"
                  iconClassName=""
                >
                  Watch Video
                </AnimatedButton>
              </SlideIn>
            </div>
          </div>

          {/* Separator - visible only on md screens and above */}
          <div className="hidden h-[700px] w-[2px] self-center bg-gray-200 md:block" />

          {/* Video container */}
          <div className="w-full md:w-1/2">
            <video
              className="h-[300px] w-full rounded-lg object-cover sm:h-[400px] md:h-[700px]"
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
