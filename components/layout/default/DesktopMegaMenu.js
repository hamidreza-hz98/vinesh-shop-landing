"use client";

import React, { useState } from "react";

import Link from "next/link";
import { categories } from "@/constants/category";
import { useLocale } from "next-intl";

const DesktopMegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const locale = useLocale();

  return (
      <ul className="flex gap-6">
        {categories.map((category) => (
          <li
            key={category.slug}
            className="relative group"
            onMouseEnter={() => setActiveCategory(category.slug)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <Link
              href={`/category/${category.slug}`}
              className="text-sm font-medium hover:text-muted-foreground transition"
            >
              {category.name[locale]}
            </Link>

            {activeCategory === category.slug &&
              category.subCategories?.length > 0 && (
                <div className="absolute left-0 top-[70%] bg-background w-screen max-w-2xl shadow-lg border-t mt-2 px-6 py-6 grid gap-6 z-50 animate-fadeIn">
                  {category.subCategories.map((sub) => (
                    <div key={sub.slug}>
                      <Link
                        href={`/category/${category.slug}/${sub.slug}`}
                        className="text-sm font-semibold text-gray-800 hover:text-muted-foreground transition"
                      >
                        {sub.name[locale]}
                      </Link>

                      {sub.subCategories?.length > 0 && (
                        <ul className="mt-2 space-y-1">
                          {sub.subCategories.map((child) => (
                            <li key={child.slug}>
                              <Link
                                href={`/category/${category.slug}/${sub.slug}/${child.slug}`}
                                className="text-sm text-gray-600 hover:text-muted-foreground transition"
                              >
                                {child.name[locale]}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
          </li>
        ))}
      </ul>
  );
};

export default DesktopMegaMenu;
