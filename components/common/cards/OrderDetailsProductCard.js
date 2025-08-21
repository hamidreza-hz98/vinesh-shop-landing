"use client";

import CommentForm from "@/components/forms/CommentForm";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";
import { calculateDiscountedPrice } from "@/lib/product";
import { Rating } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { CiTrash } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const OrderDetailsProductCard = ({ product }) => {
  const [rating, setRating] = useState(3)
  const [commentDialog, setCommentDialog] = useState(false)

  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
      <div className="flex flex-col gap-2 max-w-24 sm:max-w-36">
        <Image
          src={product.media[0].src}
          alt={product.name[locale]}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex flex-col items-start justify-start">
        <h1 className="text-lg font-bold"> {product.name[locale]} </h1>

        <span className=""> {product.excerpt[locale]} </span>

        {product.warranty && (
          <span className="text-sm text-muted-foreground">
            {product.warranty[locale]}
          </span>
        )}

        {product.color && (
          <span className="text-sm flex items-center mt-2 gap-1">
            {" "}
            <div
              className="w-4 h-4 rounded-full border"
              style={{ backgroundColor: product.color.code }}
            />{" "}
            {product.color.name[locale]}{" "}
          </span>
        )}

        {product.size && (
          <span className="text-sm">
            {t("size")} {product.size.name[locale]}
          </span>
        )}

        
      </div>

      <div className="flex flex-col items-start justify-start min-w-36">
        <span> { t("rate_this_product") } </span>
        <Rating
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />

        <Button onClick={() => setCommentDialog(true)} className="mt-4" size="sm">
          <FaRegComment />

          {t("comment")}
        </Button>

        <div className="mt-2">
          <div className="flex items-center">
            <span
              className={`${product.discount && "line-through text-muted-foreground"}`}
            >
              {" "}
              {product.price[locale]}{" "}
            </span>

            <Badge className="h-6 bg-destructive min-w-12 rounded-full ms-2 px-1">
              {product.discount} %
            </Badge>
          </div>

          <span className="text-lg">
            {calculateDiscountedPrice(product.price[locale], product.discount)}
          </span>
        </div>
      </div>

      <CommentForm open={commentDialog} onOpenChange={setCommentDialog} />
    </div>
  );
};

export default OrderDetailsProductCard;
