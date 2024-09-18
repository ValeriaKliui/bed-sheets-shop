"use client";

import { PATHS, PATHS_KEYS } from "@lib/constants/paths";
import Gap from "@ui/Gap";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BreadcrumbsProps, LinksArray } from "./interfaces";
import styles from "./styles.module.scss";

export default function Breadcrumbs({ extraLinks }: BreadcrumbsProps) {
  const pathname = usePathname();
  const linksElements: LinksArray = [];
  const pathnames = pathname.split("/") as [];

  pathnames.reduce((path, currPath: PATHS_KEYS & "") => {
    const titleExists = PATHS[currPath];
    const isHomePath = currPath === "";

    if (isHomePath) {
      linksElements.push({ path: `/`, title: PATHS["/"] });
      return "";
    }

    if (titleExists)
      linksElements.push({
        path: `${path}/${currPath}`,
        title: PATHS[currPath],
      });

    return `${path}/${currPath}`;
  }, "");

  return (
    <Gap className={styles.container} size="small">
      {linksElements.map(({ path, title }) => (
        <Link href={path} key={path} className={styles.breadcrumb}>
          <p key={path}>{title}</p>
        </Link>
      ))}
      {extraLinks?.map(({ path, title }) => (
        <Link href={"/" + path} key={path} className={styles.breadcrumb}>
          <p key={path}>{title[0].toUpperCase() + title.slice(1)}</p>
        </Link>
      ))}
    </Gap>
  );
}
