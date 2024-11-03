"use client";

import useCart from "@hooks/useCart";
import ButtonCart from "@ui/ButtonCart";

import { ButtonWithCartActionsProps } from "./interfaces";

export default function ButtonWithCartActions({
  id,
  className,
}: ButtonWithCartActionsProps) {
  const { addToCart, getAmountInCart, onDecreaseInCart } = useCart();

  const onIncreaseClick = () => addToCart(id, 'xs');
  const onDecreaseClick = () => onDecreaseInCart(id);

  return (
    <ButtonCart
      onIncreaseClick={onIncreaseClick}
      onDecreaseClick={onDecreaseClick}
      amountInCart={getAmountInCart(id)}
      className={className}
    >
      в корзину
    </ButtonCart>
  );
}
