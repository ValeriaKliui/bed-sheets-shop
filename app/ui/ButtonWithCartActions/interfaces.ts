import { CatalogItem } from "@lib/constants/types";

export interface ButtonWithCartActionsProps
  extends Pick<CatalogItem, "id" | "additionalProperties"> {
  className?: string;
  size?: string;
  isDisabled?: boolean;
}
