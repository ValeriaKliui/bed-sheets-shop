"use client";

import clsx from "clsx";

import { ButtonWithIndicatorProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function ButtonWithIndicator({
  children,
  onClick,
  isPressed,
}: ButtonWithIndicatorProps) {
  const togglePressed = () => onClick();

  return (
    <button onClick={togglePressed} className={clsx(styles.button)}>
      <span className={clsx(styles.dot, isPressed && styles.active)} />
      <span className={clsx(isPressed && "text_primary")}>{children}</span>
    </button>
  );
}
