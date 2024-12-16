import Link from "next/link";

import { DotProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Dot({ title, x, y, url }: DotProps) {
  if (!y) return;

  return (
    <Link href={url} >
      <div className={styles.dot_item} style={{ top: y, left: x }}>
        <div className={styles.dot_container}>
          <div className={styles.dot} />
        </div>

        <h4 className={styles.title}>{title}</h4>
      </div>
    </Link>
  );
}
