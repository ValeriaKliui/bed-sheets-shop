import clsx from "clsx";
import { forwardRef } from "react";

import { GapProps } from "./interfaces";
import styles from "./styles.module.scss";

const Gap = forwardRef<HTMLDivElement, GapProps>(
  (
    {
      children,
      size = "small",
      // alignment = "center",
      direction = "horizontal",
      justify = false,
      className,
    },
    ref
  ) => {
    return (
      <div
        className={clsx(
          styles.gap,
          size && styles[size],
          styles[direction],
          className
        )}
        style={{ justifyContent: justify ? "space-between" : "normal" }}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

Gap.displayName = "Gap";

export default Gap;
