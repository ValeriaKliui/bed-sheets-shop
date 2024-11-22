import { CURRENCY } from "@lib/constants/catalogItems";
import { CatalogItem } from "@lib/constants/types";
import Gap from "@ui/Gap";
import Image from "next/image";

import styles from "./styles.module.scss";

export default function FoundItem({
  title,
  price,
  photo,
}: Pick<CatalogItem, "title" | "photo" | "price">) {
  return (
    <Gap className={styles.container}>
      <Image
        src={photo}
        alt={title}
        width={0}
        height={0}
        className={styles.image}
        sizes="100vw"
      />
      <p>{title}</p>
      <p>
        {price} {CURRENCY}
      </p>
    </Gap>
  );
}
