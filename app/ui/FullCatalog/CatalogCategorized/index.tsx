import { fetchFilteredCatalogItems } from "@lib/data";
import { FilterParams } from "@lib/interfaces";
import CatalogGridWithSuspense from "@ui/CatalogGrid/CatalogGridWithSuspense";

export default async function CatalogCategorized({
  category,
  minPrice,
  maxPrice,
}: FilterParams) {
  const fetchByCategory = async () =>
    await fetchFilteredCatalogItems({ category, minPrice, maxPrice });

  return <CatalogGridWithSuspense columns={3} fetch={fetchByCategory} />;
}
