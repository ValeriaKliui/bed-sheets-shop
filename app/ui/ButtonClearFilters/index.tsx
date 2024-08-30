"use client";

import Button from "@ui/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ButtonClearFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const isFilterExists = searchParams.size > 0;

  function clearFilters() {
    push(pathname);
  }

  if (!isFilterExists) return;

  return <Button onClick={clearFilters}>Очистить фильтры</Button>;
}
