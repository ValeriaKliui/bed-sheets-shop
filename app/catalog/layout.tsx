import SidebarFilters from "@ui/SidebarFilters";
import Slider from "@ui/Slider";

import styles from "./styles.module.scss";

export default function Layout({ children }) {
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
