import { fetchCatalogPages } from "@lib/data";
import Pagination from "@ui/Pagination";
import SearchedItems from "@ui/SearchedItems";
import SearchWindow from "@ui/SearchWindow";

export default async function Page({ searchParams: { search, page } }) {
  const pagesAmount = await fetchCatalogPages({ title: search });
  const currentPage = Number(page) || 1;

  return (
    <>
      <SearchWindow />
      <h2>Результаты поиска</h2>
      {search && (
        <p>
          По запросу &quot;{search}&quot; нашлось {pagesAmount} страниц
        </p>
      )}
      <SearchedItems search={search} page={page} />
      {search && (
        <Pagination totalItems={pagesAmount} currentPage={currentPage} />
      )}
    </>
  );
}
