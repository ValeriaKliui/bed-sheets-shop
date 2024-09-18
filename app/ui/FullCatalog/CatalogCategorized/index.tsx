import { fetchFilteredCatalogItems } from "@lib/data";
import CatalogGridWithSuspense from "@ui/CatalogGrid/CatalogGridWithSuspense";

import { CatalogCategorizedProps } from "./interfaces";

export default async function CatalogCategorized({
  category,
  minPrice,
  maxPrice,
  page,
  size,
  inStock,
  sort,
  columns = 3,
  rows = null,
}: CatalogCategorizedProps) {
  const fetchByCategory = async () =>
    await fetchFilteredCatalogItems({
      category,
      minPrice,
      maxPrice,
      page,
      size,
      inStock,
      sort,
    });

  return (
    <CatalogGridWithSuspense
      columns={columns}
      fetch={fetchByCategory}
      rows={rows}
    />
  );
}
