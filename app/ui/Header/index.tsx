"use client";

import styles from "./styles.module.scss";
import defineHeaderTextColor from "@lib/utils/defineHeaderTextColor";
import { usePathname } from "next/navigation";
import Logo from "@ui/icons/Logo";
import SearchIcon from "@ui/icons/SearchIcon";
import clsx from "clsx";
import BedIcon from "@ui/icons/BedIcon";
import Gap from "@ui/Gap";
import Image from "next/image";

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
        <h5>Каталог</h5>
      </Gap>
      <Gap size="large">
        <Gap size="medium">
          <Gap size="small">
            <SearchIcon fill={textColor} />
            <h5>Поиск</h5>
          </Gap>
          <Gap size="small">
            <BedIcon fill={textColor} />
            <h5>Конструктор</h5>
          </Gap>
        </Gap>
        <div className={styles.circled}>
          <Image src="/bag.svg" width={20} height={20} alt="To shopping cart" />
        </div>
      </Gap>
    </header>
  );
}
