import { PageProps } from "@lib/constants/types";
import { fetchCatalogPages } from "@lib/data";
import Pagination from "@ui/Pagination";
import SearchedItems from "@ui/SearchedItems";
import SearchWindow from "@ui/SearchWindow";

export default async function SearchPage({
  searchParams: { search, page },
}: PageProps) {
  const pagesAmount = await fetchCatalogPages({ title: search });
  const currentPage = Number(page) || 1;

  return (
    <>
      <SearchWindow />
      <SearchedItems search={search} page={page} pagesAmount={pagesAmount} />
      {search && (
        <Pagination totalItems={pagesAmount} currentPage={currentPage} />
      )}
    </>
  );
}
