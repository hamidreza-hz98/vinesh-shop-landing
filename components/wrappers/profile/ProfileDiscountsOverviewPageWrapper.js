"use client";

import DiscountCard from "@/components/common/cards/DiscountCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { couponsAndPrizes } from "@/constants/coupon";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";

const ProfileDiscountsOverviewPageWrapper = () => {
  const [activeTab, setActiveTab] = useState("all");

  const t = useTranslations();
  const locale = useLocale();

  const filteredDiscounts =
    activeTab === "all"
      ? couponsAndPrizes
      : couponsAndPrizes.filter((item) => item.type === activeTab);


    
  return (
    <div>
      <Tabs
        defaultValue="all"
        className="w-full mt-4"
        onValueChange={(val) => setActiveTab(val)}
      >
        <TabsList>
          <TabsTrigger value="all">{t("all")}</TabsTrigger>
          <TabsTrigger value="coupon">{t("coupons")}</TabsTrigger>
          <TabsTrigger value="prize">{t("prizes")}</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDiscounts.map((discount, index) => (
              <DiscountCard key={index} discount={discount} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileDiscountsOverviewPageWrapper;
