import Button from "@ui/Button";
import Gap from "@ui/Gap";

import { SuccessInfoProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function SuccessInfo({
  onAgree,
  successText,
}: SuccessInfoProps) {
  return (
    <Gap className={styles.container} direction="vertical">
      <h4>{successText}</h4>
      <Button onClick={onAgree}>ОК</Button>
    </Gap>
  );
}
