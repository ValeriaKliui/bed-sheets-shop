import { CatalogItem } from '@lib/constants/types';
import { CatalogProps } from '@ui/Catalog/interfaces';

export interface CatalogGridProps<T extends Pick<CatalogItem, 'id'>>
  extends Pick<CatalogProps<T>, 'dimensions'> {
  cardItems: JSX.Element[];
}
