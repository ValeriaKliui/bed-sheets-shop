import { CURRENCY } from "@lib/constants/catalogItems";
import Gap from "@ui/Gap";
import Image from "next/image";

import styles from "./styles.module.scss";

export default function FoundItem({ title, price, photo }) {
  return (
    <Gap className={styles.container}>
      <Image
        src={photo}
        alt={title}
        width={50}
        height={50}
        style={{ objectFit: "cover" }}
      />{" "}
      <p>{title}</p>
      <p>
        {price} {CURRENCY}
      </p>
    </Gap>
  );
}
