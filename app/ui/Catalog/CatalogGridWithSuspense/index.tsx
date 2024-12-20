import { CatalogItem } from "@lib/constants/types";
import { CatalogProps } from "@ui/Catalog/interfaces";
import FakeCatalogGrid from "@ui/CatalogGrid/FakeCatalogGrid";
import { Suspense } from "react";

import CatalogGridFetching from "../../Catalog/CatalogGridFetching";

export default async function CatalogGridWithSuspense<
  T extends Pick<CatalogItem, "id">
>({ fetch, dimensions, Card }: CatalogProps<T>) {
  return (
    <Suspense fallback={<FakeCatalogGrid dimensions={dimensions} />}>
      <CatalogGridFetching fetch={fetch} dimensions={dimensions} Card={Card} />
    </Suspense>
  );
}
