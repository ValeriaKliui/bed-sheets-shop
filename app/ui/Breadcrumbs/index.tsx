"use client";

import { PATHS, PATHS_KEYS } from "@lib/constants/paths";
import Gap from "@ui/Gap";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.scss";
import { BreadcrumbsProps } from "./interfaces";

export default function Breadcrumbs({ extraLinks }: BreadcrumbsProps) {
  const path = usePathname();
  const paths = path
    .split("/")
    .filter((path) => path) as unknown[] as PATHS_KEYS[];
  paths.unshift("/");

  return (
    <Gap className={styles.container} size="small">
      {paths.map((path) => (
        <Link href={"/" + path} key={path} className={styles.breadcrumb}>
          <p key={path}>{PATHS[path]}</p>
        </Link>
      ))}
      {extraLinks?.map(({ path, title }) => (
        <Link href={"/" + path} key={path} className={styles.breadcrumb}>
          <p key={path}>{title}</p>
        </Link>
      ))}
    </Gap>
  );
}
