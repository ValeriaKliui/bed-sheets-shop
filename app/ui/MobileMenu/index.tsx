import useModal from "@hooks/useModal";
import { CATEGORIES_LINKS, OTHER_LINKS } from "@lib/constants";
import CallModal from "@ui/CallModal";
import Gap from "@ui/Gap";
import Logo from "@ui/icons/Logo";
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
  const { openModal: openFormModal, isModalOpen, closeModal } = useModal();

  return (
    <div className={styles.mobileMenu}>
      <Gap className={clsx(isOpened && styles.header)}>
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
        {isOpened && <Logo fill={"black"} className={styles.logo} />}
      </Gap>
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
                  <Link href={url} key={url + title} onClick={toggleMenu}>
                    <h4> {title}</h4>
                  </Link>
                ))}
              </Gap>
            </Gap>
            <Gap direction="vertical" alignItems={"flex-start"}>
              <h4>8 800 222 22 22</h4>
              <a className={clsx("link", "pointer")} onClick={openFormModal}>
                Заказать звонок
              </a>
              <CallModal
                isOpened={isModalOpen}
                closeModal={closeModal}
                title="Заказать звонок"
                successText="Спасибо, мы с вами свяжемся!"
              />
            </Gap>
            <Networks />
          </Gap>
        </div>
      )}
    </div>
  );
}
