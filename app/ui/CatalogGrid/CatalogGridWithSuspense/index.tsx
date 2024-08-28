import { fetchLatestCatalogItems } from "@lib/data";
import CatalogGrid from "@ui/CatalogGrid";
import { Suspense } from "react";

import CatalogGridFetching from "../CatalogGridFetching";

export default async function CatalogGridWithSuspense({ fetch, columns }) {
  return (
    <Suspense fallback="loading">
      <CatalogGridFetching fetch={fetch} columns={columns} />;
    </Suspense>
  );
}
