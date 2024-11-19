import { CartItemShort } from "@lib/redux/features/cart/interfaces";

import { getSortedAndStringifiedObject } from "./getSortedAndStringifiedObject";

export default function getSameItemInCart(
  cartItems: CartItemShort[],
  itemToCheck: CartItemShort
) {
  let currCartID = null;
  let amountInCart = 0;
  const sameIDItems = cartItems.filter(({ id }) => id === itemToCheck.id);

  const formattedSameIDs = sameIDItems.map(
    ({ cartID: _, amount: __, ...qualities }) => {
      return getSortedAndStringifiedObject({ ...qualities });
    }
  );

  const itemInCartStringified = formattedSameIDs.find(
    (item) => item === getSortedAndStringifiedObject(itemToCheck)
  );

  if (itemInCartStringified) {
    cartItems.find((cartItem) => {
      const { amount = 0, cartID, ...cartItemOnlyOptions } = cartItem;

      if (
        getSortedAndStringifiedObject(cartItemOnlyOptions) ===
        itemInCartStringified
      ) {
        currCartID = cartID;
        amountInCart = amount;
      }
    });
  }

  return {
    currCartID,
    itemInCartStringified,
    amountInCart,
  };
}
