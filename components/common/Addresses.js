"use client";

import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { Button } from "../ui/button";
import { addresses } from "@/constants/address";
import AddressCard from "./cards/AddressCard";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddressForm from "../forms/AddressForm";

const Addresses = ({ onSelect, isProfile = false }) => {
  const t = useTranslations();
  const locale = useLocale();

  const openAddressDialog = (address) => {
    // open create / edit
  };

  const defaultAddress = addresses.find((a) => a.isDefault)?.name;

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          {isProfile ? t("my_addresses") : t("select_address")}
        </h2>

        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">{t("new_address")}</Button>
          </DialogTrigger>

          <DialogContent className="max-h-[90vh] overflow-y-scroll mt-4">
            <DialogHeader>
              <DialogTitle> {t("create_new_address")} </DialogTitle>

              <DialogDescription>
                <AddressForm />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="w-full flex flex-col gap-4 mt-2">
        {addresses && addresses.length ? (
          isProfile ? (
            addresses.map((address, index) => (
              <div key={index} className="flex items-center space-x-2">
                <AddressCard isProfile={isProfile} address={address} />
              </div>
            ))
          ) : (
            <RadioGroup
              defaultValue={defaultAddress}
              onValueChange={onSelect}
              className="w-full flex flex-col gap-4"
            >
              {addresses.map((address, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={address.name} id={address.name} />
                  <Label
                    htmlFor={address.name}
                    className="cursor-pointer w-full"
                  >
                    <AddressCard isProfile={isProfile} address={address} />
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )
        ) : (
          <div className="w-full flex items-center justify-center mt-8">
            <span className="border-4 border-border border-dashed rounded text-center px-4 py-8">
              {t("no_address")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Addresses;
