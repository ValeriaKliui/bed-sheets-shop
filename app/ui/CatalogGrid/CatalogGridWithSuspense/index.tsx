import { Suspense } from "react";

import CatalogGridFetching from "../CatalogGridFetching";
import { CatalogGridWithSuspenseProps } from "./interfaces";

export default async function CatalogGridWithSuspense({
  fetch,
  columns,
}: CatalogGridWithSuspenseProps) {
  return (
    <Suspense fallback="loading">
      <CatalogGridFetching fetch={fetch} columns={columns} />
    </Suspense>
  );
}
