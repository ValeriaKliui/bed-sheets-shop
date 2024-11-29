import { AdditionalPropertiesKeys, CatalogItem } from "@lib/constants/types";

type CartItem = Pick<CatalogItem, "id" | "title" | "photo" | "price"> &
  Partial<Pick<CatalogItem, "category">> & {
    additionalProperties: { [key in AdditionalPropertiesKeys]?: string | null };
  };

export interface CartItemProps extends Omit<CartItem, "additionalProperties"> {
  additionalProperties: { [key in AdditionalPropertiesKeys]?: string | null };
  amount?: number;
}
