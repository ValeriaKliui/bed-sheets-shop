"use client";

import useCard from "@hooks/useCard";
import ButtonCard from "@ui/ButtonCard";

import { ButtonWithCardActionsProps } from "./interfaces";

export default function ButtonWithCardActions({
  id,
  className,
}: ButtonWithCardActionsProps) {
  const { onIncreaseInCard, getAmountInCard, onDecreaseInCard } = useCard();

  const onIncreaseClick = () => onIncreaseInCard(id);
  const onDecreaseClick = () => onDecreaseInCard(id);

  return (
    <ButtonCard
      onIncreaseClick={onIncreaseClick}
      onDecreaseClick={onDecreaseClick}
      amountInCard={getAmountInCard(id)}
      className={className}
    >
      в корзину
    </ButtonCard>
  );
}
