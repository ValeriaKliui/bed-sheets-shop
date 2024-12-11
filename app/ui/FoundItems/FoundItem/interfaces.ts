import { CatalogItem } from "@lib/constants/types";

export interface FoundItemProps extends Pick<CatalogItem, "title" | "photo"> {
  search: string;
}
