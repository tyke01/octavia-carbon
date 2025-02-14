"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import AnimatedButton from "../animated-button";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";

import { NOTES } from "@/constants/data";
import "swiper/css";
import { ArrowIcon } from "../icons";

const LabNotes = () => {
  return (
    <div className="bg-lime-300 relative z-20 text-white py-16 min-h-screen">
      <MaxWidthWrapper className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/3">
          <Badge className="bg-white px-5 py-2 text-lg">Lab Notes</Badge>
          <h2 className="text-black text-6xl max-w-xl mt-6 font-semibold">
            Notes on the carbon revolution
          </h2>

          <AnimatedButton className="bg-black text-white mt-16" href="/">
            View More
          </AnimatedButton>
        </div>

        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={{ nextEl: "#arrow-left", prevEl: "#arrow-right" }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="w-full"
          >
            {NOTES.map((note) => (
              <SwiperSlide key={note.id}>
                <div className="bg-black rounded-xl overflow-hidden shadow-lg h-full">
                  <div className="relative h-[400px]">
                    <Image
                      src={note.image}
                      alt={note.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Card className="border-0 bg-black">
                    <CardHeader>
                      <div className="text-sm text-white">{note.date}</div>
                      <CardTitle className="text-xl text-gray-400">
                        {note.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-start">
                      <Link
                        href={note.href}
                        className={buttonVariants({
                          variant: "outline",
                          className:
                            "text-white border-white hover:bg-white/10",
                        })}
                      >
                        Read More
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-between items-center mt-8">
            <Button
              id="arrow-left"
              className="text-xl bg-white text-black rotate-180"
            >
              <ArrowIcon className="text-black w-28 h-28" />
            </Button>

            <Button id="arrow-right" className="text-xl bg-white text-black">
              <ArrowIcon className="text-black w-28 h-28" />
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default LabNotes;
