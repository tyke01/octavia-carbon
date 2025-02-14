import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import AnimatedButton from "../animated-button";

const ReachOut = () => {
  return (
    <section className="relative z-20 flex min-h-screen items-center bg-gray-300 py-8 text-white md:py-16">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <div className="flex flex-1 flex-col">
            <h2 className="mb-16 text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl">
              Reinvent carbon with us
            </h2>
            <Image
              src="/reach-out.png"
              alt=""
              width={200}
              height={200}
              className="aspect-square w-60 rounded-md"
            />
          </div>

          {/* Separator - visible only on md screens and above */}
          <div className="mx-5 hidden h-[600px] w-[2px] self-center bg-gray-900 md:block" />

          <div className="flex h-full w-1/2 flex-col md:h-[600px]">
            <p className="mb-6 text-3xl text-black">
              We partner with pioneering CO₂ users, project developers,
              engineers, and scientists around the world to turn historic carbon
              waste into new climate value.
            </p>
            <div className="mt-auto">
              <AnimatedButton
                href="/video"
                className="w-full bg-yellow-500 text-black md:w-fit"
                iconClassName=""
              >
                Get in touch
              </AnimatedButton>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ReachOut;
