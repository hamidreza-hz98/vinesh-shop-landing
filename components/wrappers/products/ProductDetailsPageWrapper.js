"use client";

import Breadcrumbs from "@/components/common/BreadCrumbs";
import Container from "@/components/common/Container";
import ThumbnailCarousel from "@/components/common/ThumbnailCarousel";
import { Button } from "@/components/ui/button";
import { productDetailsBreadcrumbs, products } from "@/constants/product";
import { calculateDiscountedPrice } from "@/lib/product";
import { Badge } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaRegComment, FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Review from "@/components/common/Review";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import PrimaryProductCard from "@/components/common/cards/PrimaryProductCard";

const ProductDetailsPageWrapper = ({ slug }) => {
  const [product, setProduct] = useState(null);
  const [breadcrumbsItems, setBreadcrumbsItems] = useState(
    productDetailsBreadcrumbs
  );
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    const currentProduct = products.find((item) => item.slug[locale] === slug);

    setProduct(currentProduct);
  }, [locale, slug]);

  useEffect(() => {
    if (product) {
      setBreadcrumbsItems((prev) => [
        ...prev,
        { label: product?.name, link: "" },
      ]);
    }
  }, [product]);

  if (!product) return null;

  const handleAddToWishlist = () => {
    console.log("Add to wishlist");
  };

  const handleShareProduct = () => {
    console.log("Share product");
  };

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="col-span-full">
          <Breadcrumbs items={breadcrumbsItems} />
        </div>

        <div className="col-span-full md:col-span-2">
          <ThumbnailCarousel items={product?.media || []} />
        </div>

        <div className="col-span-full md:col-span-3">
          <div className="w-full flex flex-col md:flex-row items-start justify-between">
            <div className="order-2 md:order-1">
              <h1 className="text-2xl font-bold">{product?.name?.[locale]}</h1>

              <span className="text-muted-foreground">
                {product?.excerpt?.[locale]}
              </span>

              <span className="text-sm flex items-center justify-start">
                {" "}
                {t("brand")} :{" "}
                <Image
                  src={product?.brand?.logo}
                  width={24}
                  height={24}
                  alt={product?.brand?.name?.[locale]}
                  className="rounded-full"
                />{" "}
                {product?.brand?.name?.[locale]}{" "}
              </span>

              <div className="flex items-center justify-start gap-2">
                {t("categories")}:
                {product?.categories?.map((category, index) => (
                  <Link key={index} href={`/categories/${category}`}>
                    {" "}
                    {category}{" "}
                    {index + 1 !== product?.categories?.length && "|"}{" "}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex md:flex-col items-center md:items-end justify-end gap-4 md:gap-1 order-1 md:order-2">
              <div onClick={handleAddToWishlist} className="cursor-pointer">
                <FaRegHeart size={16} />
              </div>

              <div onClick={handleShareProduct} className="cursor-pointer">
                <IoShareSocialOutline size={16} />
              </div>

              <FaRegComment size={16} />

              <span className="flex items-center justify-end gap-1">
                {product?.rate}

                <FaRegStar size={16} />
              </span>
            </div>
          </div>

          <div className="flex items-start justify-between mt-4 gap-4">
            <div className="flex flex-col items-start justify-start">
              <div className="flex items-center justify-start gap-4">
                <span
                  className={`${product?.discount && "line-through text-muted-foreground text-lg"}`}
                >
                  {product?.price[locale]}
                </span>

                <div className="min-w-16 h-8 flex items-center justify-center font-semibold bg-destructive rounded-full px-1 text-background">
                  {product?.discount} %
                </div>
              </div>

              <span className="text-2xl font-bold">
                {calculateDiscountedPrice(
                  product?.price?.[locale],
                  product?.discount
                )}
              </span>

              {product?.warranty && (
                <span className="text-muted-foreground text-sm">
                  {product?.warranty[locale]}
                </span>
              )}
            </div>

            <div className="w-auto h-auto flex gap-2">
              {product?.colors &&
                product?.colors.length > 0 &&
                product?.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full border"
                    style={{ backgroundColor: color.code }}
                  />
                ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 mt-4 gap-4">
            {product?.specifications?.map((spec, index) => (
              <div
                key={index}
                className="p-4 flex flex-col items-start justify-center bg-muted border border-border rounded-2xl"
              >
                <span className="text-sm text-muted-foreground">
                  {spec.key[locale]}:
                </span>

                <span> {spec.value[locale]} </span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-full">
          <Tabs defaultValue="description" className="w-full">
            <TabsList>
              <TabsTrigger value="description">{t("description")}</TabsTrigger>
              <TabsTrigger value="specifications">
                {t("specifications")}
              </TabsTrigger>
              <TabsTrigger value="comments">{t("comments")}</TabsTrigger>
            </TabsList>

            <TabsContent value="description">
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: product?.description?.[locale],
                }}
              />
            </TabsContent>

            <TabsContent value="specifications">
              {product?.specifications?.map((spec, index) => (
                <div
                  key={index}
                  className={`flex p-4 items-center justify-between ${index % 2 === 0 ? "bg-muted" : "bg-background"}`}
                >
                  <span> {spec.key[locale]} </span>
                  <span> {spec.value[locale]} </span>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="comments">
              <div className="flex flex-col w-full gap-4">
                {product?.reviews?.map((review, index) => (
                  <Review key={index} review={review} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {
          products?.relatedProducts &&
          <div className="col-span-full">
            <Carousel
              opts={{
                align: "start",
              }}
              className="h-full w-full"
            >
              <CarouselContent className="h-full">
                {product?.relatedProducts?.map((product, index) => (
                  <CarouselItem
                    key={index}
                    className="h-full md:basis-1/3"
                  >
                    <PrimaryProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        }
      </div>
    </Container>
  );
};

export default ProductDetailsPageWrapper;
