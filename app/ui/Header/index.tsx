"use client";

import useMobileMenu from "@hooks/useMobileMenu";
import defineHeaderTextColor from "@lib/utils/defineHeaderTextColor";
import CardIcon from "@ui/CardIcon";
import Gap from "@ui/Gap";
import BedIcon from "@ui/icons/BedIcon";
import Logo from "@ui/icons/Logo";
import SearchIcon from "@ui/icons/SearchIcon";
import MobileMenu from "@ui/MobileMenu";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.scss";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const textColor = defineHeaderTextColor(pathname);
  const { isMenuOpened, closeMenu, toggleMenu } = useMobileMenu();

  return (
    <header
      className={clsx(styles.container, !isHomePage && styles.border)}
      style={{ color: textColor }}
    >
      <div className={clsx('wrapper', styles.header_wrapper)}>
        <div className={clsx(styles.header,)}>
          <Gap size="large">
            <MobileMenu
              color={textColor}
              isOpened={isMenuOpened}
              toggleMenu={toggleMenu}
            />
            <Logo
              fill={textColor}
              className={clsx(isMenuOpened && styles.logo_opened)}
              onClick={closeMenu}
            />
            <Link href="/catalog" replace style={{ color: textColor }}>
              <h5 className={styles.notMobile}>Каталог</h5>
            </Link>
          </Gap>

          <Gap size="large">
            <Gap size="medium">
              <Link href={"catalog/search"} replace>
                <Gap>
                  <SearchIcon fill={textColor} />
                  <h5 className={styles.notMobile}>Поиск</h5>
                </Gap>
              </Link>
              <Gap>
                <BedIcon fill={textColor} />
                <h5 className={styles.notMobile}>Конструктор</h5>
              </Gap>
            </Gap>
            <CardIcon />
          </Gap>
        </div>
      </div>


    </header>
  );
}
