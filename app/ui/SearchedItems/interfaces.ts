import { SearchParams } from "@lib/constants/types";

export interface SearchedItemsProps
  extends Pick<SearchParams, "search" | "page"> {
  pagesAmount: number;
}
