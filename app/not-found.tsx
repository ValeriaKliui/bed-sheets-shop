import Button from "@ui/Button";
import Gap from "@ui/Gap";
import clsx from "clsx";
import Image from "next/image";

import styles from "@lib/styles/not-found.module.scss";

export default function NotFound() {
  return (
    <div className={clsx(styles.container)}>
      <Image
        src={"/images/not-found.jpg"}
        width={0}
        height={0}
        alt="page wasnt found"
        sizes="100vw"
        className={styles.image}
      />
      <Gap direction="vertical" size="medium">
        <Gap direction="vertical">
          <h2 className={styles.text_big}>404</h2>
          <h3>страница не найдена или была удалена </h3>
        </Gap>
        <Button href="catalog">Перейти в каталог</Button>
      </Gap>
    </div>
  );
}
