"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CiMenuKebab } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { useLocale, useTranslations } from "next-intl";

const AddressCard = ({ address }) => {
  const t = useTranslations();
  const locale = useLocale();

  const handleSetAddressAsDefault = () => {};

  return (
    <div className="w-full py-4 px-2 flex items-start justify-start border rounded-xl shadow-sm">
      <div className="flex flex-col w-full">
        <div className="w-full flex items-center justify-between">
          <span className="font-bold text-lg"> {address.name} </span>

          <div className="hidden md:flex items-center justify-end gap-2">
            {!address.isDefault && (
              <Button onClick={handleSetAddressAsDefault} size="sm">
                {t("set_ad_default")}
              </Button>
            )}

            <Button variant="ghost" size="icon">
              <GoPencil />
            </Button>

            <Button variant="ghost" size="icon">
              <GoTrash />
            </Button>
          </div>

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger variant="ghost" size="icon">
                <CiMenuKebab />
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>
                  {!address.isDefault && (
                    <Button
                      className="w-full justify-start"
                      onClick={handleSetAddressAsDefault}
                      size="sm"
                    >
                      <CiLocationArrow1 className="text-background" />
                      {t("set_ad_default")}
                    </Button>
                  )}
                </DropdownMenuItem>

                {!address.isDefault && <DropdownMenuSeparator />}

                <DropdownMenuItem>
                  <Button className="w-full justify-start" size="sm">
                    <GoPencil className="text-background" />
                    {t("edit_address")}
                  </Button>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <Button className="w-full justify-start" size="sm">
                    <GoTrash className="text-background" />
                    {t("delete_address")}
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="mt-2 w-full flex flex-col items-start justify-start lg:flex-row lg:items-center lg:gap-8">
          <span className="text-sm">
            {t("receipient_name")}
            <span className="text-muted-foreground">
              {address.receipientName}
            </span>
          </span>

          <span className="text-sm">
            {t("phone")}
            <span className="text-muted-foreground">
              {address.recipientPhone}
            </span>
          </span>

          <span className="text-sm">
            {t("zip_code")}
            <span className="text-muted-foreground">
              {address.zipCode}
            </span>
          </span>
        </div>

        <span className="text-sm">
          {t("address")}
          <span className="text-muted-foreground">{address.address}</span>
        </span>
      </div>
    </div>
  );
};

export default AddressCard;
