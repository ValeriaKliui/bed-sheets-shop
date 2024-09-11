import { CatalogItem } from "@lib/constants/types";

export interface CatalogGridWithSuspenseProps {
  fetch: () => Promise<CatalogItem[]>;
  columns: number;
  rows?: null | number;
}
