import clsx from "clsx";
import { forwardRef } from "react";

import { GapProps } from "./interfaces";
import styles from "./styles.module.scss";

const Gap = forwardRef<HTMLDivElement, GapProps>(
  (
    {
      children,
      size = "small",
      direction = "horizontal",
      justifyContent = "normal",
      className,
      wrap = false,
      onClick,
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
        style={{
          justifyContent,
          flexWrap: wrap ? "wrap" : "nowrap",
        }}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

Gap.displayName = "Gap";

export default Gap;
