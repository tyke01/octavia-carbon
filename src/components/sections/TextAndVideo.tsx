"use client";

import { useRef } from "react";
import Carousel from "@/components/carousel";
import MaxWidthWrapper from "../max-width-wrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const TextAndVideo = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(sectionRef.current, {
      clearProps: "all",
      borderTopLeftRadius: "40rem",
      borderTopRightRadius: "40rem",
    });

    gsap.fromTo(
      sectionRef.current,
      {
        borderTopLeftRadius: "40rem",
        borderTopRightRadius: "40rem",
      },
      {
        borderTopLeftRadius: "0.5rem",
        borderTopRightRadius: "0.5rem",
        duration: 3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black relative z-20 transform-gpu min-h-screen mt-16 overflow-hidden"
    >
      <div ref={carouselRef} className="transform-gpu">
        <Carousel />
      </div>

      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div ref={textRef} className="transform-gpu">
            <h2 className="text-3xl md:text-6xl font-bold text-gray-100 mb-6">
              From carbon waste to climate value
            </h2>
            <p className="text-lg text-gray-300">
              The CO₂ in our air can be much more than just harmful waste. In
              fact, it can make almost anything you can think of. If we can turn
              the atmosphere into the world&apos;s default carbon source, we can
              quit fossil fuels and rebalance our climate. At Mission Zero we
              are already deploying the keystone technology for the post-fossil
              era.
            </p>
          </div>

          <div
            ref={videoRef}
            className="relative aspect-video rounded-lg overflow-hidden shadow-xl transform-gpu"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              controls
              muted
              loop
              playsInline
            >
              <source src="/from-carbon-waste.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default TextAndVideo;
