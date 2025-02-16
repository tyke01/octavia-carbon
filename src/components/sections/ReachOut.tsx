import Image from "next/image";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import AnimatedButton from "@/components/animated-button";
import { SlideIn } from "../slide-in";

const ReachOut = () => {
  return (
    <section className="relative z-20 flex min-h-screen items-center bg-gray-300 py-8 text-white md:py-16">
      <MaxWidthWrapper>
        <div className="flex flex-col space-y-8 md:flex-row md:items-center md:justify-between md:space-y-0">
          {/* Left Column */}
          <div className="flex flex-col md:w-[45%]">
            <SlideIn>
              <h2 className="mb-8 text-center text-3xl font-bold text-black sm:text-4xl md:mb-16 md:text-left md:text-5xl lg:text-6xl">
                Reinvent carbon with us
              </h2>
            </SlideIn>
            <SlideIn>
              <Image
                src="/reach-out.png"
                alt=""
                width={200}
                height={200}
                className="aspect-square w-40 self-center rounded-md sm:w-60 md:self-start"
              />
            </SlideIn>
          </div>

          {/* Separator - visible only on md screens and above */}
          <div className="hidden h-[600px] w-[2px] self-center bg-gray-900 md:block" />

          {/* Right Column */}
          <div className="flex flex-col md:h-[600px] md:w-[45%]">
            <SlideIn>
              <p className="mb-6 text-balance text-center text-xl text-black sm:text-2xl md:text-left md:text-3xl">
                We partner with pioneering CO₂ users, project developers,
                engineers, and scientists around the world to turn historic
                carbon waste into new climate value.
              </p>
            </SlideIn>
            <div className="mx-auto mt-8 md:mx-0 md:mt-auto">
              <SlideIn>
                <AnimatedButton
                  href="/video"
                  className="w-fit bg-yellow-500 text-black"
                  iconClassName=""
                >
                  Get in touch
                </AnimatedButton>
              </SlideIn>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ReachOut;
