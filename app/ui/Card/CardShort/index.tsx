import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { CardShortProps } from "../interfaces";
import stylesOfCard from "../styles.module.scss";
import styles from "./styles.module.scss";

export default function CardShort({
  photo,
  title,
  category,
  id,
}: CardShortProps) {
  return (
    <Link href={`/catalog/${category}/${id}`} key={id}>
      <div className={clsx(styles.card, stylesOfCard.container)}>
        <Image
          src={photo}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <p className={styles.title}>{title}</p>
      </div>
    </Link>
  );
}
