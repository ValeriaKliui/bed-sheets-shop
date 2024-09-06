"use client";

import { CATEGORIES } from "@lib/constants";
import Gap from "@ui/Gap";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterCategories() {
  const searchParams = useSearchParams();
  const pathnames = usePathname().split("/");
  const pathCategory = pathnames[pathnames.length - 1];
  const { replace } = useRouter();

  const handleSearch = (category: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (category) {
      // replace(`${pathname}/${category}?${params.toString()}`);
      params.delete("size");
    }
  };

  return (
    <Gap direction="vertical">
      {CATEGORIES.map(({ title, category }) => (
        <Link
          href={{
            pathname: `/catalog/${category}`,
          }}
          key={category}
        >
          <Gap>
            <input
              type="radio"
              name="category"
              id={category}
              onChange={() => {
                // handleSearch(category);
              }}
              checked={pathCategory === category}
            />
            <label htmlFor={category}>{title}</label>
          </Gap>
        </Link>
      ))}
    </Gap>
  );
}
