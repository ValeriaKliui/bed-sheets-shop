"use client";

import Button from "@ui/Button";
import { usePathname, useRouter,useSearchParams } from "next/navigation";

export default function ButtonClearFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const isFilterExists = searchParams.size > 0;

  function clearFilters() {
    const params = new URLSearchParams(searchParams);
    for (const key of params.keys()) {
      params.delete(key);
    }
    replace(`${pathname}?${params.toString()}`);
  }

  if (!isFilterExists) return;

  return <Button onClick={clearFilters}>Очистить фильтры</Button>;
}
