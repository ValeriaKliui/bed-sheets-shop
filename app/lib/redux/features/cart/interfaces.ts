import { AdditionalPropertiesChoosen, CatalogItem } from "@lib/constants/types";

export type ItemsNoSize = number;

export interface CartItemShort extends Pick<CatalogItem, "id"> {
  amount?: number;
  cartID?: number;
  additionalProperties: AdditionalPropertiesChoosen;
}

export type CartItemFull = Omit<CatalogItem, "additionalProperties"> &
  Partial<Omit<CatalogItem, "additionalProperties">> & {
    amount?: number;
    cartID?: number;
    additionalProperties: AdditionalPropertiesChoosen;
  };

export interface cartState {
  cartItems: CartItemShort[];
  cartItemsFull: CartItemFull[];
}
export interface DecreasePayload {
  itemToRemove: CartItemShort;
  isTotalDelete?: boolean;
}
