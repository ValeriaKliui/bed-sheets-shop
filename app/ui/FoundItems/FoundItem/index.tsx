import getMatchedPart from "@lib/utils/getMatchedPart";
import Gap from "@ui/Gap";
import Image from "next/image";

import { FoundItemProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function FoundItem({ title, photo, search }: FoundItemProps) {
  const { match, startWord, endWord } = getMatchedPart(title, search);

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
      <Gap direction="vertical" alignItems="flex-start">
        <div className={styles.titleContainer}>
          <p>{startWord}</p>
          <mark> {match}</mark>
          <p>{endWord}</p>
        </div>

        <p>
          Mollen – магазин нижнего белья, который скоро откроется и начнет
          продавать постельное белье.
        </p>
      </Gap>
    </Gap>
  );
}
