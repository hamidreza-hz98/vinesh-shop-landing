"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { profileLinks } from "@/constants/links";

const ProfileSidebar = () => {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations();

  return (
    <>
      <div className="md:hidden w-full rounded-2xl flex items-center justify-between bg-gray-50 px-4 py-3 border-b sticky top-0 right-0 z-10">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md hover:bg-gray-200"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-lg font-semibold">Hi, Hamidreza!</h1>
        <div className="w-6" />
      </div>

      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-10"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 md:top-4 left-0 p-4 md:p-0 h-full w-60 md:w-[20%] bg-white border-r transition-transform transform z-50
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:sticky md:h-auto md:block
        `}
      >
        <h2 className="text-lg font-bold mb-6 hidden md:block">
          {" "}
          Hi, Hamidreza!{" "}
        </h2>
        <nav className="flex flex-col gap-4">
          {profileLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center justify-start gap-2 text-gray-700 hover:text-black"
              onClick={() => setOpen(false)}
            >
              <item.icon />
              {item.title[locale]}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default ProfileSidebar;
