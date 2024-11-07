import formatPrice from './formatPrice';

export const getDiscountInfo = (price: number) => {
  const priceWithDiscount = price * 0.9;
  const priceFormatted = formatPrice(priceWithDiscount);

  const discountInfo = `>5 шт - ${priceFormatted}/шт`;
  return discountInfo;
};
