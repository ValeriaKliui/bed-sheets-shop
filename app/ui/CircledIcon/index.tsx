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
  borderColor,
}: CircledIconProps) {
  return (
    <div
      className={clsx(styles.circled, className)}
      onClick={onClick}
      style={{ background: color }}
    >
      <Image
        src={src}
        width={20}
        height={20}
        alt={alt}
        className={clsx(imgClassName, borderColor && styles.bordered)}
        style={{ border: borderColor && `1px solid ${borderColor}` }}
      />
    </div>
  );
}
