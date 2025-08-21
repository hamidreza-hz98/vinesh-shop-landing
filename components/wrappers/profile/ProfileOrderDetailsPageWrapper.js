"use client";

import OrderDetailsProductCard from "@/components/common/cards/OrderDetailsProductCard";
import { orders } from "@/constants/order";
import { formatDate } from "@/lib/date";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const ProfileOrderDetailsPageWrapper = ({ slug }) => {
  const [order, setOrder] = useState(null);

  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    const currentOrder = orders.find(
      (o) => String(o.trackNumber) === String(slug)
    );

    setOrder(currentOrder);
  }, [slug]);

  if (!order) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="w-full rounded-2xl shadow-xl p-4">
        <span className="font-semibold">
          {" "}
          {t("order")} #{order.trackNumber}{" "}
        </span>

        <div className="flex flex-col items-start justify-start md:flex-row gap-2 md:gap-8 mt-2">
          <span className="text-sm">
            {t("status")}:{" "}
            <span className="text-muted-foreground">
              {order.status.name[locale]}
            </span>
          </span>

          <span className="text-sm">
            {t("order_date")}:{" "}
            <span className="text-muted-foreground">
              {formatDate(order.submitDate)}
            </span>
          </span>
        </div>

        <div className="flex flex-col items-start justify-start md:flex-row gap-2 md:gap-8 mt-2">
          <span className="text-sm">
            {t("address_name")}:{" "}
            <span className="text-muted-foreground">{order.address.name}</span>
          </span>

          <span className="text-sm">
            {t("receipient_name")}:{" "}
            <span className="text-muted-foreground">
              {order.address.receipientName}
            </span>
          </span>

          <span className="text-sm">
            {t("phone")}:{" "}
            <span className="text-muted-foreground">
              {order.address.recipientPhone}
            </span>
          </span>

          <span className="text-sm">
            {t("zip_code")}:{" "}
            <span className="text-muted-foreground">
              {order.address.zipCode}
            </span>
          </span>
        </div>

        <div className="flex flex-col items-start justify-start md:flex-row gap-2 md:gap-8 mt-2">
          <span className="text-sm">
            {t("address")}:{" "}
            <span className="text-muted-foreground">
              {order.address.address}
            </span>
          </span>

          <span className="text-sm">
            {t("delivered_at")}:{" "}
            <span className="text-muted-foreground">
              {formatDate(order.deliveryDate)}
            </span>
          </span>
        </div>
      </div>

      <div className="w-full rounded-2xl shadow-xl mt-8 p-4">
        <div className="flex flex-col items-start justify-start md:flex-row gap-2 md:gap-8 mt-2">
          <span className="text-sm">
            {t("total")}:{" "}
            <span className="text-muted-foreground">
              {order.transaction.paid}
            </span>
          </span>

          <span className="text-sm">
            {t("discount")}:{" "}
            <span className="text-muted-foreground">
              {order.transaction.discount}
            </span>
          </span>

          <span className="text-sm">
            {t("coupon")}:{" "}
            <span className="text-muted-foreground">
              {order.transaction.coupon}
            </span>
          </span>
        </div>

        <div className="flex flex-col items-start justify-start md:flex-row gap-2 md:gap-8 mt-2">
          <span className="text-sm">
            {t("shipment_price")}:{" "}
            <span className="text-muted-foreground">
              {order.transaction.shipmentPrice}
            </span>
          </span>

          <span className="text-sm">
            {t("payment_date")}:{" "}
            <span className="text-muted-foreground">
              {formatDate(order.transaction.date)}
            </span>
          </span>
        </div>
      </div>

      <div className="w-full rounded-2xl shadow-xl flex flex-col gap-4 mt-8 p-4">
        {order.products.map((product, index) => (
          <div key={index}>
          <OrderDetailsProductCard product={product} />
          
          {
            index !== order.products.length-1 &&
            <div className="border border-border mt-4" />
          }
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileOrderDetailsPageWrapper;
