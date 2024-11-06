import { CatalogItem } from "@lib/constants/types";
import { ItemsWithSize } from "@lib/redux/features/cart/interfaces";

export interface CartItemI
  extends Pick<CatalogItem, "id" | "title" | "photo" | "price"> {
  cartInfo: number | ItemsWithSize;
}
