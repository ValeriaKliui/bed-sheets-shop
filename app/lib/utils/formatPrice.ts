import { CURRENCY } from '@lib/constants/catalogItems';

export default function formatPrice(price: number | string) {
  return `${Number(price).toFixed(1)} ${CURRENCY}`;
}
