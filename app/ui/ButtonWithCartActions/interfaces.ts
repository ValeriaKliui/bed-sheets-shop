import { CatalogItem } from "@lib/constants/types";

export interface ButtonWithCartActionsProps extends Pick<CatalogItem, "id"> {
  className?: string;
  size?: string;
  isDisabled?: boolean;
}
