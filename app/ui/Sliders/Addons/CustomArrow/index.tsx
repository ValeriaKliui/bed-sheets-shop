import colors from "@lib/styles/variables.module.scss";
import CircledIcon from "@ui/CircledIcon";
import clsx from "clsx";

import { CustomArrowProps, Direction } from "./interfaces";
import styles from "./styles.module.scss";

const { lines } = colors;

const getClassNameFromDirection = (direction: Direction) => {
  return styles[direction];
};

export default function CustomArrow({
  onClick,
  className,
  direction,
}: CustomArrowProps) {
  return (
    <CircledIcon
      alt="move slider"
      src="/icons/arrow.svg"
      onClick={onClick}
      className={className}
      imgClassName={clsx(getClassNameFromDirection(direction))}
      borderColor={lines}
    />
  );
}
