"use client";

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

const Projects = () => {
  return (
    <section className="bg-black relative z-20 text-white py-8 md:py-16">
      <MaxWidthWrapper>
        <div className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] max-w-5xl mx-auto">
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
            navigation={true}
            loop={true}
            modules={[EffectCube, Pagination, Navigation]}
            className="h-full w-full"
          >
            {PROJECTS.map((project, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={project.image}
                      alt={project.heading}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative z-10 flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-black/60 w-full h-full">
                    <div>
                      <Badge className="bg-white text-sm sm:text-lg md:text-xl lg:text-3xl px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-3 font-semibold">
                        {project.badge}
                      </Badge>
                      <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold my-2 sm:my-3 md:my-4 max-w-2xl">
                        {project.heading}
                      </h2>
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mt-1 sm:mt-2">
                        {project.subHeading}
                      </h3>
                      <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-3 md:mt-4 max-w-lg">
                        {project.body}
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="flex flex-col items-start bg-white p-2 sm:p-3 md:p-4 lg:p-6 text-black rounded-tl-lg rounded-bl-lg">
                        <p className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl">
                          {project.amount}
                        </p>
                        <span className="text-xs sm:text-sm">
                          Annual removal capacity
                        </span>
                      </div>
                      <div className="flex flex-col items-start bg-white p-2 sm:p-3 md:p-4 lg:p-6 text-black rounded-tr-lg rounded-br-lg">
                        <p className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl">
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
