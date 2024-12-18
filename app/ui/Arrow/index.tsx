import colors from "@lib/styles/variables.module.scss";
import CircledIcon from "@ui/CircledIcon";
import clsx from "clsx";

import { CustomArrowProps, Direction } from "./interfaces";
import styles from "./styles.module.scss";

const { lines } = colors;

const getClassNameFromDirection = (direction: Direction) => {
  return styles[direction];
};

export default function Arrow({
  onClick,
  className,
  direction,
  imgClassName,
}: CustomArrowProps) {
  return (
    <CircledIcon
      alt="move slider"
      src="/icons/arrow.svg"
      onClick={onClick}
      className={className}
      imgClassName={clsx(getClassNameFromDirection(direction), imgClassName)}
      borderColor={lines}
    />
  );
}
