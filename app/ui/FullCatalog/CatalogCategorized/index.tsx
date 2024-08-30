import { fetchFilteredCatalogItems } from "@lib/data";
import { FilterParams } from "@lib/interfaces";
import CatalogGridWithSuspense from "@ui/CatalogGrid/CatalogGridWithSuspense";

export default async function CatalogCategorized({
  category,
}: Pick<FilterParams, "category">) {
  const fetchByCategory = async () =>
    await fetchFilteredCatalogItems({ category });

  return <CatalogGridWithSuspense columns={3} fetch={fetchByCategory} />;
}
