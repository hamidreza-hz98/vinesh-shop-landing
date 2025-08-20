"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { paymentMethods } from "@/constants/transaction";
import ProductCartPrimaryCard from "@/components/common/cards/ProductCartPrimaryCard";
import { sampleCartItems } from "@/constants/product";

const CartFinalize = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [selectedPayment, setSelectedPayment] = useState("");

  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-lg font-semibold">{t("payment_method")}</h1>

        <RadioGroup
          value={selectedPayment}
          onValueChange={(val) => setSelectedPayment(val)}
          className="grid gap-3"
        >
          {paymentMethods.map((method, idx) => {
            const title = method.title[locale] || method.title.en;
            const description =
              method.description[locale] || method.description.en;

            return (
              <Label
                key={idx}
                htmlFor={`pm-${idx}`}
                className={`flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition
                ${
                  selectedPayment === method.title.en
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <RadioGroupItem
                  value={method.title.en}
                  id={`pm-${idx}`}
                  className="hidden"
                />
                <Image
                  src={method.image}
                  alt={title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-medium">{title}</span>
                  <span className="text-sm text-gray-500">{description}</span>
                </div>
              </Label>
            );
          })}
        </RadioGroup>
      </div>

      <div className="w-full flex flex-col items-start justify-start mt-8 gap-4">
        <h1 className="text-lg font-semibold">{t("your_slected_products")}</h1>

        {sampleCartItems.products.map((product, index) => (
          <ProductCartPrimaryCard key={index} product={product} />
        ))}
      </div>

      <div className="mt-4">
        <span className="font-semibold">{t("shipment")}</span>
        <span className="font-light text-muted-foreground">
          27 September 2025, 14:00 o&apos;clock{" "}
        </span>
      </div>
    </div>
  );
};

export default CartFinalize;
