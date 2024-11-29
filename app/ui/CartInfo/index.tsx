"use client";

import { useAppSelector } from "@hooks/hooks";
import { selectFullCartItems } from "@lib/redux/features/cart/cartSelectors";
import CartItems from "@ui/CartItems";

import CartHeader from "./CartHeader";

export default function CartInfo() {
  const cartItemsFull = useAppSelector(selectFullCartItems);

  return (
    <>
      <CartHeader />
      <CartItems cartItems={cartItemsFull} />
    </>
  );
}
