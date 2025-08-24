"use client";

import routes from "@/constants/routes";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedBlogCard = ({ blog }) => {
  const locale = useLocale();

  return (
   <Link href={`${routes.blog}/${blog.slug[locale]}`} className="flex items-center justify-start gap-2">
  <Image
    src={blog.image}
    alt={blog.title[locale]}
    width={48}
    height={48}
    className="object-cover rounded"
  />

  <div className="flex-1 min-w-0">
    <p className="text-sm font-medium truncate">{blog.title[locale]}</p>
    <p className="text-xs text-muted-foreground truncate">{blog.excerpt[locale]}</p>
  </div>
</Link>

  );
};

export default RelatedBlogCard;
