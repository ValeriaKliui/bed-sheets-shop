import Breadcrumbs from "@ui/Breadcrumbs";
import clsx from "clsx";

import { LayoutProps } from "../interfaces";
import styles from "./styles.module.scss";

export default function Layout({ filters, children }: LayoutProps) {
  return (
    <div className={clsx(styles.layout, "wrapper")}>
      {filters}
      <div>
        <Breadcrumbs />
        {children}
      </div>
    </div>
  );
}
