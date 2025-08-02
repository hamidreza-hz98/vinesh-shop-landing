"use client";

import { useEffect, useRef, useState } from "react";

export default function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const flags = {
    en: "/images/flags/us.png",
    pt: "/images/flags/pt.png",
    ar: "/images/flags/ae.png",
    fa: "/images/flags/ir.png",
  };

  const languages = {
    en: "English",
    pt: "Português",
    ar: "العربية",
    fa: "فارسی",
  };

  useEffect(() => {
  if (typeof window !== "undefined") {
      const pathParts = window.location.pathname.split("/");
      const locale = pathParts[1];
      if (["en", "fa", "ar", "pt"].includes(locale)) {
        setCurrentLocale(locale);
      }
    }
  } , [])

const handleLanguageChange = (newLocale) => {
   if (typeof window !== "undefined") {
      const pathParts = window.location.pathname.split("/");

      if (["en", "fa", "ar", "pt"].includes(pathParts[1])) {
        pathParts[1] = newLocale;
      } else {
        pathParts.unshift("", newLocale);
      }

      const newPath = pathParts.join("/");
      window.location.href = newPath;
    }

    setCurrentLocale(newLocale);
    setIsOpen(false);
};

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="flex items-center justify-end">

      <button
        onClick={toggleDropdown}
        className="w-6 h-6 rounded-full flex items-center justify-center focus:outline-none"
        aria-label="Select Language"
        >
        <img
          src={flags[currentLocale]}
          alt={languages[currentLocale]}
          className="w-6 h-6 rounded-full"
          />
      </button>
          </div>

      {isOpen && (
        <ul className="absolute mt-2 w-36 border border-border bg-background rounded-2xl shadow-lg z-10 end-0">
          {Object.keys(flags).map((key) => (
            <li
              key={key}
              onClick={() => handleLanguageChange(key)}
              className="flex items-center gap-2 p-2 cursor-pointer hover:rounded-lg hover:bg-muted"
            >
              <img
                src={flags[key]}
                alt={languages[key]}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-foreground text-sm">{languages[key]}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
