import clsx from "clsx";
import { CSSProperties, forwardRef } from "react";

import { GapProps } from "./interfaces";
import styles from "./styles.module.scss";

const Gap = forwardRef<HTMLDivElement, GapProps>(
  (
    {
      children,
      size = "small",
      direction = "horizontal",
      justifyContent = "normal",
      alignItems = "center",
      className,
      wrap = false,
      onClick,
    },
    ref
  ) => {
    const style = {
      justifyContent,
      alignItems,
      flexWrap: wrap ? "wrap" : "nowrap",
    } as CSSProperties;

    return (
      <div
        className={clsx(
          styles.gap,
          size && styles[size],
          styles[direction],
          className
        )}
        style={style}
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
