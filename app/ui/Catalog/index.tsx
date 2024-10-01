import Loader from "@ui/Loader";
import { Suspense } from "react";

import CatalogGridWithSuspense from "./CatalogGridWithSuspense";
import { CatalogProps } from "./interfaces";

export default function Catalog<T>({
  fetch,
  dimensions,
  Card,
}: CatalogProps<T>) {
  return (
    <Suspense fallback={<Loader />}>
      <CatalogGridWithSuspense
        fetch={fetch}
        dimensions={dimensions}
        Card={Card}
      />
    </Suspense>
  );
}
