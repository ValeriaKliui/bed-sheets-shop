"use client";

import clsx from "clsx";

import { ButtonWithIndicatorProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function ButtonWithIndicator({
  children,
  onClick,
  isPressed,
}: ButtonWithIndicatorProps) {
  const togglePressed = () => {
    onClick();
  };

  return (
    <button
      onClick={togglePressed}
      className={clsx(isPressed && "text_primary", styles.button)}
    >
      <span className={clsx(styles.dot, isPressed && styles.active)}></span>
      {children}
    </button>
  );
}
