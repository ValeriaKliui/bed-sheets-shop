import Link from "next/link";

import { ButtonProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Button({ children, href, ...props }: ButtonProps) {
  const Button = (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );

  if (href) return <Link href={href}>{Button}</Link>;

  return Button;
}
