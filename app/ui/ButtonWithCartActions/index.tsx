"use client";

import useCart from "@hooks/useCart";
import ButtonCart from "@ui/ButtonCart";
import NoSSR from "@ui/NoSSR";

import { ButtonWithCartActionsProps } from "./interfaces";

export default function ButtonWithCartActions({
  id,
  className,
  size,
  isDisabled,
}: ButtonWithCartActionsProps) {
  const { getAmountInCartByParams, addToCart, removeFromCart } = useCart();

  const onIncreaseClick = () => !isDisabled && addToCart(id, size);
  const onDecreaseClick = () => !isDisabled && removeFromCart(id, size);

  const amountInCart = getAmountInCartByParams(id, { size });

  return (
    <NoSSR>
      <ButtonCart
        onIncreaseClick={onIncreaseClick}
        onDecreaseClick={onDecreaseClick}
        amountInCart={amountInCart}
        className={className}
      >
        в корзину
      </ButtonCart>
    </NoSSR>
  );
}
