import { CatalogItem } from "@lib/constants/types";

export type ItemsWithSize = {
  [size: string]: number;
};

export type ItemsNoSize = number;

export interface CartInfo {
  [id: string]: number | ItemsWithSize;
}

export interface CartItem extends Pick<CatalogItem, "id"> {
  size?: string;
  amount?: number;
  cartID?: number;
}

export interface cartState {
  cartItems: CartItem[];
}
export interface DecreasePayload {
  itemToRemove: CartItem;
  isTotalDelete?: boolean;
}
