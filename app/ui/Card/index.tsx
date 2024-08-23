import { CatalogItem } from "@lib/constants/types";
import clsx from "clsx";
import Image from "next/image";

import styles from "./styles.module.scss";
import { CardProps } from "./interfaces";
import Gap from "@ui/Gap";

export default function Card({
  article,
  info,
  photo,
  price,
  title,
  id,
  isShowcase,
  actionButton,
}: CardProps) {
  const articleShowed = isShowcase ? "" : article;
  const infoShowed = isShowcase ? "комплект" : info;

  return (
    <div className={styles.container}>
      <Gap justify>
        <div>
          <p className="text_small">{articleShowed}</p>
          <p className={clsx("text_small", styles.title)}>{infoShowed}</p>
        </div>
        {actionButton}
      </Gap>
      <Image src={photo} alt={title} width={20} height={20} />
      <p>{id}</p>
      <p>{price}</p>
    </div>
  );
}
