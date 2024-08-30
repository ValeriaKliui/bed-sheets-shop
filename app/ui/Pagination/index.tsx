"use client";

import generatePagination from "@lib/utils/generatePagination";
import Gap from "@ui/Gap";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { PaginationParams } from "./interfaces";

export default function Pagination({
  totalPages,
  currentPage = 1,
}: PaginationParams) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (!totalPages) return;
  const pages = generatePagination(totalPages, currentPage);

  const getUrlForPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));

    return `${pathname}?${params.toString()}`;
  };

  return (
    <Gap>
      {pages.map((page) => (
        <Link href={getUrlForPage(page)} key={page}>
          {page}
        </Link>
      ))}
    </Gap>
  );
}
