import { CatalogItem } from '@lib/constants/types';

export type ItemsNoSize = number;

export interface CartItemShort extends Pick<CatalogItem, 'id'> {
  size?: string;
  amount?: number;
  cartID?: number;
}
export interface CartItemFull extends CatalogItem {
  amount?: { size: string; amount: number }[] | number;
}

export interface cartState {
  cartItems: CartItemShort[];
  cartItemsFull: CartItemFull[];
}
export interface DecreasePayload {
  itemToRemove: CartItemShort;
  isTotalDelete?: boolean;
}
