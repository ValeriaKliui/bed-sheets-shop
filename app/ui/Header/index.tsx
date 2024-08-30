"use client";

import defineHeaderTextColor from "@lib/utils/defineHeaderTextColor";
import Gap from "@ui/Gap";
import BedIcon from "@ui/icons/BedIcon";
import Logo from "@ui/icons/Logo";
import SearchIcon from "@ui/icons/SearchIcon";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.scss";

export default function Header() {
  const pathname = usePathname();
  const textColor = defineHeaderTextColor(pathname);

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
        <div className={styles.circled}>
          <Image
            src="/icons/bag.svg"
            width={20}
            height={20}
            alt="To shopping cart"
          />
        </div>
      </Gap>
    </header>
  );
}
