import Gap from "@ui/Gap";
import Image from "next/image";

import { CartItemI } from "./interfaces";
import styles from "./styles.module.scss";

export default function CartItem({ cartInfo, photo, title }: CartItemI) {
  return (
    <Gap justifyContent="space-between" className={styles.container}>
      <Gap size="medium">
        <Image src={photo} width={280} height={150} alt={title} />
        <h4> {title}</h4>
      </Gap>

      {cartInfo.toString()}
    </Gap>
  );
}
