import SidebarFilters from "@ui/SidebarFilters";
import Slider from "@ui/Slider";
import { PropsWithChildren } from "react";

import styles from "./styles.module.scss";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Slider />
      <div className={styles.layout}>
        <SidebarFilters />
        {children}
      </div>
    </>
  );
}
