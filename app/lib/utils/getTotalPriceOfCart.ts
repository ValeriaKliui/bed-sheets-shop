import { CartItemFull } from '@lib/redux/features/cart/interfaces';

import formatPrice from './formatPrice';

export default function getTotalPriceOfCart(
  cartItemsFull: CartItemFull[]
) {
  if (cartItemsFull.length === 0 || !cartItemsFull) return 0;

  return formatPrice(
    cartItemsFull.reduce((sum, { amount = 0, price }) => {
      return sum + amount * Number(price);
    }, 0)
  );
}
