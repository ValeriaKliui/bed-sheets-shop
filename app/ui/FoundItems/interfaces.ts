import { CatalogItem } from "@lib/constants/types";

export interface FoundItemsProps {
  items: CatalogItem[];
  search: string;
  makeFullSearch: () => void;
}
