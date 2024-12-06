"use client";

import { CATEGORIES } from "@lib/constants";
import Gap from "@ui/Gap";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.scss";

export default function FilterCategories() {
  const pathnames = usePathname().split("/");
  const pathCategory = pathnames[pathnames.length - 1];

  return (
    <Gap
      direction="vertical"
      alignItems={"flex-start"}
      className={styles.container}
    >
      {CATEGORIES.map(({ title, category }) => (
        <Link
          href={`/catalog/${category}`}
          className={styles.link}
          key={category}
        >
          <Gap className={styles.category} justifyContent="space-between">
            <input
              type="radio"
              name="category"
              id={category}
              defaultChecked={pathCategory === category}
            />
            <label htmlFor={category} className="label_radio">
              {title}
            </label>
          </Gap>
        </Link>
      ))}
    </Gap>
  );
}
