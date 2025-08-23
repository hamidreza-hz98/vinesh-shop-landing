"use client";

import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { getRemainingTime } from "@/lib/date";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { FaCopy, FaRegCopy } from "react-icons/fa";
import { toast } from "sonner";

const DiscountCard = ({ discount }) => {
  const t = useTranslations();
  const locale = useLocale();

  const remainingTime = getRemainingTime(discount.expiry);

  const handleCopyDiscountCode = () => {
    navigator.clipboard.writeText(discount.code).then(() => {
      toast.success(t("code_copied"));
    });
  };

  return (
    <div className="p-4 border border-border rounded-2xl shadow-xl">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-6">
          <p className="text-sm font-semibold"> {discount.title[locale]} </p>
          <p className="text-sm text-muted-foreground">
            {discount.description[locale]}
          </p>
        </div>

        <div className="col-span-6 flex flex-col items-end justify-center">
          {remainingTime ? (
            <>
              {discount.type === "coupon" && (
                <Button onClick={handleCopyDiscountCode} variant="outline">
                  <FaRegCopy className="me-1" />
                  {discount.code}
                </Button>
              )}

              <div className="mt-2 flex items-center justify-start gap-1">
                {remainingTime.days && (
                  <span className="text-xs text-muted-foreground">
                    {remainingTime.days} {t("days")}
                  </span>
                )}
                <span className="text-xs text-muted-foreground">
                  {remainingTime.hours} {t("hours")}
                </span>
                <span className="text-xs"> {t("to_expire")} </span>
              </div>
            </>
          ) : (
            <div className="p-2 bg-muted-foreground rounded-lg text-background text-sm">
              {" "}
              {t("expired")}{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
