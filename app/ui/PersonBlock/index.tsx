import clsx from "clsx";
import Image from "next/image";

import { PersonBlockProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function PersonBlock({ src, title, text }: PersonBlockProps) {
  return (
    <div className={styles.container}>
      <Image
        src={src}
        width={0}
        height={0}
        sizes="100vw"
        className={styles.image}
        alt={""}
      />
      <h3 className={styles.title}> {title}</h3>
      <p className={clsx("text_secondary", styles.text)}>{text}</p>
    </div>
  );
}
