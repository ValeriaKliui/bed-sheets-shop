import CircledIcon from "@ui/CircledIcon";
import colors from "@variables.module.scss";
import clsx from "clsx";

import { CustomArrowProps } from "./interfaces";
import styles from "./styles.module.scss";

const { lines } = colors;

export default function CustomArrowBottom({
  onClick,
  direction,
}: CustomArrowProps) {
  return (
    <CircledIcon
      alt="move slider"
      src="/icons/arrow.svg"
      onClick={onClick}
      imgClassName={clsx(
        styles.arrow,
        direction === "right" ? styles.rightArrow : styles.leftArrow
      )}
      borderColor={lines}
    />
  );
}
