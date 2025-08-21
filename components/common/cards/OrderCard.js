"use client";

import { Button } from "@/components/ui/button";
import { orderStatuses } from "@/constants/order";
import routes from "@/constants/routes";
import { formatDate } from "@/lib/date";
import { getLocaleDirection } from "@/lib/locale";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const OrderCard = ({ order }) => {
  const t = useTranslations();
  const locale = useLocale();
  const dir = getLocaleDirection(locale);

  const Icon = orderStatuses[order.status.key]?.icon;

  return (
    <div className="w-full shadow-lg rounded-2xl p-4">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-start gap-2">
          <Icon size={24} className={orderStatuses[order.status.key]?.color} />

          <p className="font-semibold text-lg"> {order.status.name[locale]} </p>
        </div>

        <Button asChild variant="ghost" size="icon">
          <Link href={`${routes.profile}/orders/${order.trackNumber}`}>
            {dir === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-start sm:flex-row md:items-center justify-start mt-2 gap-4">
        <span className="text-muted-foreground">
          {formatDate(order.submitDate)}
        </span>

        <span>
          {t("order_id")}
          <span className="text-muted-foreground"> #{order.trackNumber} </span>
        </span>

        <span>
          {t("price")}
          <span className="text-muted-foreground">
            {order.transaction.paid}
          </span>
        </span>

        <span>
          {t("discount")}:{" "}
          <span className="text-muted-foreground">
            {order.transaction.discount}
          </span>
        </span>
      </div>

      <div className="border border-border mt-4" />

      <div className="grid mt-4 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
        {order.products.map((product, index) => (
          <Link key={index} href={`${routes.products}/${product.slug[locale]}`}>
            <Image
              src={product.media[0].src}
              alt={product.name}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-cover rounded"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
