"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";

const timeSlots = [
  { start: 8, end: 10 },
  { start: 10, end: 12 },
  { start: 12, end: 14 },
  { start: 14, end: 16 },
  { start: 16, end: 18 },
  { start: 18, end: 20 },
  { start: 20, end: 22 },
];

const translations = {
  en: (s, e) => `${s}:00 - ${e}:00`,
  pt: (s, e) => `${s}:00 - ${e}:00`,
  ar: (s, e) => `${s}:00 - ${e}:00`,
  fa: (s, e) => `${s}:00 - ${e}:00`,
};

const TimeSelector = ({ onSelect }) => {
  const locale = useLocale();
  const [selected, setSelected] = useState(null);

  const handleSelect = (slot) => {
    setSelected(slot);
    onSelect(slot);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
      {timeSlots.map((slot, idx) => {
        const label = translations[locale]
          ? translations[locale](slot.start, slot.end)
          : translations["en"](slot.start, slot.end);

        return (
          <button
            key={idx}
            type="button"
            onClick={() => handleSelect(label)}
            className={`w-full h-16 flex items-center justify-center rounded-lg border transition-all
              ${selected === label
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-gray-400"
              }`}
          >
            <span className="text-sm font-medium">{label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default TimeSelector;
