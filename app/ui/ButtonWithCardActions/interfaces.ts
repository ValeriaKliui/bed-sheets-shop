import { CatalogItem } from "@lib/constants/types";

export interface ButtonWithCardActionsProps extends Pick<CatalogItem, "id"> {
  className?: string;
}
