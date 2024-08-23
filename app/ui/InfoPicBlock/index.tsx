import clsx from "clsx";

import { InfoPicBlockProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function InfoPicBlock({ children }: InfoPicBlockProps) {
  const leftColumn = children[0];
  const rightColumn = children[1];

  return (
    <div className={clsx(styles.container, "wrapper")}>
      <>{leftColumn}</>
      <>{rightColumn}</>
    </div>
  );
}
