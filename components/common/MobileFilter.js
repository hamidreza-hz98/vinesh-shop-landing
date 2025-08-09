"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useLocale, useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { filterProductsItems, sortProductItems } from "@/constants/product";
import ElasticSlider from "../ui/reactbits/ElasticSlider";
import { average } from "@/lib/number";

const overlayVariants = {
  hidden: { opacity: 0, y: "-10%", transition: { duration: 0.25 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: "-10%", transition: { duration: 0.25 } },
};

const MobileFilter = ({ open, onClose }) => {
  const [selectedItem, setSelectedItem] = useState(sortProductItems[0]);

  const t = useTranslations();
  const locale = useLocale();

  const handleSelectSortItem = (item) => {
    setSelectedItem(item);

    // Push up queries to URL
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="filter-overlay"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariants}
          className="fixed top-0 left-0 w-screen h-screen z-[999] bg-white/70 backdrop-blur-lg flex flex-col items-center justify-start p-4"
        >
          <div className="flex w-full justify-between items-center mb-4">
            <span className="text-lg font-semibold">{t("filter")}</span>
            <Button variant="ghost" onClick={onClose}>
              ✕
            </Button>
          </div>

          <div className="w-full mb-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-md px-3 py-2 text-sm border w-full text-left">
                {selectedItem?.name?.[locale] || t("sort_by")}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {sortProductItems.map((item, index) => (
                  <React.Fragment key={item.value}>
                    <DropdownMenuItem
                      onClick={() => handleSelectSortItem(item)}
                    >
                      {item.name[locale] || item.name.en}
                    </DropdownMenuItem>
                    {index + 1 !== sortProductItems.length && (
                      <DropdownMenuSeparator />
                    )}
                  </React.Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <form className="w-full space-y-6 overflow-y-auto">
            {filterProductsItems.map((item) => (
              <div key={item.id} className="space-y-2">
                <label className="block font-medium">
                  {item.label[locale] || item.label.en}
                </label>

                {item.type === "checkbox" && (
                  <div className="space-y-1">
                    {item.options?.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          name={item.id}
                          value={opt.value}
                          className="accent-black"
                        />
                        {opt.label[locale] || opt.label.en}
                      </label>
                    ))}
                  </div>
                )}

                {item.type === "range" && (
                  <div className="w-full">
                    <ElasticSlider
                      minValue={item.minValue}
                      maxValue={item.maxValue}
                      step={10}
                      range
                      defaultValue={average([item.minValue, item.maxValue])}
                      className="w-full"
                    />
                  </div>
                )}

                {item.type === "select" && (
                  <select
                    name={item.id}
                    className="w-full border border-gray-300 rounded p-2"
                  >
                    <option value="">{t("brands")}</option>
                    {item.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label[locale] || opt.label.en}
                      </option>
                    ))}
                  </select>
                )}

                {item.type === "radio" && (
                  <div className="space-y-1">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={item.id}
                        value="true"
                        className="accent-black"
                      />
                      {item.label[locale]}
                    </label>
                  </div>
                )}
              </div>
            ))}
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileFilter;
