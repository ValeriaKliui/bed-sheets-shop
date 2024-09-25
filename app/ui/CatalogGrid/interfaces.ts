import { CatalogItem } from "@lib/constants/types";

export interface CatalogGridProps {
  columns: number;
  cards: CatalogItem[];
  rows?: number | null;
}
