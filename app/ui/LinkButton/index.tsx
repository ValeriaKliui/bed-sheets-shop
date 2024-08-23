import Link from "next/link";

import { LinkButtonProps } from "./interfaces";
import styles from "./styled.module.scss";

export default function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <Link href={href}>
      <div className={styles.dot}>
        <h5>{children}</h5>
      </div>
    </Link>
  );
}
