"use client";

import generatePagination from "@lib/utils/generatePagination";
import Arrow from "@ui/Arrow";
import CircledIcon from "@ui/CircledIcon";
import Gap from "@ui/Gap";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { PaginationParams } from "./interfaces";
import styles from "./styles.module.scss";

export default function Pagination({
  totalItems,
  currentPage = 1,
  className,
}: PaginationParams) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (!totalItems) return;

  const { pages, isLeftArrow, isRightArrow } = generatePagination(
    totalItems,
    currentPage
  );

  const getUrlForPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));

    return `${pathname}?${params.toString()}`;
  };

  return (
    <Gap className={className}>
      {isLeftArrow && (
        <Link href={getUrlForPage(currentPage - 1)} className={styles.arrows}>
          <CircledIcon src="/icons/arrow.svg" alt="to previous page" />
        </Link>
      )}
      {pages.map((page) => (
        <Link href={getUrlForPage(page)} key={page} className={styles.hover}>
          <div
            className={clsx(
              styles.page,
              page === currentPage && styles.current
            )}
          >
            <h5>{page}</h5>
          </div>
        </Link>
      ))}
      {isRightArrow && (
        <Link href={getUrlForPage(currentPage + 1)} className={styles.arrows}>
          <Arrow direction="right" />
          {/* <CircledIcon
            src="/icons/arrow.svg"
            alt="to next page"
            className={styles.rightArrow}
          /> */}
        </Link>
      )}
    </Gap>
  );
}
