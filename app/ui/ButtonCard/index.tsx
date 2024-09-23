import Gap from "@ui/Gap";
import { MouseEvent } from "react";

import { ButtonCardProps } from "./interface";
import styles from "./styles.module.scss";

export default function ButtonCard({
  children,
  amountInCard,
  onIncreaseClick,
  onDecreaseClick,
}: ButtonCardProps) {
  const onClick = (e?: MouseEvent<HTMLDivElement>) => e?.preventDefault();

  return (
    <Gap className={styles.container} justifyContent="center">
      {amountInCard ? (
        <Gap onClick={onClick} className={styles.container_buttons}>
          <button onClick={onDecreaseClick} className={styles.buttons}>
            -
          </button>
          <p className={styles.amount}> {amountInCard}</p>
          <button onClick={onIncreaseClick} className={styles.buttons}>
            +
          </button>
        </Gap>
      ) : (
        false
      )}

      <button className={styles.buttons}>{children}</button>
    </Gap>
  );
}
