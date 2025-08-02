"use client";

import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";

import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import { IoPhonePortraitOutline } from "react-icons/io5";
import Link from "next/link";
import { MdWifiCalling1 } from "react-icons/md";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-foreground text-background text-sm max-w-">
      <div className="max-w-6xl mx-auto justify-center mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8">
        <div className="text-center sm:text-start col-span-full lg:col-span-3">
          <Link
            href="/"
            className="flex items-center justify-center sm:justify-start gap-2"
          >
            <Image
              src="/images/placeholder.svg"
              width={0}
              height={0}
              sizes="100vw"
              alt="Logo"
              className="w-16 h-auto object-contain"
            />

            <h2 className="text-xl mt-2 font-semibold">{t("vinesh_shop")} </h2>
          </Link>
          <p className="mt-4 text-background leading-relaxed">
            {t("lorem_paragraph")}
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-center sm:text-start mb-4">
            {t("lorem_word")}
          </h3>
          <ul className="space-y-2">
            <li className="text-center sm:text-start">
              <Link href="/" className="hover:text-card">
                {t("lorem_word")}
              </Link>
            </li>
            <li className="text-center sm:text-start">
              <Link href="/portfolio" className="hover:text-card">
                {t("lorem_word")}
              </Link>
            </li>
            <li className="text-center sm:text-start">
              <Link href="/about" className="hover:text-card">
                {t("lorem_word")}
              </Link>
            </li>
            <li className="text-center sm:text-start">
              <Link href="/contact" className="hover:text-card">
                {t("lorem_word")}
              </Link>
            </li>
            <li className="text-center sm:text-start">
              <Link href="/terms" className="hover:text-card">
                {t("lorem_word")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-center sm:text-start mb-4">
            {t("lorem_word")}
          </h3>
          <ul className="space-y-2">
            <li className="text-center sm:text-start">
              <Link href="/products" className="hover:text-card">
                {t("lorem_word")}
              </Link>
            </li>
            {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
              <li key={index} className="text-center sm:text-start">
                <Link href={`/products?categories`} className="hover:text-card">
                  {t("lorem_word")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-center sm:text-start mb-4">
            {t("lorem_word")}
          </h3>
          <ul className="space-y-2">
            <li className="text-center sm:text-start">
              <Link href="/services" className="hover:text-card">
                {t("lorem_word")}
              </Link>
            </li>
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <li key={index} className="text-center sm:text-start">
                <Link href={`/services/`} className="hover:text-card">
                  {t("lorem_word")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-lg font-semibold text-center sm:text-start mb-4">
            {t("lorem_word")}
          </h3>
          <ul className="space-y-2 flex flex-col items-center justify-center md:justify-start md:items-start">
            <li className="flex items-center">
              <CiLocationOn size={20} className="me-2" />
              {t("lorem_word")}
            </li>

            <li className="text-center sm:text-start">
              <a href={`tel: `} className="flex items-center">
                <IoPhonePortraitOutline size={20} className="me-2" />
                {t("lorem_word")}
              </a>
            </li>

            <li className="text-center sm:text-start">
              <a href={`tel: `} className="flex items-center ">
                <IoPhonePortraitOutline size={20} className="me-2" />
                {t("lorem_word")}
              </a>
            </li>

            <li className="text-center sm:text-start">
              <a href={`tel: `} className="flex items-center ">
                <MdWifiCalling1 size={20} className="me-2" />
                {t("lorem_word")}
              </a>
            </li>

            <li className="text-center sm:text-start">
              <a
                href={null}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaInstagram size={20} className="me-2" />
                {t("lorem_word")}
              </a>
            </li>

            <li className="text-center sm:text-start">
              <a
                href={null}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaWhatsapp size={20} className="me-2" />
                {t("lorem_word")}
              </a>
            </li>

            <li className="text-center sm:text-start">
              <a
                href={null}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaTelegram size={20} className="me-2" />
                {t("lorem_word")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-muted-foreground text-center pb-16 pt-4 md:py-4">
        <p className="text-background text-center">
          &copy; {new Date().getFullYear()} {t("lorem_word")}
        </p>
      </div>
    </footer>
  );
}
