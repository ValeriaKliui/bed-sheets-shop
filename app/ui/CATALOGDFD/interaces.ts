import { CatalogItem } from "@lib/constants/types";
import { CatalogProps } from "@ui/Catalog/interfaces";

export interface CATALOGDFDProps extends Omit<CatalogProps, "fetch"> {
  cards: CatalogItem[];
}
