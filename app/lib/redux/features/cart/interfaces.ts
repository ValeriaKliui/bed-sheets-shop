import { CatalogItem } from '@lib/constants/types';

export type ItemsNoSize = number;

export interface CartItemShort
  extends Pick<CatalogItem, 'id' | 'additionalProperties'> {
  amount?: number;
  cartID?: number;
}
export interface CartItemFull extends CatalogItem {
  amount?: number;
  cartID: number;
}

export interface cartState {
  cartItems: CartItemShort[];
  cartItemsFull: CartItemFull[];
}
export interface DecreasePayload {
  itemToRemove: CartItemShort;
  isTotalDelete?: boolean;
}
