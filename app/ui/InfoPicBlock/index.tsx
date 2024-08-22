import clsx from "clsx";
import { InfoPicBlockProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function InfoPicBlock({
  children,
  isReverted = false,
}: InfoPicBlockProps) {
  const image = isReverted && children ? children[0] : children[1];
  const info = isReverted ? children[1] : children[0];

  return (
    <div className={clsx(styles.container, "wrapper")}>
      <>{info}</>
      <>{image}</>
    </div>
  );
}
