import DotsLinks from "@ui/DotsLinks";
import Image from "next/image";

import styles from "./styles.module.scss";

export default function PhotoScreen() {
  return (
    <div>
      <Image
        src="/images/big_screen.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto", objectFit: "contain" }}
        alt="preview photo"
        className={styles.photo}
        useMap="click-area"
      />
      <DotsLinks />
    </div>
  );
}
