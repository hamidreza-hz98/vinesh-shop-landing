"use client";

import { Button } from "@/components/ui/button";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import DesktopMegaMenu from "./DesktopMegaMenu";
import Image from "next/image";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import Link from "next/link";
import React from "react";
import { SearchInput } from "@/components/forms/SearchInput";
import routes from "@/constants/routes";
import { useTranslations } from "next-intl";

const DesktopHeader = () => {
  const t = useTranslations();

  return (
    <div className="hidden md:flex max-w-7xl mx-auto flex-col w-full">
      <div className="w-full flex items-center justify-between px-8 py-2">
        <Link
          href={routes.home}
          className="rounded-full flex items-center justify-start gap-2"
        >
          <Image
            src="/images/placeholder.svg"
            width={48}
            height={48}
            sizes="100vw"
            alt="Logo"
            className="rounded-full"
          />

          <span className="text-lg font-bold"> {t("vinesh_shop")} </span>
        </Link>

        <div>
          <SearchInput
            placeholder={t("header_search_placeholder")}
            className="w-[150%]"
          />
        </div>

        <div className="flex items-center justify-end gap-2">
          <Button asChild variant="ghost" size="icon" className="size-8">
            <Link href={routes.cart}>
              <CiShoppingCart size={24} />
            </Link>
          </Button>

          <Button asChild variant="ghost" size="icon" className="size-8">
            <Link href={routes.profile}>
              <CiUser size={24} />
            </Link>
          </Button>

          <LanguageSwitcher />
        </div>
      </div>

      <div className="w-full h-px bg-border" />

      <div className="flex items-center justify-start px-8 py-2">
        <DesktopMegaMenu />
      </div>
    </div>
  );
};

export default DesktopHeader;
