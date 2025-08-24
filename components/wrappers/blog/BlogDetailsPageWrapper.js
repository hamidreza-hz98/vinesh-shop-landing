"use client";

import Breadcrumbs from "@/components/common/BreadCrumbs";
import BlogCard from "@/components/common/cards/BlogCard";
import Container from "@/components/common/Container";
import ShareBox from "@/components/common/ShareBox";
import { Badge } from "@/components/ui/Badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blogDetailsBreadcrumbs, blogs } from "@/constants/blog";
import { formatDate } from "@/lib/date";
import { randomColor } from "@/lib/ui";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegCalendar, FaRegClock, FaRegEye } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import Autoplay from "embla-carousel-autoplay";
import PrimaryProductCard from "@/components/common/cards/PrimaryProductCard";
import WideBlogCard from "@/components/common/cards/WideBlogCard";
import RelatedBlogCard from "@/components/common/cards/RelatedBlogCard";

const BlogDetailsPageWrapper = ({ slug }) => {
  const [blog, setBlog] = useState();
  const [breadcrumbsItems, setBreadcrumbsItems] = useState(
    blogDetailsBreadcrumbs
  );
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    const currentBlog = blogs.find((item) => item.slug[locale] === slug);

    setBlog(currentBlog);
  }, [locale, slug]);

  useEffect(() => {
    if (blog) {
      setBreadcrumbsItems((prev) => [
        ...prev,
        { label: blog?.title, link: "" },
      ]);
    }
  }, [blog]);

  if (!blog) return null;

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-full">
          <Breadcrumbs items={breadcrumbsItems} />
        </div>

        <div className="col-span-full md:col-span-8">
          <h1 className="text-3xl font-bold"> {blog.title[locale]} </h1>

          <p className="text-muted-foreground"> {blog.excerpt[locale]} </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 mt-4">
            <div className="flex items-center justify-start gap-2">
              <TfiWrite className="text-sm" />

              <span className="text-sm">{blog.author[locale]}</span>
            </div>

            <div className="flex items-center justify-start gap-2">
              <FaRegClock className="text-sm" />

              <span className="text-sm">{blog.timeToRead[locale]}</span>
            </div>

            <div className="flex items-center justify-start gap-2">
              <FaRegCalendar className="text-sm" />

              <span className="text-sm">{formatDate(blog.date)}</span>
            </div>

            <div className="flex items-center justify-start gap-2">
              <FaRegEye className="text-sm" />

              <span className="text-sm">1,923</span>
            </div>

            <div className="flex items-center justify-start gap-2">
              <BiLike className="text-sm" />

              <span className="text-sm">{blog.likes}</span>
            </div>

            <div className="flex items-center justify-start gap-2">
              <BiDislike className="text-sm" />

              <span className="text-sm">{blog.dislikes}</span>
            </div>
          </div>

          <Image
            src={blog.image}
            alt={blog.title[locale]}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto max-h-72 object-cover mt-8"
          />

          <div
            dangerouslySetInnerHTML={{ __html: blog.text[locale] }}
            className="content mt-8"
          />

          <ShareBox
            url={typeof window !== "undefined" ? window.location.href : ""}
            title={blog.title[locale]}
          />

          <div className="flex flex-wrap w-full mt-6 gap-2">
            {blog.tags.map((tag, index) => (
              <Badge className={`bg-${randomColor()}`} key={index}>
                {tag[locale]}
              </Badge>
            ))}
          </div>
        </div>

        <div className="md:col-span-4">
          <div
            className="sticky w-full scrollbar-hide top-4 overflow-auto"
            style={{ maxHeight: "calc(100vh - 4rem)" }}
          >
            <h3 className="text-lg font-semibold">
              {" "}
              {t("related_products")}:{" "}
            </h3>

            <Carousel
              opts={{
                align: "start",
              }}
              plugins={[plugin.current]}
              className="h-full w-full mt-4"
            >
              <CarouselContent className="h-full">
                {blog.suggestedProducts.map((product, index) => (
                  <CarouselItem key={index} className="h-full basis-full">
                    <PrimaryProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <h3 className="mt-8 text-lg font-semibold">
              {" "}
              {t("related_blogs")}{" "}
            </h3>
            <div className="flex flex-col mt-2 gap-4 ">
              {blog.relatedBlogs.map((relatedBlog, index) => (
                <RelatedBlogCard key={index} blog={relatedBlog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogDetailsPageWrapper;
