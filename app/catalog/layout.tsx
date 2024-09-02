import SidebarFilters from "@ui/SidebarFilters";
import clsx from "clsx";
import { PropsWithChildren } from "react";

import styles from "./styles.module.scss";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className={clsx(styles.layout, "wrapper")}>
        <SidebarFilters />
        {children}
      </div>
    </>
  );
}
