import Link from "next/link";

import { DotProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Dot({ title, x, y, url }: DotProps) {
  return (
    <div className={styles.dot_item} style={{ top: y, left: x }}>
      <div className={styles.dot_container}>
        <div className={styles.dot} />
      </div>
      <Link href={url}>
        <h4 className={styles.title}>{title}</h4>
      </Link>
    </div>
  );
}
