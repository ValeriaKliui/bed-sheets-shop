import clsx from "clsx";

import { CustomDotProps } from "./interaces";
import styles from "./styles.module.scss";

export default function CustomDot({
  onClick,
  active,
  index = 0,
  items,
}: CustomDotProps) {
  if (!items?.length) return false;
  return (
    <div
      className={clsx(styles.dot, active && styles.active)}
      onClick={() => onClick?.()}
    >
      {items[index]}
    </div>
  );
}
