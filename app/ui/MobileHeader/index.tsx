import useFreezeScroll from "@hooks/useFreezeScroll";
import useModal from "@hooks/useModal";
import { CATEGORIES_LINKS, OTHER_LINKS } from "@lib/constants";
import CallModal from "@ui/CallModal";
import Gap from "@ui/Gap";
import Logo from "@ui/icons/Logo";
import MobileMenu from "@ui/MobileMenu";
import Networks from "@ui/Networks";
import clsx from "clsx";
import Link from "next/link";

import { MobileHeaderProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function MobileHeader({
  color,
  toggleMenu,
  isOpened,
}: MobileHeaderProps) {
  const { openModal: openFormModal, isModalOpen, closeModal } = useModal();

  // useFreezeScroll(isModalOpen);

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
      <MobileMenu />
    </div>
  );
}
