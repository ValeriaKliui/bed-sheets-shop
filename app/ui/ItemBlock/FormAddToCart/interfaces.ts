import { CatalogItem } from "@lib/constants/types";

export interface FormAddToCartProps extends Pick<CatalogItem, "sizes" | "id"> {}

export interface FormValues {
  size: string;
}
