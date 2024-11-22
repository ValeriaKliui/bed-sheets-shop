import { CatalogItemSeeded } from "@lib/constants/types";

export default function transformAdditionalProperties(
  itemsArray: CatalogItemSeeded[]
) {
  return itemsArray.map(
    ({
      article,
      photo,
      price,
      title,
      id,
      info,
      category,
      ...additionalProperties
    }) => {
      return {
        article,
        photo,
        price,
        title,
        id,
        info,
        category,
        additionalProperties,
      };
    }
  );
}
