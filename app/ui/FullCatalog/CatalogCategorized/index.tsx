import { fetchFilteredCatalogItems } from "@lib/data";
import { FilterParams } from "@lib/interfaces";
import CatalogGridWithSuspense from "@ui/CatalogGrid/CatalogGridWithSuspense";

export default async function CatalogCategorized({
  category,
  minPrice,
  maxPrice,
  page,
  size,
}: FilterParams) {
  const fetchByCategory = async () =>
    await fetchFilteredCatalogItems({
      category,
      minPrice,
      maxPrice,
      page,
      size,
    });

  return <CatalogGridWithSuspense columns={3} fetch={fetchByCategory} />;
}
