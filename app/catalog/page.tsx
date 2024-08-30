import { fetchCatalogPages } from "@lib/data";
import Breadcrumbs from "@ui/Breadcrumbs";
import FullCatalog from "@ui/FullCatalog";
import Pagination from "@ui/Pagination";

import { PageParams } from "./interfaces";

export default async function Page({ searchParams }: PageParams) {
  const totalPages = await fetchCatalogPages(searchParams);

  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div>
      <Breadcrumbs />
      <FullCatalog searchParams={searchParams} />
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
