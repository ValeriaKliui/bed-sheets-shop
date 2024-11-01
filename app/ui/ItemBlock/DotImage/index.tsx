import Image from "next/image";
import { DotImageProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function DotImage({ src }: DotImageProps) {
  return (
    <Image
      key={src}
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      alt=""
      className={styles.image}
    />
  );
}
