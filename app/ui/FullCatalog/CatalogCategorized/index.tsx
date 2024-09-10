import { fetchFilteredCatalogItems } from "@lib/data";
import { FilterParams } from "@lib/interfaces";
import CatalogGridWithSuspense from "@ui/CatalogGrid/CatalogGridWithSuspense";

export default async function CatalogCategorized({
  category,
  minPrice,
  maxPrice,
  page,
  size, inStock
}: FilterParams) {
  const fetchByCategory = async () =>
    await fetchFilteredCatalogItems({
      category,
      minPrice,
      maxPrice,
      page,
      size, inStock
    });

  return <CatalogGridWithSuspense columns={3} fetch={fetchByCategory} />;
}
