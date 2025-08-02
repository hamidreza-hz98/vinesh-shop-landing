"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Image from "next/image";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import Link from "next/link";
import { SearchInput } from "@/components/forms/SearchInput";
import routes from "@/constants/routes";
import { useTranslations } from "next-intl";

const overlayVariants = {
  hidden: { opacity: 0, y: "-10%", transition: { duration: 0.25 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: "-10%", transition: { duration: 0.25 } },
};

const MobileHeader = () => {
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);
  const t = useTranslations();

  const handleOpenSearchbox = () => {
    setSearchBoxOpen(true);
  };

  const handleCloseSearchbox = () => {
    setSearchBoxOpen(false);
  };

  return (
    <div className="flex md:hidden relative z-50 shadow-lg shadow-border">
      <div className="w-full flex items-center justify-between p-2">
        <Link
          href={routes.home}
          className="rounded-full flex items-center justify-start gap-2"
        >
          <Image
            src="/images/placeholder.svg"
            width={36}
            height={36}
            alt="Logo"
            className="rounded-full"
          />
          <span className="text font-bold"> {t("vinesh_shop")} </span>
        </Link>

        <div className="flex items-center justify-end gap-2">
          <Button
            onClick={handleOpenSearchbox}
            variant="ghost"
            size="icon"
            className="size-8"
          >
            <HiMiniMagnifyingGlass />
          </Button>

          <Button asChild variant="ghost" size="icon" className="size-8">
            <Link href={routes.cart}>
              <CiShoppingCart />
            </Link>
          </Button>

          <Button asChild variant="ghost" size="icon" className="size-8">
            <Link href={routes.profile}>
              <CiUser />
            </Link>
          </Button>

          <LanguageSwitcher />
        </div>
      </div>

      <AnimatePresence>
        {searchBoxOpen && (
          <motion.div
            key="search-overlay"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            className="fixed top-0 left-0 w-full h-full z-[999] bg-white/95 backdrop-blur-lg flex flex-col items-center justify-start p-4"
          >
            <div className="flex w-full justify-between items-center mb-4">
              <span className="text-lg font-semibold">
                {t("header_search_title") || "Search"}
              </span>
              <Button variant="ghost" onClick={handleCloseSearchbox}>
                ✕
              </Button>
            </div>

            <SearchInput
              autoFocus
              placeholder={t("header_search_placeholder")}
              className="w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileHeader;
