"use client";

import { CATEGORIES } from "@lib/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterCategories() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (category: string) => {
    const params = new URLSearchParams(searchParams);

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      {CATEGORIES.map(({ title, value }) => (
        <label key={title}>
          <input
            type="radio"
            name="category"
            onChange={() => {
              handleSearch(value);
            }}
            defaultValue={searchParams.get("category")?.toString()}
          />
          {title}
        </label>
      ))}
    </>
  );
}
