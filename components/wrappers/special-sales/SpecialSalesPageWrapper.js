"use client";

import Banner from "@/components/common/Banner";
import PrimaryProductCard from "@/components/common/cards/PrimaryProductCard";
import WideProductCard from "@/components/common/cards/WideProductCard";
import Container from "@/components/common/Container";
import ProductsOverview from "@/components/common/ProductsOverview";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { categories } from "@/constants/category";
import { products } from "@/constants/product";
import Image from "next/image";
import React from "react";
import { useLocale, useTranslations } from "use-intl";

const SpecialSalesPageWrapper = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <div className="w-full h-96">
        <Banner
          src="/images/placeholder.svg"
          alt="Banner"
          className="object-cover"
        />
      </div>

      <Container>
        <div className="grid grid-cols-5 gap-8 p-4 md:p-8 bg-foreground rounded-2xl min-h-72">
          <div className="col-span-full md:col-span-1">
            <h2 className="text-background text-4xl font-bold">
              
              {t("only_today")}
            </h2>

            <p className="text-muted-foreground mt-4">
              {t("offers_for_today")}
            </p>
          </div>

          <div className="col-span-full md:col-span-4">
            <Carousel
              opts={{
                align: "start",
              }}
              className="h-full w-full"
            >
              <CarouselContent className="h-full">
                {products.map((product, index) => (
                  <CarouselItem
                    key={index}
                    className="h-full [flex-basis:89%] lg:[flex-basis:66.6666%]"
                  >
                    <WideProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div className="w-full mt-8">
          <Carousel
            opts={{
              align: "start",
            }}
            className="h-full w-full"
          >
            <CarouselContent className="h-full">
              {categories.map((category, index) => (
                <CarouselItem
                  key={index}
                  className="h-full basis-1/3 sm:basis-1/5 md:basis-1/6"
                >
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center"
                  >
                    <Image
                      src={category.image}
                      alt={category.name[locale]}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-24 h-24 object-cover rounded-full"
                    />

                    <span className="text-center">
                      
                      {category.name[locale]}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="grid grid-cols-5 mt-8 gap-8 p-4 md:p-8 bg-foreground rounded-2xl min-h-72">
          <div className="col-span-full md:col-span-1">
            <h2 className="text-background text-4xl font-bold">
              {t("finishing_soon")}
            </h2>
          </div>

          <div className="col-span-full md:col-span-4">
            <Carousel
              opts={{
                align: "start",
              }}
              className="h-full w-full"
            >
              <CarouselContent className="h-full">
                {products.map((product, index) => (
                  <CarouselItem
                    key={index}
                    className="h-full md:basis-1/3"
                  >
                    <PrimaryProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div className="mt-8">
            <ProductsOverview />
        </div>
      </Container>
    </>
  );
};

export default SpecialSalesPageWrapper;
