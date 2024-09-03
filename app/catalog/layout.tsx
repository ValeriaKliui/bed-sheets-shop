import clsx from "clsx";

import { LayoutProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Layout({ children, filters }: LayoutProps) {
  return (
    <>
      <div className={clsx(styles.layout, "wrapper")}>
        {filters}
        {children}
      </div>
    </>
  );
}
