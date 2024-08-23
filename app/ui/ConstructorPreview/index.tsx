import Button from "@ui/Button";
import LinkButton from "@ui/LinkButton";
import clsx from "clsx";
import Image from "next/image";

import styles from "./styles.module.scss";

export default function ConstructorPreview() {
  return (
    <div className={styles.container}>
      <h2 className={clsx("text_light", styles.title)}>
        Собери свой комплект на конструкторе
      </h2>
      <Image
        src="/images/bed.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt="complect constructor"
      />
      <div className={styles.button}>
        <LinkButton href={""}>собрать</LinkButton>
      </div>
    </div>
  );
}
