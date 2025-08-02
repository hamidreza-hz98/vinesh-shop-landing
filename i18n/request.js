import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  return {
    locales: ["en", "fa", "pt", "ar"],
    defaultLocale: "en",
    locale: "en",
  };
});
