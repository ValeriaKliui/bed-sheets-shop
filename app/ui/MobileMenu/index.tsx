import { CATEGORIES_LINKS, OTHER_LINKS } from "@lib/constants";
import Gap from "@ui/Gap";
import Networks from "@ui/Networks";
import clsx from "clsx";
import Link from "next/link";

import { MobileMenuProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function MobileMenu({
  color,
  toggleMenu,
  isOpened,
}: MobileMenuProps) {
  return (
    <div className={styles.mobileMenu}>
      <div className={clsx(styles.burger)} onClick={toggleMenu}>
        {Array(3)
          .fill(1)
          .map((_, index) => (
            <span
              key={index}
              className={clsx(styles.dot, isOpened && styles.dot_opened)}
              style={{ background: !isOpened ? color : "" }}
            />
          ))}
      </div>
      {isOpened && (
        <div className={styles.menu}>
          <Gap size="huge" direction="vertical" alignItems={"flex-start"}>
            <Gap direction="vertical" size="large" alignItems={"flex-start"}>
              <p className="text_secondary">Категории Mollen</p>
              <Gap direction="vertical" alignItems={"flex-start"}>
                {CATEGORIES_LINKS.map(({ title, url }) => (
                  <Link href={url} key={url} replace onClick={toggleMenu}>
                    <h4> {title}</h4>
                  </Link>
                ))}
              </Gap>
            </Gap>
            <Gap direction="vertical" size="large" alignItems={"flex-start"}>
              <p className="text_secondary">Меню</p>
              <Gap direction="vertical" alignItems={"flex-start"}>
                {OTHER_LINKS.map(({ title, url }) => (
                  <Link href={url} key={url} onClick={toggleMenu}>
                    <h4> {title}</h4>
                  </Link>
                ))}
              </Gap>
            </Gap>
            <Gap direction="vertical" alignItems={"flex-start"}>
              <h4>8 800 222 22 22</h4>
              <a href="tel:88002222222" className="link">
                Заказать звонок
              </a>
            </Gap>
          </Gap>
          <Networks className={styles.networks} />
        </div>
      )}
    </div>
  );
}
