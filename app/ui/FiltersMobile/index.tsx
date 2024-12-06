"use client";

import useMobileMenu from "@hooks/useMobileMenu";
import Button from "@ui/Button";
import CircledIcon from "@ui/CircledIcon";
import Gap from "@ui/Gap";
import colors from "@variables.module.scss";
import clsx from "clsx";
import Image from "next/image";

import { FiltersMobileProps } from "./interfaces";
import styles from "./styles.module.scss";

const { bg } = colors;

export default function FiltersMobile({ filters }: FiltersMobileProps) {
  const { toggleMenu, isMenuOpened } = useMobileMenu();

  return (
    <Gap className={clsx("mobile-only", "wrapper")} alignSelf="flex-start">
      <Gap className={styles.button} onClick={toggleMenu}>
        <Image width={20} height={20} src="/icons/filters.svg" alt="Фильтры" />
        <h5>Фильтры</h5>
      </Gap>
      {isMenuOpened && (
        <Gap
          className={clsx(styles.filters)}
          direction="vertical"
          alignItems={"flex-start"}
          size="medium"
        >
          <Gap justifyContent={"space-between"} className={styles.header}>
            <h3 className="mobile-only">Фильтры</h3>
            <CircledIcon
              src="/icons/close.svg"
              alt="clear search"
              color={bg}
              onClick={toggleMenu}
            />
          </Gap>
          <h5>Категории</h5>
          {filters}
          <Button onClick={toggleMenu} className={styles.show}>
            Показать
          </Button>
        </Gap>
      )}
    </Gap>
  );
}
