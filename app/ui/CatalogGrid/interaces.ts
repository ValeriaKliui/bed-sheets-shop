import { CatalogProps } from "@ui/Catalog/interfaces";

export interface CatalogGridProps<T>
  extends Pick<CatalogProps<T>, "dimensions"> {
  cardItems: JSX.Element[];
}
