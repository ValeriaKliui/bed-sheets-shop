import Image from "next/image";

import { ItemSliderCardProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function ItemSliderCard({ src }: ItemSliderCardProps) {
  return (
    <Image
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      className={styles.image}
      key={src}
      alt={""}
    />
  );
}
