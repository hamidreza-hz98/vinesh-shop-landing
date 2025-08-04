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
import { useLocale, useTranslations } from "next-intl";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Card className="w-full h-full rounded-2xl hover:scale-[101%] transition-all duration-500">
      <CardHeader className="p-0 rounded-2xl">
        <Image
          src={blog.image}
          alt={blog.title[locale]}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-32 object-cover rounded-t-2xl"
        />
      </CardHeader>

      <CardContent className="p-2 h-36">
        <span className="text-sm"> { moment(blog.date).format("MMMM Do, YYYY") } - <span className="text-destructive"> { blog.timeToRead[locale] } </span> </span>

        <CardTitle className="mt-2"> {blog.title[locale]} </CardTitle>

        <CardDescription className="mt-1 px-2 "> {blog.excerpt[locale]} </CardDescription>
      </CardContent>

      <CardFooter className="px-2 text-sm">
        <Link href={`/blog/${blog.slug[locale]}`}> {t("view_full_article")} </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
