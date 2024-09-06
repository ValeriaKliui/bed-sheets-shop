import { PageProps } from "@lib/constants/types";
import { fetchCatalogPages } from "@lib/data";
import FullCatalog from "@ui/FullCatalog";
import Pagination from "@ui/Pagination";

export default async function CatalogPage({ searchParams, params }: PageProps) {
  const totalItems = await fetchCatalogPages({ ...searchParams, ...params });
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div>
      <FullCatalog searchParams={searchParams} params={params} />
      <Pagination totalItems={totalItems} currentPage={currentPage} />
    </div>
  );
}
