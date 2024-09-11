import { FilterParams } from "@lib/interfaces";

export interface CatalogCategorizedProps extends FilterParams {
  columns?: number;
  rows?: null | number;
}
