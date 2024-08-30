"use client";

import defineHeaderTextColor from "@lib/utils/defineHeaderTextColor";
import CircledIcon from "@ui/CircledIcon";
import Gap from "@ui/Gap";
import BedIcon from "@ui/icons/BedIcon";
import Logo from "@ui/icons/Logo";
import SearchIcon from "@ui/icons/SearchIcon";
import colors from "@variables.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.scss";

export default function Header() {
  const pathname = usePathname();
  const textColor = defineHeaderTextColor(pathname);
  const { primary } = colors;

  return (
    <header
      className={clsx("wrapper", styles.header)}
      style={{ color: textColor }}
    >
      <Gap size="medium">
        <Logo fill={textColor} />
        <Link href="catalog" style={{ color: textColor }}>
          <h5>Каталог</h5>
        </Link>
      </Gap>
      <Gap size="large">
        <Gap size="medium">
          <Gap>
            <SearchIcon fill={textColor} />
            <h5>Поиск</h5>
          </Gap>
          <Gap>
            <BedIcon fill={textColor} />
            <h5>Конструктор</h5>
          </Gap>
        </Gap>
        <CircledIcon
          src="/icons/bag.svg"
          alt={"To shopping cart"}
          color={primary}
        />
      </Gap>
    </header>
  );
}
