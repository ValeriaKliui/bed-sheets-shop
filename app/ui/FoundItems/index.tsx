import clsx from "clsx";
import Link from "next/link";

import FoundItem from "./FoundItem";
import { FoundItemsProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function FoundItems({
  items,
  search,
  closeSearch,
}: FoundItemsProps) {
  if (!items || !search) return false;

  return (
    <div className={styles.container}>
      {items.map(({ title, photo, id, category }) => (
        <Link href={`/catalog/${category}/${id}`} key={id}>
          <FoundItem title={title} photo={photo} search={search} />
        </Link>
      ))}

      {items.length > 0 ? (
        <Link
          href={{ pathname: "search", query: { search } }}
          onClick={closeSearch}
          className={clsx("link_primary", "text_medium", styles.info)}
        >
          все результаты
        </Link>
      ) : (
        <p className={styles.info}>Ничего не было найдено</p>
      )}
    </div>
  );
}
