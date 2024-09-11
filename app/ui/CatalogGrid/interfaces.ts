import { CatalogItem } from "@lib/constants/types";

export interface CatalogGridProps {
  columns: number;
  cards: CatalogItem[];
  isShowcase?: boolean;
  rows?: number | null;
}
