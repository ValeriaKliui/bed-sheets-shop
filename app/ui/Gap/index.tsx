import clsx from "clsx";
import { forwardRef } from "react";

import { GapProps } from "./interfaces";
import styles from "./styles.module.scss";

const Gap = forwardRef<HTMLDivElement, GapProps>(
  (
    {
      children,
      size,
      alignment = "center",
      direction = "horizontal",
      justify = false,
      className,
    },
    ref
  ) => {
    const alignmentEnd = direction === "horizontal" ? alignment : "normal";

    return (
      <div
        className={clsx(
          styles.gap,
          size && styles[size],
          styles[direction],
          className
        )}
        style={{
          alignItems: alignmentEnd,
          justifyContent: justify ? "space-between" : "normal",
        }}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

Gap.displayName = "Gap";

export default Gap;
