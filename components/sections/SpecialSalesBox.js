"use client";

import { products } from "@/constants/product";
import CountdownTimer from "../common/CountdownTimer";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import routes from "@/constants/routes";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PrimaryProductCard from "../common/cards/PrimaryProductCard";
import { useLocale, useTranslations } from "next-intl";

const SpecialSalesBox = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="bg-foreground min-h-72 p-6 rounded-2xl w-full grid grid-cols-1 md:grid-cols-6 gap-8">
      <div className="h-full md:col-span-1 flex flex-col items-center justify-between gap-6">
        <h2 className="text-background text-lg font-bold">
          {t("special_sales")}
        </h2>

        <CountdownTimer expirationTime="2025-08-24T09:42:30.123Z" />

        <Button asChild variant="outline">
          <Link href={routes.specialSales}>{t("view_all")}</Link>
        </Button>
      </div>

      <div className="md:col-span-5 h-full">
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
  );
};

export default SpecialSalesBox;
