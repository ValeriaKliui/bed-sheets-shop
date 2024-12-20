import { NETWORKS } from "@lib/constants";
import Gap from "@ui/Gap";
import Image from "next/image";

import styles from './styles.module.scss'

export default function Networks() {
  return (
    <Gap size="medium" >
      {NETWORKS.map(({ icon, link }) => (
        <a href={link} target="_blank" key={link} className={styles.container}>
          <Image src={icon} alt={link}  />
        </a>
      ))}
    </Gap>
  );
}
