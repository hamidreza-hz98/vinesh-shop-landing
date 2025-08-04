"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const PrimaryProductCard = ({ product }) => {
  const locale = useLocale();

  return (
    <Link href={`/products/${product.slug[locale]}`}>
    <Card className="w-full h-full cursor-pointer rounded-2xl hover:scale-[101%] transition-all duration-500">
      <CardHeader className="p-0 rounded-2xl">
        <Image
          src={product.media[0].src}
          alt={product.name[locale]}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-36 object-cover rounded-t-2xl"
        />
      </CardHeader>

      <CardContent className="p-2">
        <CardTitle> { product.name[locale] } </CardTitle>

        <CardDescription> { product.excerpt[locale] } </CardDescription>
      </CardContent>

      <CardFooter className="px-2">
        <span> { product.price[locale] } </span>
      </CardFooter>
    </Card>
          </Link>
  );
};

export default PrimaryProductCard;
