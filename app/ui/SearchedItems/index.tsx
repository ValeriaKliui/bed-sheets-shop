import { fetchItemsByTitle } from "@lib/fetchItemsByTitle";
import Gap from "@ui/Gap";
import Link from "next/link";

import { SearchedItemsProps } from "./interfaces";
import SearchedItem from "./SearchedItem";

export default async function SearchedItems({
  search,
  page,
  pagesAmount,
}: SearchedItemsProps) {
  const searchedItems = await fetchItemsByTitle({
    title: search,
    limit: 4,
    page,
  });
  if (!search) return <p>Введите название товара</p>;

  return (
    <Gap direction="vertical"
      className="wrapper" alignItems="flex-start">
      {searchedItems.length === 0 ? (
        <p>ничего не найдено</p>
      ) : (
        <>
          <h2>Результаты поиска</h2>
          <p>
            По запросу &quot;{search}&quot; нашлось {pagesAmount} страниц.
          </p>
          {searchedItems.map(({ title, id, photo, category, article }) => (
            <Link href={`/catalog/${category}/${id}`} key={id}>
              <SearchedItem
                title={title}
                id={id}
                photo={photo}
                category={category}
                key={id}
                article={article}
              />
            </Link>
          ))}
        </>
      )}
    </Gap>
  );
}
