import Loader from "@ui/Loader";

import CardBase from "../CardBase";
import styles from "./styles.module.scss";

export default function CardSkeleton() {
  return (
    <CardBase>
      <div className={styles.skeleton}>
        <Loader />
      </div>
    </CardBase>
  );
}
