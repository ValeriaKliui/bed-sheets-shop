import { DB_ITEMS_NAME } from "@lib/constants";
import { FilterParams } from "@lib/interfaces";

import getAvailabilityParam from "./getAvailabilityParam";
import getDefaultField from "./getDefaulttField";

export default function createSQLForProperties(
  properties: string[],
  { category, minPrice, maxPrice, inStock }: FilterParams
) {
  const categoryWithDefault = getDefaultField("category", category);
  const minPriceWithDefault = getDefaultField("price", minPrice);
  const maxPriceWithDefault = getDefaultField("price", maxPrice);
  const availability = getAvailabilityParam(inStock);

  let string = `SELECT `;

  properties.forEach((property) => {
    string += `ARRAY(SELECT DISTINCT unnest (${property}) 
          FROM ${DB_ITEMS_NAME} WHERE category = ${categoryWithDefault} AND price between ${minPriceWithDefault} and ${maxPriceWithDefault} AND info = ${availability} ORDER BY unnest) as ${property},`;
  });

  return string.slice(0, -1);
}
