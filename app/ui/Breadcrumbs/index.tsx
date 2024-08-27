"use client";

import { PATHS, PATHS_KEYS } from "@lib/constants/paths";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import Link from "next/link";
import Gap from "@ui/Gap";

export default function Breadcrumbs() {
  const path = usePathname();
  const paths = path
    .split("/")
    .filter((path) => path) as unknown[] as PATHS_KEYS[];
  paths.unshift("/");

  return (
    <Gap className={styles.container} size="small">
      {paths.map((path) => (
        <Link href={path} key={path} className={styles.breadcrumb}>
          <p key={path}>{PATHS[path]}</p>
        </Link>
      ))}
    </Gap>
  );
}
