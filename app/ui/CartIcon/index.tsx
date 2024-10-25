import CircledIcon from "@ui/CircledIcon";
import colors from "@variables.module.scss";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";

const { primary } = colors;

const getTotalAmount = () => {
  if (typeof localStorage != "undefined") {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const cartInfo = JSON.parse(savedCart) as { [key: string]: number };
      const cartValues = Object.values(cartInfo);
      return cartValues.reduce((acc: number, curr: number) => acc + curr, 0);
    }
  }
  return 0;
};

export default function CartIcon() {
  const [totalAmount, setTotalAmount] = useState(getTotalAmount());

  useEffect(() => {
    window.addEventListener("storage", () => {
      setTotalAmount(getTotalAmount());
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
