"use client";

import { useAppSelector } from "@hooks/hooks";
import { selectFullCartItems } from "@lib/redux/features/cart/cartSelectors";
import CartItems from "@ui/CartItems";
import Gap from "@ui/Gap";

import CartHeader from "./CartHeader";

export default function CartInfo() {
  const cartItemsFull = useAppSelector(selectFullCartItems);

  return (
    <>
      <CartHeader />
      <Gap direction="vertical" size="large">
        <CartItems cartItems={cartItemsFull} />
      </Gap>
      {/*
          <CartItems cartItems={cartItems} />
        */}
    </>
  );
}
