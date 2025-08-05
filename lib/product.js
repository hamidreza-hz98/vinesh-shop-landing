export const calculateDiscountedPrice = (price, discount) => {
  const numericPrice = Number(price.replace(/[^\d.-]/g, ''));

  return numericPrice - (numericPrice * (discount/100))
}