"use client";

import { CATEGORIES } from "@lib/constants";
import Gap from "@ui/Gap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FilterCategories() {
  const pathnames = usePathname().split("/");
  const pathCategory = pathnames[pathnames.length - 1];

  return (
    <Gap direction="vertical" alignItems={"flex-start"}>
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
              defaultChecked={pathCategory === category}
            />
            <label htmlFor={category}>{title}</label>
          </Gap>
        </Link>
      ))}
    </Gap>
  );
}
