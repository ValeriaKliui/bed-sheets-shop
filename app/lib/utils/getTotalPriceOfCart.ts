import { CartItemFull } from '@lib/redux/features/cart/interfaces';

import formatPrice from './formatPrice';

export default function getTotalPriceOfCart(
  cartItemsFull: CartItemFull[]
) {
  return formatPrice(
    cartItemsFull.reduce((sum, { amount = 0, price }) => {
      return sum + amount * Number(price);
    }, 0)
  );
}
