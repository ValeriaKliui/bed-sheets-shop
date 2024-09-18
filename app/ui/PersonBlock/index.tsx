import Gap from "@ui/Gap";
import Image from "next/image";

import { PersonBlockProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function PersonBlock({ src, title, text }: PersonBlockProps) {
  return (
    <Gap className={styles.container} size="large">
      <Image
        src={src}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "490px", height: "100%", objectFit: "cover" }}
        alt={""}
      />
      <div style={{ maxWidth: "400px" }}>
        <h3> {title}</h3>
        <p className="text_secondary">{text}</p>
      </div>
    </Gap>
  );
}
