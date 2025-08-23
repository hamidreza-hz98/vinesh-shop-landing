"use client";

import CommentForm from "@/components/forms/CommentForm";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegComment } from "react-icons/fa";

const PendingForCommentCard = ({ product }) => {
  const [commentDialog, setCommentDialog] = useState(false);

  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="p-4 border border-border shadow-lg rounded-2xl">
      <div className="flex items-start justify-start gap-2">
        <Image
          src={product.media[0].src}
          alt={product.name[locale]}
          width={0}
          height={0}
          sizes="100vw"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 object-cover"
        />

        <div className="flex flex-col items-start justify-start">
          <h1 className="font-semibold"> {product.name[locale]} </h1>

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
      </div>

      <div className="w-full border border-border mt-4" />

      <Button onClick={() => setCommentDialog(true)} className="w-full mt-4" size="sm">
        <FaRegComment />

        {t("comment")}
      </Button>

      <CommentForm open={commentDialog} onOpenChange={setCommentDialog} />
    </div>
  );
};

export default PendingForCommentCard;
