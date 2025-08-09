"use client";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { setQuery } from "@/lib/url";
import { useTranslations } from "use-intl";


function Pagination({ totalItems, initialPage = 1, initialPageSize = 9 }) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize] = useState(initialPageSize);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations()

  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const pageQuery = setQuery(page, searchParams, "page");
    router.push(pathname + "?" + pageQuery);
  };

  const renderPages = () => {
    const pages = [];

    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push(2);

      if (currentPage <= 2) {
        pages.push("...");
      } else if (currentPage >= totalPages - 2) {
        pages.push("...");
        pages.push(totalPages - 2);
        pages.push(totalPages - 1);
      } else {
        pages.push("...");
        pages.push(currentPage);
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="flex items-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`text-primary ${currentPage === 1 && "hidden"}`}
          disabled={currentPage === 1}
        >
          {t("previous_page")}
        </button>

        {renderPages().map((page, index) =>
          page === "..." ? (
            <span key={index} className="px-2">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => handlePageChange(page)}
              className={`hover:bg-background hover:text-muted-foreground transition w-8 h-8 rounded ${
                currentPage === page ? "bg-muted-foreground text-background" : "border"
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`text-sm ${currentPage === totalPages && "hidden"}`}
          disabled={currentPage === totalPages}
        >
                   {t("next_page")}

        </button>
      </div>
    </div>
  );
}

export default Pagination;
