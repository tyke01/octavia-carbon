"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

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
      className="min-h-screen w-full overflow-hidden sticky top-0"
    >
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
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100"
      />

      {/* Content Container */}
      <div
        ref={contentRef}
        className="flex flex-col items-center justify-center h-screen px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
          We are reinventing carbon for a thriving planet
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl">
          We develop technology to efficiently recover CO₂ from our atmosphere —
          anywhere, at any scale.
        </p>

        <Link
          href="/contact"
          className={buttonVariants({
            className: "items-center gap-1 flex px-8 py-6 text-lg",
            variant: "outline",
          })}
        >
          Contact
          <ArrowRight className="ml-1.5 h-10 w-10" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
