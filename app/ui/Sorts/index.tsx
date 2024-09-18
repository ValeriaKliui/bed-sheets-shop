import Gap from "@ui/Gap";

import Availibility from "./Availability";
import ByDirection from "./ByDirection";
import styles from "./styles.module.scss";

export default function Sorts() {
  return (
    <Gap justify className={styles.container}>
      <ByDirection title="по цене" value="price" />
      <Availibility />
    </Gap>
  );
}
