import { useCallback, useEffect, useState } from "react";

const getInitialCard = () => {
  const savedCard = localStorage.getItem("card");
  if (savedCard) return JSON.parse(savedCard);
};

export default function useCard() {
  const [cardInfo, setCardInfo] = useState<null | { [key: string]: number }>(
    {}
  );

  useEffect(() => {
    setCardInfo(getInitialCard());
  }, []);

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

  const getAmountInCard = (id: string) => {
    const itemInCardAmount = cardInfo?.[id] ?? 0;

    return itemInCardAmount;
  };

  return { onIncreaseInCard, getAmountInCard, onDecreaseInCard };
}
