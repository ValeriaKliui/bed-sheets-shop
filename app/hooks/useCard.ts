import { useCallback, useEffect, useState } from "react";

import { CardInfo } from "./interfaces";

const getInitialCard = () => {
  const savedCard = localStorage.getItem("card");
  if (savedCard) return JSON.parse(savedCard);
};

export default function useCard() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({});

  useEffect(() => {
    setCardInfo(getInitialCard());
  }, []);

  useEffect(() => {
    window.dispatchEvent(
      new StorageEvent("storage", {
        key: "card",
        newValue: JSON.stringify(cardInfo),
      })
    );
  }, [cardInfo]);

  const onIncreaseInCard = useCallback(
    (clickedID: string) => {
      const itemInCardAmount = cardInfo?.[clickedID] ?? 0;

      setCardInfo((prev) => {
        const newCard = { ...prev, [clickedID]: itemInCardAmount + 1 };

        localStorage.setItem("card", JSON.stringify(newCard));

        return newCard;
      });
    },
    [cardInfo]
  );

  const onDecreaseInCard = useCallback(
    (id: string) => {
      const itemInCardAmount = cardInfo?.[id] ?? 0;
      if (itemInCardAmount)
        setCardInfo((prev) => {
          const newCard = { ...prev, [id]: itemInCardAmount - 1 };
          localStorage.setItem("card", JSON.stringify(newCard));
          return newCard;
        });
    },
    [cardInfo]
  );

  const getAmountInCard = useCallback(
    (id: string) => {
      const itemInCardAmount = cardInfo?.[id] ?? 0;

      return itemInCardAmount;
    },
    [cardInfo]
  );

  return { onIncreaseInCard, getAmountInCard, onDecreaseInCard, cardInfo };
}
