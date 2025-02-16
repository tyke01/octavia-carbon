"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedButton from "@/components/animated-button";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";

import { NOTES } from "@/constants/data";
import "swiper/css";
import { ArrowIcon } from "@/components/icons";
import { SlideIn } from "@/components/slide-in";

const LabNotes = () => {
  return (
    <section className="relative z-20 min-h-screen bg-lime-300 py-16 text-white">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 lg:flex-row">
        <div className="lg:w-1/3">
          <Badge className="bg-white px-5 py-2 text-lg">Lab Notes</Badge>
          <SlideIn>
            <h2 className="mt-6 max-w-xl text-6xl font-semibold text-black">
              Notes on the carbon revolution
            </h2>
          </SlideIn>

          <SlideIn>
            <AnimatedButton className="mt-16 bg-black text-white" href="/">
              View More
            </AnimatedButton>
          </SlideIn>
        </div>

        <div className="w-full lg:w-2/3">
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
                <div className="h-full overflow-hidden rounded-xl bg-black shadow-lg">
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
                            "border-white text-white hover:bg-white/10",
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
          <div className="mt-8 flex items-center justify-between">
            <Button
              id="arrow-left"
              className="rotate-180 bg-white text-xl text-black"
            >
              <ArrowIcon className="h-28 w-28 text-black" />
            </Button>

            <Button id="arrow-right" className="bg-white text-xl text-black">
              <ArrowIcon className="h-28 w-28 text-black" />
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default LabNotes;
