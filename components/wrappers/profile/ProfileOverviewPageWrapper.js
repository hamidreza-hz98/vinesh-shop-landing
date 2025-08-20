"use client";

import PrimaryProductCard from "@/components/common/cards/PrimaryProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ordersOverviewItems } from "@/constants/order";
import { products } from "@/constants/product";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const ProfileOrdersOverviewPageWrapper = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="w-full mt-8">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 items-center justify-around px-6 py-4 border border-border rounded-2xl gap-4">
        {ordersOverviewItems.map((item, index) => (
          <div
            className="flex flex-col items-center justify-start gap-1"
            key={index}
          >
            <item.icon className={`text-4xl ${item.color}`} />
            <span> {item.title[locale]} </span>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-2xl font-semibold">
        {" "}
        {t("recently_viewed_products")}{" "}
      </h2>

      <Carousel
        opts={{
          align: "start",
        }}
        className="h-full w-full mt-2"
      >
        <CarouselContent className="h-full">
          {products?.map((product, index) => (
            <CarouselItem
              key={index}
              className="h-full sm:basis-1/3 lg:basis-1/4"
            >
              <PrimaryProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProfileOrdersOverviewPageWrapper;
