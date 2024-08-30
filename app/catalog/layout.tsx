import SidebarFilters from "@ui/SidebarFilters";
import Slider from "@ui/Slider";
import clsx from "clsx";
import { PropsWithChildren } from "react";

import styles from "./styles.module.scss";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Slider />
      <div className={clsx(styles.layout, "wrapper")}>
        <SidebarFilters />
        {children}
      </div>
    </>
  );
}
