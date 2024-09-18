import { CatalogItem } from "@lib/constants/types";
import { ReactNode } from "react";

export type CardProps = Omit<CatalogItem, "category"> & {
  isShowcase?: boolean;
  actionButton: ReactNode;
};

export type CardShortProps = Pick<
  CatalogItem,
  "photo" | "title" | "category" | "id"
>;
