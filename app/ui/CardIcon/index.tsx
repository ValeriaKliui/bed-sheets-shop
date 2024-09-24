import CircledIcon from "@ui/CircledIcon";
import colors from "@variables.module.scss";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";

const { primary } = colors;

export default function CardIcon() {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    window.addEventListener("storage", () => {
      const savedCard = window.localStorage.getItem("card");
      if (savedCard) {
        const cardInfo = JSON.parse(savedCard) as { [key: string]: number };

        setTotalAmount(() => {
          const cardValues = Object.values(cardInfo);

          return cardValues.reduce(
            (acc: number, curr: number) => acc + curr,
            0
          );
        });
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <CircledIcon
        src="/icons/bag.svg"
        alt={"To shopping cart"}
        color={primary}
      />
      <div className={styles.amount}>
        <p>{totalAmount}</p>
      </div>
    </div>
  );
}
