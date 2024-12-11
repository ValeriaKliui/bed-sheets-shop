import Gap from "@ui/Gap";
import clsx from "clsx";
import Image from "next/image";

import { SearchedItemProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function SearchedItem({ title, photo }: SearchedItemProps) {
  return (
    <Gap className={clsx(styles.container)}>
      <Image
        src={photo}
        width={0}
        height={0}
        alt={title}
        sizes="100vw"
        className={styles.image}
      />
      <Gap direction="vertical" alignItems="flex-start" size="medium">
        <p className={styles.title}>{title}</p>
        <p>
          Mollen – магазин нижнего белья, который скоро откроется и начнет
          продавать постельное белье.
        </p>
      </Gap>
    </Gap>
  );
}
