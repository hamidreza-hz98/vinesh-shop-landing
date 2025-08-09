"use client";

import Banner from "@/components/common/Banner";
import CollapsibleTextBox from "@/components/common/CollapsibleTextBox";
import Container from "@/components/common/Container";
import { categories } from "@/constants/category";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const CategoryDetailsPageWrapper = ({ slug }) => {
  const [category, setCategory] = useState(null);
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    const cat = categories.find((c) => c.slug === slug) || null;

    setCategory(cat);
  }, [slug]);

  console.log(category);

  return (
    <Container>
      <h1 className="text-2xl font-bold text-center">
        {" "}
        {category.name[locale]}{" "}
      </h1>

      <div className="grid grid-cols-4 gap-8 mt-8">
        {[0, 1].map((_, index) => (
          <div key={index} className="col-span-2">
            <Banner
              src="/images/placeholder.svg"
              alt="image"
              className="max-h-72 object-cover"
            />
          </div>
        ))}

        {[0, 1, 2, 3].map((_, index) => (
          <div key={index} className="col-span-1">
            <Banner
              src="/images/placeholder.svg"
              alt="image"
              className="max-h-72 object-cover"
            />
          </div>
        ))}

        {[0].map((_, index) => (
          <div key={index} className="col-span-full">
            <Banner
              src="/images/placeholder.svg"
              alt="image"
              className="max-h-72 object-cover"
            />
          </div>
        ))}

        <div className="col-span-full">
          <CollapsibleTextBox text={t("lorem_text")} />
        </div>
      </div>
    </Container>
  );
};

export default CategoryDetailsPageWrapper;
