"use client";

import { CATEGORIES } from "@lib/constants";
import Gap from "@ui/Gap";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterCategories() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (category: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (category) {
      params.set("category", category);
      params.delete("size");
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Gap direction="vertical">
      {CATEGORIES.map(({ title, category }) => (
        <Gap key={category}>
          <input
            type="radio"
            name="category"
            id={category}
            onChange={() => {
              handleSearch(category);
            }}
            checked={searchParams.get("category")?.toString() === category}
          />
          <label htmlFor={category}>{title}</label>
        </Gap>
      ))}
    </Gap>
  );
}
