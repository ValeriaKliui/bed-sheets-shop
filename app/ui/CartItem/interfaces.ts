import { CatalogItem } from '@lib/constants/types';
import { ItemsWithSize } from '@lib/redux/features/cart/interfaces';

interface CartItem
  extends Pick<CatalogItem, 'id' | 'title' | 'photo' | 'price'> {
  size?: string;
}

export interface CartItemI extends CartItem {
  cartInfo: number | ItemsWithSize;
}
export interface CartItemProps extends CartItem {
  amount: number;
}
