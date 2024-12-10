"use client";

import useCart from "@hooks/useCart";
import ButtonCart from "@ui/ButtonCart";
import NoSSR from "@ui/NoSSR";
import clsx from "clsx";

import { ButtonWithCartActionsProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function ButtonWithCartActions({
  id,
  className,
  isDisabled,
  additionalProperties,
}: ButtonWithCartActionsProps) {
  const { getItemAmountInCart, addToCart, removeFromCart } = useCart();

  const onIncreaseClick = () =>
    !isDisabled && addToCart({ id, additionalProperties });
  const onDecreaseClick = () =>
    !isDisabled && removeFromCart({ id, additionalProperties });

  const amountInCart = getItemAmountInCart({ id, additionalProperties });

  return (
    <NoSSR>
      <ButtonCart
        onIncreaseClick={onIncreaseClick}
        onDecreaseClick={onDecreaseClick}
        amountInCart={amountInCart}
        className={clsx(className, isDisabled && styles.disabled)}
      >
        в корзину
      </ButtonCart>
    </NoSSR>
  );
}
