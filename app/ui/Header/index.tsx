"use client";

import defineHeaderTextColor from "@lib/utils/defineHeaderTextColor";
import CardIcon from "@ui/CardIcon";
import Gap from "@ui/Gap";
import BedIcon from "@ui/icons/BedIcon";
import Logo from "@ui/icons/Logo";
import SearchIcon from "@ui/icons/SearchIcon";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.scss";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const textColor = defineHeaderTextColor(pathname);

  return (
    <header
      className={clsx(styles.container, !isHomePage && styles.border)}
      style={{ color: textColor }}
    >
      <div className={clsx("wrapper", styles.header)}>
        <Gap size="medium">
          <Logo fill={textColor} />
          <Link href="/catalog" replace style={{ color: textColor }}>
            <h5>Каталог</h5>
          </Link>
        </Gap>
        <Gap size="large">
          <Gap size="medium">
            <Link href={"catalog/search"}>
              <Gap>
                <SearchIcon fill={textColor} />
                <h5>Поиск</h5>
              </Gap>
            </Link>
            <Gap>
              <BedIcon fill={textColor} />
              <h5>Конструктор</h5>
            </Gap>
          </Gap>
          <CardIcon />
        </Gap>
      </div>
    </header>
  );
}
