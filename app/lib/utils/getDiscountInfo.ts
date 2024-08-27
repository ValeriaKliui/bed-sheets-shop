import { CURRENCY } from "@lib/constants/catalogItems";

export const getDiscountInfo = (price: number) => {
  const priceWithDiscount = (price * 0.9).toFixed(1);

  const discountInfo = `>5 шт - ${priceWithDiscount} ${CURRENCY}/шт`;
  return discountInfo;
};
