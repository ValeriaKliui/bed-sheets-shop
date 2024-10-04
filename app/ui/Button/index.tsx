import clsx from "clsx";
import Link from "next/link";

import { ButtonProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Button({
  children,
  href,
  className,
  ...props
}: ButtonProps) {
  const Button = (
    <button {...props} className={clsx(styles.button, className)}>
      {children}
    </button>
  );

  if (href) return <Link href={href}>{Button}</Link>;

  return Button;
}
