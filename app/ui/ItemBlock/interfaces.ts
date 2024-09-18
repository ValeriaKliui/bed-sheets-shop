import { CatalogItem } from "@lib/constants/types";

export interface CatalogItemProps
  extends Pick<
    CatalogItem,
    "title" | "article" | "price" | "id" | "category" | "sizes" | "photo"
  > {}
