import ButtonPlusMinus from "@ui/ButtonPlusMinus";
import Gap from "@ui/Gap";
import clsx from "clsx";

import { ButtonCartProps } from "./interface";
import styles from "./styles.module.scss";

export default function ButtonCart({
  children,
  amountInCart,
  onIncreaseClick,
  onDecreaseClick,
  className,
}: ButtonCartProps) {
  return (
    <Gap
      className={clsx(styles.container, className)}
      justifyContent={"center"}
    >
      {amountInCart ? (
        <ButtonPlusMinus
          onMinusClick={onDecreaseClick}
          onPlusClick={onIncreaseClick}
          amount={amountInCart}
        />
      ) : (
        false
      )}

      <button className="buttons" type="submit">
        {children}
      </button>
    </Gap>
  );
}
