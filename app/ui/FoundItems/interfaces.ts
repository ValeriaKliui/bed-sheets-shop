import { CatalogItem } from '@lib/constants/types';

export interface FoundItemsProps {
  items: CatalogItem[] | null;
  search: string;
  closeSearch: () => void;
}
