import Gap from "@ui/Gap";
import clsx from "clsx";
import { forwardRef } from "react";

import { CardBaseProps } from "./interfaces";
import styles from "./styles.module.scss";

const CardBase = forwardRef<HTMLDivElement, CardBaseProps>(
  ({ containerClassName, children }, ref) => {
    return (
      <Gap
        className={clsx(styles.container, containerClassName)}
        direction="vertical"
        justifyContent={"space-between"}
        ref={ref}
      >
        {children}
      </Gap>
    );
  }
);

CardBase.displayName = "CardBase";

export default CardBase;
