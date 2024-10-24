import clsx from "clsx";
import Link from "next/link";

import FoundItem from "./FoundItem";
import { FoundItemsProps } from "./interfaces";
import styles from './styles.module.scss'

export default function FoundItems({
  items,
  search,
  closeSearch
}: FoundItemsProps) {
  if (!items || !search) return false;

  return (
    <div className={styles.container}>
      {items.map(({ title, price, photo, id }) => {
        return <FoundItem title={title} price={price} photo={photo} key={id} />;
      })}

      {items.length > 0 ? (
        <Link
          href={{ pathname: "search", query: { search } }}
          onClick={closeSearch}
          className={clsx('link', 'text_medium', styles.link)}
        >
          все результаты
        </Link>
      ) : (
        <p>Ничего не было найдено</p>
      )}
    </div>
  );
}
