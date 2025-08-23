"use client";

import Banner from "@/components/common/Banner";
import BlogCard from "@/components/common/cards/BlogCard";
import Container from "@/components/common/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CountUp from "@/components/ui/reactbits/CountUp";
import { blogs } from "@/constants/blog";
import { aboutPageCountUpItems } from "@/constants/general";
import routes from "@/constants/routes";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoBookOutline } from "react-icons/io5";

const AboutPageWrapper = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <div className="w-full h-[80vh] relative">
        <Banner
          src="/images/placeholder.svg"
          alt="Banner"
          className="object-cover"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-background/20 backdrop-blur-2xl rounded-2xl min-w-72">
          <p className="text-2xl font-bold"> {t("about_page_header")} </p>
          <p className="text-muted-foreground text-lg">
            {t("about_page_subtitle")}
          </p>
        </div>
      </div>

      <Container>
        <div>
          <h1 className="text-2xl font-semibold"> {t("lorem_word")} </h1>
          <p className="text-muted-foreground"> {t("lorem_paragraph")} </p>
          <p className="text-muted-foreground"> {t("lorem_paragraph")} </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4 w-full border border-border rounded-2xl py-6">
          {aboutPageCountUpItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <CountUp
                from={0}
                to={item.number}
                separator=","
                direction="up"
                duration={1}
                className="font-bold text-4xl md:text-5xl"
              />

              <span className="text-muted-foreground text-2xl font-bold whitespace-nowrap">
                {" "}
                {item.title[locale]}{" "}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h1 className="text-2xl font-semibold"> {t("lorem_word")} </h1>
          <p className="text-muted-foreground"> {t("lorem_paragraph")} </p>
          <p className="text-muted-foreground"> {t("lorem_paragraph")} </p>
          <p className="text-muted-foreground"> {t("lorem_paragraph")} </p>
          <p className="text-muted-foreground"> {t("lorem_paragraph")} </p>
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

              <h3 className="mt-2 text-xl font-semibold">
                {" "}
                {t("lorem_word")}{" "}
              </h3>

              <span className="text-center"> {t("lorem_sentence")} </span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-2xl font-bold text-center">{t("blog")}</h2>

            <Link
              href={routes.blog}
              className="text-sm flex items-center justify-end"
            >
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
              {blogs.map((blog, index) => (
                <CarouselItem
                  key={index}
                  className="h-full basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <BlogCard blog={blog} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Container>
    </>
  );
};

export default AboutPageWrapper;
