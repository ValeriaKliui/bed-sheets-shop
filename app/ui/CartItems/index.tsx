import CartItem from "@ui/CartItem";

import { CartItemsProps } from "./interfaces";

export default function CartItems({ cartItems }: CartItemsProps) {
  const cartItemsWithDiffSizes = cartItems?.map(
    ({ id, amount, ...cartItem }) => {
      if (typeof amount === "number")
        return <CartItem key={id} id={id} amount={amount} {...cartItem} />;
      else
        return amount?.map(({ size, amount }) => (
          <CartItem
            key={id}
            id={id}
            amount={amount}
            size={size}
            {...cartItem}
          />
        ));
    }
  );

  return <>{cartItemsWithDiffSizes}</>;
}
