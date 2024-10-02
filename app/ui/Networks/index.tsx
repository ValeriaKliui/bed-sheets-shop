import { NETWORKS } from "@lib/constants";
import Gap from "@ui/Gap";
import clsx from "clsx";
import Image from "next/image";

import { NetworksProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Networks({ className }: NetworksProps) {
  return (
    <Gap size="medium" className={clsx(styles.links, className)}>
      {NETWORKS.map(({ icon, link }) => (
        <a href={link} target="_blank" key={link}>
          <Image src={icon} alt={link} key={link} />
        </a>
      ))}
    </Gap>
  );
}
