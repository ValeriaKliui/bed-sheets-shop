import { CatalogProps } from "@ui/Catalog/interfaces";
import Loader from "@ui/Loader";
import { Suspense } from "react";

import CatalogGridFetching from "../../Catalog/CatalogGridFetching";

export default async function CatalogGridWithSuspense<T>({
  fetch,
  dimensions,
  Card,
}: CatalogProps<T>) {
  return (
    <Suspense fallback={<Loader />}>
      <CatalogGridFetching fetch={fetch} dimensions={dimensions} Card={Card} />
    </Suspense>
  );
}
