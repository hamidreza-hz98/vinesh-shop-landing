export const getLocaleDirection = (locale) => {
  if(locale === "fa" || locale === "ar"){
    return "rtl"
  }

  return "ltr"
}