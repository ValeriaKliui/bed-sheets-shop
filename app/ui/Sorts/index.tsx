import Gap from "@ui/Gap";
import { CSSProperties } from "react";

import Availibility from "./Availability";
import ByDirection from "./ByDirection";
import styles from "./styles.module.scss";

export default function Sorts() {
  return (
    <Gap
      justifyContent={"space-between" as CSSProperties}
      className={styles.container}
    >
      <ByDirection title="по цене" value="price" />
      <Availibility />
    </Gap>
  );
}
