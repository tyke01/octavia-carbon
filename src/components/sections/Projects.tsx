"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCube, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { PROJECTS } from "@/constants/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { ArrowIcon } from "../icons";

const Projects = () => {
  const router = useRouter();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveButton = (e: MouseEvent) => {
      if (swiperRef.current && swiperRef.current.contains(e.target as Node)) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener("mousemove", moveButton);
    return () => window.removeEventListener("mousemove", moveButton);
  }, []);

  return (
    <section className="relative z-20 bg-black py-8 text-white md:py-16">
      {/* Magnetic Button - Only visible inside Swiper */}
      {isHovering && (
        <div
          className="pointer-events-none fixed left-0 top-0 z-50 flex h-20 w-20 items-center justify-center rounded-full bg-lime-400/60 text-black transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePos.x - 40}px, ${mousePos.y - 40}px)`,
          }}
        >
          View
        </div>
      )}

      <MaxWidthWrapper>
        <div className="flex justify-between">
          <Button
            id="left"
            className="hidden rotate-180 bg-gray-300 text-xl text-black md:block"
          >
            <ArrowIcon className="h-28 w-28 text-black" />
          </Button>
          <Button
            id="right"
            className="hidden bg-gray-300 text-xl text-black md:block"
          >
            <ArrowIcon className="h-28 w-28 text-black" />
          </Button>
        </div>
        <div
          ref={swiperRef}
          className="xs:h-[350px] mx-auto flex h-[300px] max-w-5xl items-center sm:h-[400px] md:h-[500px] lg:h-[600px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            navigation={{ nextEl: "#left", prevEl: "#right" }}
            loop={true}
            modules={[EffectCube, Pagination, Navigation]}
            className="h-full w-full"
          >
            {PROJECTS.map((project, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide cursor-pointer"
                onClick={() => router.push(project.href)}
              >
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={project.image}
                      alt={project.heading}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative z-10 flex h-full w-full flex-col justify-between bg-black/60 p-4 sm:p-6 md:p-8">
                    <div>
                      <Badge className="bg-white px-2 py-1 text-sm font-semibold sm:px-3 sm:py-2 sm:text-lg md:px-4 md:py-3 md:text-xl lg:px-6 lg:text-3xl">
                        {project.badge}
                      </Badge>
                      <h2 className="my-2 max-w-2xl text-3xl font-bold sm:my-3 sm:text-5xl md:my-4 md:text-7xl lg:text-9xl">
                        {project.heading}
                      </h2>
                      <h3 className="mt-1 text-xl font-semibold sm:mt-2 sm:text-2xl md:text-3xl lg:text-5xl">
                        {project.subHeading}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm sm:mt-3 sm:text-xl md:mt-4 md:text-2xl lg:text-3xl">
                        {project.body}
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="flex flex-col items-start rounded-bl-lg rounded-tl-lg bg-white p-2 text-black sm:p-3 md:p-4 lg:p-6">
                        <p className="text-lg font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
                          {project.amount}
                        </p>
                        <span className="text-xs sm:text-sm">
                          Annual removal capacity
                        </span>
                      </div>
                      <div className="flex flex-col items-start rounded-br-lg rounded-tr-lg bg-white p-2 text-black sm:p-3 md:p-4 lg:p-6">
                        <p className="text-lg font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
                          {project.date}
                        </p>
                        <span className="text-xs sm:text-sm">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Projects;
