"use client";

import { PARTNERS } from "@/constants/data";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";

const Carousel = () => {
  return (
    <MaxWidthWrapper className="bg-black py-16">
      <div className="transform-gpu">
        <Swiper
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          speed={500}
          allowTouchMove={false}
          loop={true}
          updateOnWindowResize={true}
          touchRatio={1.5}
          modules={[Pagination, Autoplay]}
          className="swiper"
          watchSlidesProgress={true}
        >
          {PARTNERS.map((partner, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide pointer-events-none flex items-center justify-center"
            >
              <Image
                src={partner.path}
                alt={partner.name}
                width={48}
                height={48}
                className="pointer-events-none h-48 w-48 rounded-md object-contain shadow-md transition-transform duration-300"
                loading="eager"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </MaxWidthWrapper>
  );
};

export default Carousel;
