import Loader from "@ui/Loader";
import { Suspense } from "react";

import CatalogGridFetching from "../CatalogGridFetching";
import { CatalogGridWithSuspenseProps } from "./interfaces";

export default async function CatalogGridWithSuspense({
  fetch,
  columns,
  rows,
}: CatalogGridWithSuspenseProps) {
  return (
    <Suspense fallback={<Loader />}>
      <CatalogGridFetching fetch={fetch} columns={columns} rows={rows} />
    </Suspense>
  );
}
