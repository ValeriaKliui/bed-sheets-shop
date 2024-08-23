import clsx from "clsx";

import { GapProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Gap({
  children,
  size,
  alignment = "center",
  direction = "horizontal",
  justify = false,
}: GapProps) {
  const alignmentEnd = direction === "horizontal" ? alignment : "normal";

  return (
    <div
      className={clsx(styles.gap, styles[size], styles[direction])}
      style={{
        alignItems: alignmentEnd,
        justifyContent: justify ? "space-between" : "normal",
      }}
    >
      {children}
    </div>
  );
}
