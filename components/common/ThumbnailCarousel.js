import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";

const ThumbnailCarousel = ({ items }) => {
  const [fullscreenData, setFullscreenData] = useState({
    open: false,
    slides: items,
    initialIndex: 0,
  });

  return (
    <div className="w-full max-h-72">
      <Carousel
        opts={{
          align: "start",
        }}
        className="h-full w-full"
      >
        <CarouselContent className="h-full">
          {items.map((item, index) => (
            <CarouselItem
              onClick={() => setFullscreenData({open: true, initialIndex: index})}
              key={index}
              className="h-full basis-full cursor-pointer"
            >
              <Image
                src={item.src}
                alt="image"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-full max-h-72 object-cover rounded-2xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {fullscreenData.open && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex flex-col justify-center items-center">
          <button
            className="absolute top-4 start-4 text-white hover:text-muted"
             onClick={() =>
            setFullscreenData({ open: false})
          }
          >
             <IoMdCloseCircleOutline size={32} /> 
          </button>

          <div className="w-full max-h-[95vh]">
            <Carousel
              opts={{
                align: "start",
              }}
              className="h-full w-full"
              initialIndex={fullscreenData.initialIndex}
            >
              <CarouselContent className="h-full">
                {items.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="h-full basis-full"
                  >
                    <Image
                      src={item.src}
                      alt="image"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-[90%] h-full max-h-[80vh] m-auto object-cover rounded-2xl"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThumbnailCarousel;
