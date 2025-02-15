"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

import AnimatedButton from "@/components/animated-button";

const Hero = () => {
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for content (fade out and scale)
    gsap.to(contentRef.current, {
      scale: 0.9,
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom 70%",
        scrub: true,
      },
    });

    // Animation for gradient overlay (fade out and cover screen)
    gsap.to(overlayRef.current, {
      opacity: 0,
      backgroundPosition: "0% 100%",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom 70%",
        scrub: true,
      },
    });
  });

  return (
    <section
      ref={heroRef}
      className="sticky top-0 min-h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100"
      />

      {/* Content Container */}
      <div
        ref={contentRef}
        className="flex h-screen flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8"
      >
        <h1 className="mb-6 max-w-4xl text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
          We are reinventing carbon for a thriving planet
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
          We develop technology to efficiently recover CO₂ from our atmosphere —
          anywhere, at any scale.
        </p>
        <AnimatedButton href="/contact">Contact us</AnimatedButton>
      </div>
    </section>
  );
};

export default Hero;
