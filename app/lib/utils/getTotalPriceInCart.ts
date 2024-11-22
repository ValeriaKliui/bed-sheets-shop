import { CartItemFull } from "@lib/redux/features/cart/interfaces";

import sumObjectParam from "./sumObjectParam";

export default function getTotalPriceInCart(cartItemsFull: CartItemFull[]) {
  return cartItemsFull.reduce((sum, { amount = 0, price }) => {
    const priceNum = Number(price);
    if (typeof amount === "number") {
      return sum + amount * priceNum;
    } else {
      const itemAmount = sumObjectParam(amount, "amount");
      return sum + itemAmount * priceNum;
    }
  }, 0);
}
