import Link from "next/link";

import FoundItem from "./FoundItem";
import { FoundItemsProps } from "./interfaces";

export default function FoundItems({
  items,
  search,
  makeFullSearch,
}: FoundItemsProps) {
  if (!items) return false;

  return (
    <div>
      {items.map(({ title, price, photo, id }) => {
        return <FoundItem title={title} price={price} photo={photo} key={id} />;
      })}

      {items.length > 0 ? (
        <Link
          href={{ pathname: "search", query: { search } }}
          onClick={makeFullSearch}
        >
          все результаты
        </Link>
      ) : (
        <p>Ничего не было найдено</p>
      )}
    </div>
  );
}
