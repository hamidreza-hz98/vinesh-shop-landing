"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const NumericProductCard = ({ product, number }) => {
  const locale = useLocale();
  return (
    <div className="w-full h-auto max-h-36 flex items-center justify-start">
      <Image
        src={product.media[0].src}
        alt={product.name[locale]}
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-auto max-w-[30%] max-h-36 object-cover"
      />

      <span className="text-7xl font-bold mx-4"> {number} </span>

      <span> {product.name[locale]} </span>
    </div>
  );
};

export default NumericProductCard;
