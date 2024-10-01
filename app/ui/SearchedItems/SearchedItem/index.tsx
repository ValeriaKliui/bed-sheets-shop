import Gap from "@ui/Gap";
import Image from "next/image";

import { SearchedItemProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function SearchedItem({
  title,
  photo,
  article,
}: SearchedItemProps) {
  return (
    <div className={styles.container}>
      <Gap>
        <Image src={photo} width={300} height={190} alt={title} />
        <Gap direction="vertical">
          <h3>{title}</h3>
          {article}
          <p>
            Mollen – магазин нижнего белья, который скоро откроется и начнет
            продавать постельное белье.{" "}
          </p>
        </Gap>
      </Gap>
    </div>
  );
}
