"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categories } from "@/constants/category";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const CategoriesPageWrapper = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="flex h-[80vh]">
      <div className="w-[80px] overflow-y-auto border-e border-border scrollbar-hide">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-3 cursor-pointer ${
              index === selectedCategory ? "bg-muted" : ""
            }`}
            onClick={() => setSelectedCategory(index)}
          >
            <Image
              src={category.icon}
              alt={category.name[locale]}
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
            <span
              className={`text-[10px] mt-1 text-center ${
                index === selectedCategory
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {category.name[locale]}
            </span>
          </div>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="w-full gap-4">
          <Accordion type="single" collapsible>
            {categories[selectedCategory].subCategories.map((item, idx) => (
              <AccordionItem key={idx} value={item.name.en}>
                <AccordionTrigger>{item.name[locale]}</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-3 gap-4">

                  {
                    item.subCategories.map((cat, counter) => 
                      <div key={counter} className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                          <Image
                            src={cat.icon}
                            alt={cat.name[locale]}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-xs text-center">{cat.name[locale]}</span>
                      </div>
                    )
                  }
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPageWrapper;
