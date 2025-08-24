"use client";

import { useTranslations } from "next-intl";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const ShareBox = ({ url, title }) => {
  const t = useTranslations();

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
  };

  return (
    <div className="mt-12 border-t border-border pt-6 flex flex-col items-start sm:flex-row sm:items-center justify-start gap-4">
      <h3 className="text-lg font-semiboldtext-foreground">
        {t("share_this_article")}:
      </h3>

      <div className="flex gap-3">
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors"
        >
          <FaFacebookF className="text-blue-600" />
        </a>

        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors"
        >
          <FaTwitter className="text-sky-500" />
        </a>

        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors"
        >
          <FaLinkedinIn className="text-blue-700" />
        </a>

        <a
          href={shareLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors"
        >
          <FaTelegramPlane className="text-sky-600" />
        </a>

        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors"
        >
          <FaWhatsapp className="text-green-600" />
        </a>
      </div>
    </div>
  );
};

export default ShareBox;
