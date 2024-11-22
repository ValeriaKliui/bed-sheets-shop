import { CatalogItem } from "@lib/constants/types";

export interface FormAddToCartProps
  extends Pick<CatalogItem, "additionalProperties" | "id"> {}

export interface FormValues {
  size: string;
}
