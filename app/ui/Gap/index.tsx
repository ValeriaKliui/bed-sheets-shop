import clsx from "clsx";
import styles from "./styles.module.scss";
import { GapProps } from "./interfaces";

export default function Gap({ children, size }: GapProps) {
  return <div className={clsx(styles.gap, styles[size])}>{children}</div>;
}
