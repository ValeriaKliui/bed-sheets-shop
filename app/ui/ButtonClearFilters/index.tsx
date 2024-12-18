"use client";

import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";

export default function ButtonClearFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const isFilterExists = searchParams.size > 0;

  if (!isFilterExists) return;

  return (
    <a href={pathname} className={clsx("link")}>
      <p>Очистить фильтры</p>
    </a>
  );
}
