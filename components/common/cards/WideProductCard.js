"use client";

import { Badge } from "@/components/ui/Badge";
import { calculateDiscountedPrice } from "@/lib/product";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";

const WideProductCard = ({ product }) => {
  const locale = useLocale();

  return (
    <Link href={`/products/${product.slug[locale]}`}>
    <div className="w-full h-full bg-background flex items-center justify-start rounded-2xl">
      <Image
        src={product.media[0].src}
        alt={product.name[locale]}
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-full max-w-[40%] object-cover rounded-s-2xl"
        />

      <div className="h-full p-4 flex flex-col items-start justify-start">
        <span className="text-xl font-bold"> {product.name[locale]} </span>

        <span className="text-sm text-muted-foreground mt-2 font-bold">
          {product.excerpt[locale]}
        </span>

        <div className="w-full mt-4 flex items-center justify-between">
          <div className="flex items-center justify-start">
            <FaStar className="text-yellow-500 me-1" />

            {product.rate}
          </div>

          <div className="w-auto h-auto flex gap-2">
            {product.colors &&
              product.colors.length > 0 &&
              product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: color.code }}
                />
              ))}
          </div>
        </div>

        <div className="w-full mt-2">
          <div className="w-full flex items-center justify-between">
           <span className={`${product.discount && "line-through text-muted-foreground"}`}> { product.price[locale] } </span>
          
            <Badge className="h-6 bg-destructive min-w-12 rounded-full px-1">
              { product.discount } %
            </Badge>
          </div>

          <span className="text-lg">
              { calculateDiscountedPrice(product.price[locale], product.discount) }
          </span>

        </div>
      </div>
    </div>
        </Link>
  );
};

export default WideProductCard;
