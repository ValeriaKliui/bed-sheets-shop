import { CatalogItem } from "@lib/constants/types";
import { ReactNode } from "react";

export interface CardProps extends CatalogItem {
  isShowcase?: boolean;
  actionButton: ReactNode;
}
