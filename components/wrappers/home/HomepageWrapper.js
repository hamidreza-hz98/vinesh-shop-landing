"use client";

import SpecialSalesBox from "@/components/sections/SpecialSalesBox";
import Container from "@/components/common/Container";
import Banner from "@/components/common/Banner";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { brands } from "@/constants/brand";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { products } from "@/constants/product";
import NumericProductCard from "@/components/common/cards/NumericProductCard";
import { blogs } from "@/constants/blog";
import BlogCard from "@/components/common/cards/BlogCard";
import Link from "next/link";
import routes from "@/constants/routes";
import { IoBookOutline } from "react-icons/io5";

const HomepageWrapper = () => {
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
        <SpecialSalesBox />

        <div className="grid grid-cols-4 gap-4 mt-8">
          {[1, 2, 3, 4].map((_, index) => (
            <Banner
              key={index}
              src="/images/placeholder.svg"
              alt="Banner"
              className="object-cover"
            />
          ))}
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-4 mt-8">
          <h2 className="text-2xl font-bold col-span-full text-center">
            {t("categories")}
          </h2>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 7, 8].map((_, index) => (
            <Banner
              key={index}
              src="/images/placeholder.svg"
              alt="image"
              className="rounded-full"
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          {[1, 2].map((_, index) => (
            <Banner
              key={index}
              src="/images/placeholder.svg"
              alt="Banner"
              className="max-h-48 object-cover"
            />
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold col-span-full text-center">
            {t("brands")}
          </h2>

          <Carousel
            opts={{
              align: "start",
            }}
            className="h-full w-full mt-4"
          >
            <CarouselContent className="h-full">
              {brands.map((brand, index) => (
                <CarouselItem
                  key={index}
                  className="h-full basis-1/4 md:basis-1/6"
                >
                  <Image
                    src={brand.image}
                    alt={brand.name[locale]}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <h2 className="text-2xl font-bold col-span-full text-center">
            {t("most_sold_products")}
          </h2>
          {products.slice(0, 9).map((product, index) => (
            <NumericProductCard
              key={index}
              product={product}
              number={index + 1}
            />
          ))}
        </div>

        <div className="mt-8">
          <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl font-bold text-center">
            {t("blog")}
          </h2>

          <Link href={routes.blog} className="text-sm flex items-center justify-end">
            {t("view_all")}
            
            <IoBookOutline className="ms-2" />
          </Link>
         
          </div>


           <Carousel
            opts={{
              align: "start",
            }}
            className="h-full w-full mt-4"
          >
            <CarouselContent className="h-full">
              { blogs.map((blog, index) =>
                <CarouselItem
                  key={index}
                  className="h-full basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                 
              <BlogCard blog={blog} />
            
          
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

         
        </div>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <h2 className="text-2xl font-bold col-span-full text-center">
            {t("most_visited_products")}
          </h2>
          {products.slice(0, 9).map((product, index) => (
            <NumericProductCard
              key={index}
              product={product}
              number={index + 1}
            />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-12">
          <h2 className="text-2xl font-bold col-span-full text-center">
            {t("why_vinesh")}
          </h2>

          {[0, 1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start"
            >
              <Image
                src="/images/placeholder.svg"
                alt="SLOGAN"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto max-w-32 object-cover rounded-full"
              />

              <h3 className="mt-2 text-xl font-semibold"> {t("lorem_word")} </h3>

              <span className="text-center"> {t("lorem_sentence")} </span>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default HomepageWrapper;
