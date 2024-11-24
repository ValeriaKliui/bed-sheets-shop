import { CatalogItem } from '@lib/constants/types';

type CartItem = Pick<
  CatalogItem,
  'id' | 'title' | 'photo' | 'price' | 'additionalProperties'
> &
  Partial<Pick<CatalogItem, 'category'>>;

export interface CartItemProps extends CartItem {
  amount?: number;
}
