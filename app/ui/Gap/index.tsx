import clsx from "clsx";

import { GapProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Gap({
  children,
  size,
  alignment = "center",
  direction = "horizontal",
}: GapProps) {
  const alignmentEnd = direction ? "normal" : alignment;

  return (
    <div
      className={clsx(styles.gap, styles[size], styles[direction])}
      style={{ alignItems: alignmentEnd }}
    >
      {children}
    </div>
  );
}
