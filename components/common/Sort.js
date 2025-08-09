"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsSortUp } from "react-icons/bs";
import { Button } from "../ui/button";
import { FaFilter } from "react-icons/fa";
import MobileFilter from "./MobileFilter";

const Sort = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(items[0])
  const [openMobileFilter, setOpenMobileFilter] = useState(false)

  const t = useTranslations();
  const locale = useLocale();

  const handleSelectSortItem = (item) => {
    setSelectedItem(item)

    // Push up queries to URL
  } 

  return (
    <div>
      <div className="hidden sm:flex items-center justify-start">
        <p className="text-sm me-2 flex items-center justify-start">  <BsSortUp className="me-1" /> { t("sort") } </p>

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-md px-3 py-1 text-sm border">
            {selectedItem.name[locale]}
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            {items.map((item, index) => (
              <>
                <DropdownMenuItem onClick={() => handleSelectSortItem(item)}> {item.name[locale]} </DropdownMenuItem>
                {index + 1 !== items.length && <DropdownMenuSeparator />}
              </>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex sm:hidden">
        <Button onClick={() => setOpenMobileFilter(true)} variant="outline" size="sm">
<FaFilter /> {t("filter")}
        </Button>
      </div>

      <MobileFilter open={openMobileFilter} onClose={() => setOpenMobileFilter(false)} />
    </div>
  );
};

export default Sort;
