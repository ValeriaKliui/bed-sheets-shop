import { CatalogItem } from "@lib/constants/types";

type CartItem = Pick<CatalogItem, "id" | "title" | "photo" | "price"> &
  Partial<Pick<CatalogItem, "category">> & {
    size?: string;
  };

export interface CartItemProps extends CartItem {
  amount?: number;
}
