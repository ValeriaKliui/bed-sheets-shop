import Gap from "@ui/Gap";
import clsx from "clsx";
import { MouseEvent } from "react";

import { ButtonCartProps } from "./interface";
import styles from "./styles.module.scss";

export default function ButtonCart({
  children,
  amountInCart,
  onIncreaseClick,
  onDecreaseClick,
  className,
}: ButtonCartProps) {
  const onClick = (e?: MouseEvent<HTMLDivElement>) => e?.preventDefault();

  return (
    <Gap
      className={clsx(styles.container, className)}
      justifyContent={"center"}
    >
      {amountInCart ? (
        <Gap onClick={onClick}>
          <button onClick={onDecreaseClick} className={styles.buttons}>
            -
          </button>
          <p className={styles.amount}> {amountInCart}</p>
          <button onClick={onIncreaseClick} className={styles.buttons}>
            +
          </button>
        </Gap>
      ) : (
        false
      )}

      <button className={styles.buttons} onClick={onIncreaseClick}>
        {children}
      </button>
    </Gap>
  );
}
