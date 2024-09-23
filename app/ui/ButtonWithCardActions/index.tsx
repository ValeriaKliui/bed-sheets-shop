"use client";

import useCard from "@hooks/useCard";
import { CatalogItem } from "@lib/constants/types";
import ButtonCard from "@ui/ButtonCard";

export default function ButtonWithCardActions({ id }: Pick<CatalogItem, "id">) {
  const { onIncreaseInCard, getAmountInCard, onDecreaseInCard } = useCard();

  const onIncreaseClick = () => onIncreaseInCard(id);
  const onDecreaseClick = () => onDecreaseInCard(id);

  return (
    <ButtonCard
      onIncreaseClick={onIncreaseClick}
      onDecreaseClick={onDecreaseClick}
      amountInCard={getAmountInCard(id)}
    >
      в корзину
    </ButtonCard>
  );
}
