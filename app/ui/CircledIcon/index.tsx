import clsx from "clsx";
import Image from "next/image";

import { CircledIconProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function CircledIcon({
  color = "transparent",
  src,
  alt,
  className,
  onClick,
  imgClassName,
}: CircledIconProps) {
  return (
    <div
      className={clsx(styles.circled, className)}
      style={{ background: color }}
      onClick={onClick}
    >
      <Image
        src={src}
        width={20}
        height={20}
        alt={alt}
        className={imgClassName}
      />
    </div>
  );
}
