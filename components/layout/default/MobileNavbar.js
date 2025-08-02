"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { mobileNavItems } from "@/constants/links";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const pathname = usePathname();
  const locale = useLocale()

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t shadow-sm md:hidden">
      <nav className="flex justify-between items-center h-14 px-2">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 px-3 py-1 text-xs",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Link href={item.href}>
                <Icon size={20} />
                <span>{item.label[locale]}</span>
              </Link>
            </Button>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileNavbar;
