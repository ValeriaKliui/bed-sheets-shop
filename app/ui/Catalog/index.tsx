import CatalogGridWithSuspense from "@ui/CatalogGrid/CatalogGridWithSuspense";
import Loader from "@ui/Loader";
import { Suspense } from "react";

import { CatalogProps } from "./interfaces";

export default function Catalog({ fetch, dimensions, Card }: CatalogProps) {
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
