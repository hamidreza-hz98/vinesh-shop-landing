"use client";

import React, { useState } from "react";
import Filter from "./Filter";
import {
  filterProductsItems,
  products,
  sortProductItems,
  specialSalesTags,
} from "@/constants/product";
import Sort from "./Sort";
import { Button } from "../ui/button";
import { FaList } from "react-icons/fa6";
import { LuGrid2X2 } from "react-icons/lu";
import { useLocale, useTranslations } from "next-intl";
import PrimaryProductCard from "./cards/PrimaryProductCard";
import WideProductCard from "./cards/WideProductCard";
import Pagination from "./Pagination";
import { Badge } from "../ui/Badge";
import { randomColor } from "@/lib/ui";
import CollapsibleTextBox from "./CollapsibleTextBox";

const ProductsOverview = () => {
  const [theme, setTheme] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const t = useTranslations();
  const locale = useLocale();

  const totalItems = products.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
      <div className="hidden sm:block sm:col-span-1">
        <div
          className="sticky top-4 max-h-[calc(100vh-4rem)] rounded-2xl overflow-auto shadow-xl"
          style={{ maxHeight: "calc(100vh - 4rem)" }}
        >
          <Filter items={filterProductsItems} />
        </div>
      </div>

      <div className="col-span-full sm:col-span-2 md:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Sort & View Toggle */}
          <div className="bg-background p-4 shadow rounded-full z-20 col-span-full flex items-center justify-between sticky top-4 h-fit">
            <Sort items={sortProductItems} />

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
                {totalItems} {t("products")}
              </p>
            </div>
          </div>

          {/* Products */}
          {currentProducts.map((product, index) =>
            theme === "grid" ? (
              <PrimaryProductCard key={index} product={product} />
            ) : (
              <div key={index} className="col-span-full">
                <WideProductCard product={product} />
              </div>
            )
          )}

          {/* Pagination */}
          <div className="col-span-full">
            <Pagination
              totalItems={totalItems}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
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
  );
};

export default ProductsOverview;
