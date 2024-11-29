import { AdditionalPropertiesChoosen, CatalogItem } from "@lib/constants/types";

export type ButtonWithCartActionsProps = Pick<CatalogItem, "id"> & {
  className?: string;
  size?: string;
  additionalProperties: AdditionalPropertiesChoosen;
  isDisabled?: boolean;
};
