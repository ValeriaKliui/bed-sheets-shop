import clsx from "clsx";
import Image from "next/image";
import { ImgHTMLAttributes } from "react";

import { CircledIconProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function CircledIcon({
  color = "transparent",
  src,
  alt,
  className,
}: CircledIconProps) {
  return (
    <div
      className={clsx(styles.circled, className)}
      style={{ background: color }}
    >
      <Image src={src} width={20} height={20} alt={alt} />
    </div>
  );
}
