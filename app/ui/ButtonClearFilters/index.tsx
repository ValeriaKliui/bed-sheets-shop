"use client";

import LinkButton from "@ui/LinkButton";
import { usePathname, useSearchParams } from "next/navigation";

export default function ButtonClearFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const isFilterExists = searchParams.size > 0;

  if (!isFilterExists) return;

  return <LinkButton href={pathname}>Очистить фильтры</LinkButton>;
}
