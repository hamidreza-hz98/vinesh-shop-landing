"use client"

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import React from "react";
import { useLocale } from "next-intl";
import { getLocaleDirection } from "@/lib/locale";

export default function Breadcrumbs({ items = [] }) {
  const locale = useLocale()
  const dir = getLocaleDirection(locale)
  
  return (
    <nav className="flex items-center text-sm overflow-x-auto overflow-y-hidden whitespace-nowrap">
      <ul className="flex items-center space-x-1 min-w-max">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index !== 0 && (
              <li className="text-textSecondary">
                {
                  dir === "ltr" ?
                  <BiChevronRight size={18} />
                  :<BiChevronLeft size={18} />
                }
              </li>
            )}
            <li>
              {item.link ? (
                <Link
                href={item.link}
                className="text-textSecondary hover:underline"
                >
                  {item.label[locale]}
                </Link>
              ) : (
                <span className="text-textMain font-semibold">
                  {item.label[locale]}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}
