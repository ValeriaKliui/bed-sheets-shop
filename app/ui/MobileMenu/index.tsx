import useFreezeScroll from "@hooks/useFreezeScroll";
import useModal from "@hooks/useModal";
import { CATEGORIES_LINKS, OTHER_LINKS } from "@lib/constants";
import CallModal from "@ui/CallModal";
import Gap from "@ui/Gap";
import Networks from "@ui/Networks";
import clsx from "clsx";
import Link from "next/link";

import { MobileMenuProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function MobileMenu({ isOpened, toggleMenu }: MobileMenuProps) {
  const { openModal, isModalOpen, closeModal } = useModal();

  useFreezeScroll(isOpened);

  if (!isOpened) return false;

  return (
    <div className={styles.menu}>
      <Gap size="huge" direction="vertical" alignItems={"flex-start"}>
        <Gap direction="vertical" size="large" alignItems={"flex-start"}>
          <p className="text_secondary">Категории Mollen</p>
          <Gap direction="vertical" alignItems={"flex-start"}>
            {CATEGORIES_LINKS.map(({ title, url }) => (
              <Link href={url} key={url} replace onClick={toggleMenu} className={styles.link}>
                <h4> {title}</h4>
              </Link>
            ))}
          </Gap>
        </Gap>
        <Gap direction="vertical" size="large" alignItems={"flex-start"}>
          <p className="text_secondary">Меню</p>
          <Gap direction="vertical" alignItems={"flex-start"}>
            {OTHER_LINKS.map(({ title, url }) => (
              <Link href={url} key={url + title} onClick={toggleMenu}className={styles.link}>
                <h4> {title}</h4>
              </Link>
            ))}
          </Gap>
        </Gap>
        <Gap direction="vertical" alignItems={"flex-start"}>
          <h4>8 800 222 22 22</h4>
          <a className={clsx("link_primary", "pointer")} onClick={openModal}>
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
  );
}
