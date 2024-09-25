import { CatalogProps } from "@ui/Catalog/interfaces";
import Loader from "@ui/Loader";
import { Suspense } from "react";

import CatalogGridFetching from "../CatalogGridFetching";

export default async function CatalogGridWithSuspense({
  fetch,
  dimensions,
  Card,
}: CatalogProps) {
  return (
    <Suspense fallback={<Loader />}>
      <CatalogGridFetching fetch={fetch} dimensions={dimensions} Card={Card} />
    </Suspense>
  );
}
