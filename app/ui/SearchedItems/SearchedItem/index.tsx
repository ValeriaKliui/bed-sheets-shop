import Gap from "@ui/Gap";
import Image from "next/image";

import { SearchedItemProps } from "./interfaces";
import styles from "./styles.module.scss";
import clsx from "clsx";

export default function SearchedItem({
  title,
  photo,
  article,
}: SearchedItemProps) {
  return (
    <Gap className={clsx(styles.container,)}>
      <Image src={photo} width={0} height={0} alt={title} sizes="100vw" className={styles.image} />
      <Gap direction="vertical" alignItems="flex-start" className={styles.gap} >
        <h3 className={styles.title}>{title}</h3>
        <p className={clsx("text_secondary", styles.article)}>    {article}</p>
        <p>
          Mollen – магазин нижнего белья, который скоро откроется и начнет
          продавать постельное белье.
        </p>
      </Gap>
    </Gap>
  );
}
