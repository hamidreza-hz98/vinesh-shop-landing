"use client";

import React, { useState } from "react";
import moment from "moment";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useLocale, useTranslations } from "next-intl";
import { userInfoFormItems } from "@/constants/user";

const UserInfoForm = () => {
  const [formData, setFormData] = useState({});
  const [birthdate, setBirthdate] = useState(null);

  const t = useTranslations()
  const locale = useLocale()

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
    >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

      {userInfoFormItems.map((item) => (
        <div key={item.key} className="">
          <Label htmlFor={item.key} className="text-sm font-medium">
            {item.label[locale]}
          </Label>

          {item.type === "datepicker" ? (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  {birthdate
                    ? moment(birthdate).format("LL") // localized full date
                    : item.placeholder[locale]}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={birthdate}
                  onSelect={(date) => {
                    setBirthdate(date);
                    handleChange(item.key, moment(date).format("YYYY-MM-DD"));
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          ) : (
            <Input
              id={item.key}
              type={item.type}
              placeholder={item.placeholder[locale]}
              value={formData[item.key] || ""}
              onChange={(e) => handleChange(item.key, e.target.value)}
              className="w-full"
            />
          )}
        </div>
      ))}


      <Button type="submit" className="w-full">
       { t("save") }
      </Button>
        </div>
    </form>
  );
};

export default UserInfoForm;
