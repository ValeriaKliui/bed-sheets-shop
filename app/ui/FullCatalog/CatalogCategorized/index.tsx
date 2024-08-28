import { Nullable } from "@lib/constants/types";
import { FilterParams } from "@lib/interfaces";
import CatalogGrid from "@ui/CatalogGrid";
import CatalogGridWithSuspense from "@ui/CatalogGrid/CatalogGridWithSuspense";
import { fetchFilteredCatalogItems, fetchLatestCatalogItems } from "@lib/data";

export default async function CatalogCategorized({
  category,
}: Pick<FilterParams, "category">) {
  const fetchByCategory = async () =>
    await fetchFilteredCatalogItems({ category });

  return <CatalogGridWithSuspense columns={3} fetch={fetchByCategory} />;
}
