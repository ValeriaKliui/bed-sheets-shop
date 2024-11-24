import Link from "next/link";

import { ButtonLinkProps } from "./interfaces";
import styles from "./styled.module.scss";

export default function ButtonLink({ children, href }: ButtonLinkProps) {
  return (
    <Link href={href}>
      <span className={styles.dot}>
        <h5>{children}</h5>
      </span>
    </Link>
  );
}
