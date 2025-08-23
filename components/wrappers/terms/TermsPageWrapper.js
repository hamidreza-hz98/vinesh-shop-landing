"use client";

import Container from "@/components/common/Container";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const TermsPageWrapper = () => {
  const t = useTranslations();

  return (
    <Container>
      <div className="flex items-center justify-start gap-4">
        <Image
          src="/images/placeholder.svg"
          width={128}
          height={128}
          alt=""
          className="object-cover"
        />

        <h1 className="text-2xl font-bold"> {t("lorem_word")} </h1>
      </div>

      <p className="mt-8"> {t("lorem_text")} </p>

      {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
        <Accordion className="mt-8" key={index}>
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <span> {t("lorem_sentence")} </span>
          </AccordionSummary>

          <AccordionDetails>{t("lorem_text")}</AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default TermsPageWrapper;
