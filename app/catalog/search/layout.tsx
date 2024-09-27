import Breadcrumbs from "@ui/Breadcrumbs";
import Gap from "@ui/Gap";
import clsx from "clsx";

import styles from "./styles.module.scss";

export default function Layout({ children }) {
  return (
    <main className={clsx("wrapper", styles.layout)}>
      <Gap direction="vertical" size="medium">
        <Breadcrumbs />
        {children}
      </Gap>
    </main>
  );
}
