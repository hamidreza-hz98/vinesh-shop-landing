"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SearchInput } from "@/components/forms/SearchInput";
import { useLocale, useTranslations } from "next-intl";
import { orders } from "@/constants/order";
import OrderCard from "@/components/common/cards/OrderCard";
import Pagination from "@/components/common/Pagination";

const ProfileOrdersOverviewPageWrapper = () => {
  const [activeTab, setActiveTab] = useState("all");

  const t = useTranslations();
  const locale = useLocale();

  const filteredOrders =
    activeTab === "all"
      ? orders
      : orders.filter((order) => order.status.key === activeTab);

  return (
    <div>
      <SearchInput placeholder={t("search_in_orders")} />

      <Tabs
        defaultValue="all"
        className="w-full mt-4"
        onValueChange={(val) => setActiveTab(val)}
      >
        <TabsList>
          <TabsTrigger value="all">{t("all")}</TabsTrigger>
          <TabsTrigger value="delivered">{t("delivered")}</TabsTrigger>
          <TabsTrigger value="in_progress">{t("in_progress")}</TabsTrigger>
          <TabsTrigger value="canceled">{t("canceled")}</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-4">
          <div className="space-y-4">
            {filteredOrders.length ? (
              filteredOrders.map((order, index) => (
                <OrderCard key={index} order={order} />
              ))
            ) : (
              <div>
                <p className="text-center text-muted-foreground">
                  {t("no_orders")}
                </p>
              </div>
            )}
          </div>

          <Pagination initialPage={1} initialPageSize={6} totalItems={64} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileOrdersOverviewPageWrapper;
