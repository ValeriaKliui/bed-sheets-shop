import { CatalogItem } from "@lib/constants/types";

interface CartItem
  extends Pick<CatalogItem, "id" | "title" | "photo" | "price"> {
  size?: string;
}

export interface CartItemProps extends CartItem {
  amount?: number;
}
