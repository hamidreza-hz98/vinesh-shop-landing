"use client";

import BlogCard from "@/components/common/cards/BlogCard";
import SecondaryBlogCard from "@/components/common/cards/SecondaryBlogCard";
import WideBlogCard from "@/components/common/cards/WideBlogCard";
import CollapsibleTextBox from "@/components/common/CollapsibleTextBox";
import Container from "@/components/common/Container";
import Filter from "@/components/common/Filter";
import Pagination from "@/components/common/Pagination";
import Sort from "@/components/common/Sort";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";
import { blogs, filterBlogsItems, sortBlogItems } from "@/constants/blog";
import { specialSalesTags } from "@/constants/product";
import { randomColor } from "@/lib/ui";
import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { LuGrid2X2 } from "react-icons/lu";
import { useLocale, useTranslations } from "use-intl";

const BlogOverviewPageWrapper = () => {
  const [theme, setTheme] = useState("grid");

  const t = useTranslations();
  const locale = useLocale();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-full">
          <h1 className="text-4xl font-bold text-center">
            {" "}
            {t("vinesh_blog")}{" "}
          </h1>
        </div>

        <div className="col-span-full md:col-span-1">
          <SecondaryBlogCard blog={blogs[0]} />
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col w-full gap-4">
          <WideBlogCard blog={blogs[1]} />

          <WideBlogCard blog={blogs[2]} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 mt-8 gap-8">
        <div className="hidden sm:block sm:col-span-1">
          <div
            className="sticky top-4 max-h-[calc(100vh-4rem)] rounded-2xl overflow-auto shadow-xl"
            style={{ maxHeight: "calc(100vh - 4rem)" }}
          >
            <Filter items={filterBlogsItems} />
          </div>
        </div>

        <div className="col-span-full sm:col-span-2 md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Sort & View Toggle */}
            <div className="bg-background p-4 shadow rounded-full z-20 col-span-full flex items-center justify-between sticky top-4 h-fit">
              <Sort items={sortBlogItems} />

              <div className="flex items-center justify-end gap-2">
                <Button
                  onClick={() => setTheme("grid")}
                  variant="ghost"
                  size="icon"
                  className={`${theme === "grid" && "bg-muted"}`}
                >
                  <LuGrid2X2 />
                </Button>

                <Button
                  onClick={() => setTheme("list")}
                  variant="ghost"
                  size="icon"
                  className={`${theme === "list" && "bg-muted"}`}
                >
                  <FaList />
                </Button>

                <p className="text-sm">
                  {blogs.length} {t("posts")}
                </p>
              </div>
            </div>

            {blogs.slice(0, 6).map((blog, index) =>
              theme === "grid" ? (
                <BlogCard key={index} blog={blog} />
              ) : (
                <div key={index} className="col-span-full">
                  <WideBlogCard blog={blog} />
                </div>
              )
            )}

            <div className="col-span-full">
              <Pagination totalItems={25} pageSize={12} currentPage={1} />
            </div>
          </div>
        </div>

        <div className="col-span-full p-8 border rounded-2xl">
          <div className="flex flex-wrap w-full gap-2">
            {specialSalesTags.map((tag, index) => (
              <Badge className={`bg-${randomColor()}`} key={index}>
                {tag[locale]}
              </Badge>
            ))}
          </div>
        </div>

        <div className="col-span-full">
          <CollapsibleTextBox text={t("lorem_text")} />
        </div>
      </div>
    </Container>
  );
};

export default BlogOverviewPageWrapper;
