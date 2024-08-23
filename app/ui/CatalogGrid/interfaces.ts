import { CatalogItem } from "@lib/constants/types";
import { ReactNode } from "react";

export interface CatalogGridProps {
  columns: number;
  cards: CatalogItem[];
  isShowcase?: boolean;
}
