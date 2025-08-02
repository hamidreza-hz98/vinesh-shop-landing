import DesktopHeader from "./DesktopHeader";
import Link from "next/link";
import MobileHeader from "./MobileHeader";
import MobileNavbar from "./MobileNavbar";
import React from "react";
import routes from "@/constants/routes";

const Header = () => {
  return (
    <div className="w-full relative">
      <div className="w-full bg-primary flex items-center justify-center py-2 md:py-4">
        <Link href={routes.specialSales} className="text-primary-foreground">
          SPECIAL SALES
        </Link>
      </div>

      <DesktopHeader />
      <MobileHeader />
      <MobileNavbar />
    </div>
  );
};

export default Header;
