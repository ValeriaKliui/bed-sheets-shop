import ButtonLink from "@ui/ButtonLink";
import clsx from "clsx";
import Image from "next/image";

import { ConstructorPreviewProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function ConstructorPreview({
  title,
  buttonLink,
  imageSrc,
}: ConstructorPreviewProps) {
  return (
    <div className={styles.container}>
      <h2 className={clsx("text_light", styles.title)}>{title}</h2>
      <Image
        src={imageSrc}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        alt="complect constructor"
        priority
      />
      {buttonLink && (
        <div className={styles.button}>
          <ButtonLink href={buttonLink}>собрать</ButtonLink>
        </div>
      )}
    </div>
  );
}
