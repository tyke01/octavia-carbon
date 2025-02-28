"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { SLIDES } from "@/constants/data";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);


const MissionZero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);


  // Create a ref to hold all slide element references
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    slidesRef.current.forEach((slide, index) => {
      if (!slide) return;

      ScrollTrigger.create({
        trigger: slide,
        start: "top center",
        end: "bottom center",
        onEnter: () => setCurrentSlide(index + 1),
        onEnterBack: () => setCurrentSlide(index + 1),
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black relative z-20 text-white py-32"
    >
      <MaxWidthWrapper>
        <div className="md:hidden mb-8">
          <div className="text-6xl font-bold text-white/20">
            {currentSlide.toString().padStart(2, "0")}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 bg-black">
          <div className="hidden md:block w-1/5 sticky top-60 self-start">
            <div className="text-8xl font-bold text-white/20">
              {currentSlide.toString().padStart(2, "0")}
            </div>
          </div>

          <div className="w-full md:w-4/5">
            {SLIDES.map((slide, index) => (
              <div
                key={index}
                ref={(el) => {
                  slidesRef.current[index] = el;
                }}
                className={`bg-zinc-900 rounded-xl overflow-hidden mb-16 transition-all duration-500 transform ${
                  currentSlide === index + 1
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-40"
                }`}
              >
                <div className="p-8">
                  {slide.imageSrc && (
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="relative w-full md:w-1/2 aspect-square">
                        <Image
                          src={slide.imageSrc}
                          alt={slide.imageAlt || ""}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">
                          {slide.title}
                        </h2>
                        {slide.description && (
                          <p className="text-xl text-gray-300">
                            {slide.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {!slide.imageSrc && (
                    <div className="flex flex-col items-center text-center py-16">
                      <h2 className="text-2xl md:text-4xl font-bold mb-6 max-w-2xl">
                        {slide.title}
                      </h2>
                      {slide.description && (
                        <p className="text-xl text-gray-300 max-w-2xl">
                          {slide.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default MissionZero;
