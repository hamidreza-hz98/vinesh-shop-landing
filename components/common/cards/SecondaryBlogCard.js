"use client";

import { Button } from "@/components/ui/button";
import routes from "@/constants/routes";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SecondaryBlogCard = ({ blog }) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="border border-border rounded-2xl shadow w-full h-full">
      <div
        className=
          "flex w-full h-full flex-col"
      >
        <Image
          src={blog.image}
          alt={blog.title[locale]}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full max-h-48 object-cover rounded-t-2xl"
        />

        <div
          className=
            "p-4 flex flex-col items-start justify-start md:flex-row md:items-start md:justify-between gap-4"
        >
          <div>
            <h1 className="text-lg font-bold"> {blog.title[locale]} </h1>

            <span className="text-sm text-muted-foreground">
              {blog.excerpt[locale]}
            </span>
          </div>


          <Button asChild size="sm">
            <Link href={`${routes.blog}/${blog.slug[locale]}`}>
              {t("view_full_article")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondaryBlogCard;
