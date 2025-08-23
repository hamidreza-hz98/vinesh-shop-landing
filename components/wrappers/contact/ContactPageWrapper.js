"use client";

import Container from "@/components/common/Container";
import ContactForm from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import { contactInfoItems } from "@/constants/general";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const ContactPageWrapper = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <div className="col-span-full sm:col-span-5">
          <ContactForm />
        </div>

        <div className="col-span-full sm:col-span-3 flex flex-col items-start justify-start gap-4">
          {contactInfoItems.map((item, index) => (
            <Button className="w-full" key={index} asChild size="sm">
              <Link href={item.href} className="text-background">
                <item.icon />

                <span> {item.title[locale]} </span>
              </Link>
            </Button>
          ))}
        </div>

        <div className="col-span-full sm:col-span-4">
          <span> {t("address")}: </span>
          <div className="w-full mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d1361.8110240792323!2d51.378413185895056!3d35.727430520731616!3m2!1i1024!2i768!4f13.1!2m1!1s3rd%20St%20Tehran%20Province%20Tehran%20Iran!5e0!3m2!1sen!2sus!4v1742080907986!5m2!1sen!2sus"
              className="w-full h-auto min-h-72"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactPageWrapper;
