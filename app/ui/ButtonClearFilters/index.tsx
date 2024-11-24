"use client";

import ButtonLink from "@ui/ButtonLink";
import { usePathname, useSearchParams } from "next/navigation";

export default function ButtonClearFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const isFilterExists = searchParams.size > 0;

  if (!isFilterExists) return;

  return <ButtonLink href={pathname}>Очистить фильтры</ButtonLink>;
}
