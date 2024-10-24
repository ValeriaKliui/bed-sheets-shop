"use client";

import breakpoints from "@breakpoints.module.scss";
import { PATHS, PATHS_KEYS } from "@lib/constants/paths";
import getNumberFromPx from "@lib/utils/getNumberFromPx";
import Gap from "@ui/Gap";
import { useWindowSize } from "@uidotdev/usehooks";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BreadcrumbsProps, LinksArray } from "./interfaces";
import styles from "./styles.module.scss";

export default function Breadcrumbs({ extraLinks, className }: BreadcrumbsProps) {
  const pathname = usePathname();
  const linksElements: LinksArray = [];
  const pathnames = pathname.split("/") as [];
  const { width } = useWindowSize();
  const isSmallDevices = width && width <= getNumberFromPx(breakpoints.sm)

  pathnames.reduce((path, currPath: PATHS_KEYS & "") => {
    const titleExists = PATHS[currPath];
    const isHomePath = currPath === "";

    if (isHomePath) {
      linksElements.push({ path: `/`, title: PATHS["/"] });
      return "";
    }

    if (titleExists) {
      linksElements.push({
        path: `${path}/${currPath}`,
        title: PATHS[currPath],
      });
    }

    return `${path}/${currPath}`;
  }, "");

  if (isSmallDevices) {
    const prevLink = linksElements[linksElements.length - 1].path

    if (extraLinks && extraLinks?.length > 0) {

      linksElements.splice(1, linksElements.length, {
        path: prevLink, title: '...'
      })
    }
  }

  return (
    <Gap className={clsx(styles.container, className)} size="small">
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
