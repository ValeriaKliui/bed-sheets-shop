import { sql } from "@vercel/postgres";

import { DB_ITEMS_NAME, ITEMS_PER_PAGE } from "./constants";
import {
  AdditionalPropertiesKeys,
  Availability,
  CatalogItemSeeded,
} from "./constants/types";
import { FilterParams, Prices } from "./interfaces";
import addProperty from "./utils/addProperty";
import createSQLForProperties from "./utils/createSQLForProperties";
import getAvailabilityParam from "./utils/getAvailabilityParam";
import getDefaultField from "./utils/getDefaulttField";
import getDefaultTitle from "./utils/getDefaultTitle";
import getSortCondition from "./utils/getSortCondition";
import getSortedProperties from "./utils/sortSizes";
import transformAdditionalProperties from "./utils/transformProperties";

export async function fetchLatestCatalogItems() {
  try {
    const data = await sql.query(`
      SELECT * FROM ${DB_ITEMS_NAME}
       WHERE info = '${Availability.available}'
      LIMIT 4`);

    return transformAdditionalProperties(data.rows);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest catalog items.");
  }
}

export async function fetchFilteredCatalogItems({
  page = 1,
  category,
  minPrice,
  maxPrice,
  sizes,
  inStock,
  sort,
  colors,
  textiles,
  aromas,
}: FilterParams) {
  try {
    const offset = (page - 1) * ITEMS_PER_PAGE;

    const categoryWithDefault = getDefaultField("category", category);
    const minPriceWithDefault = getDefaultField("price", minPrice);
    const maxPriceWithDefault = getDefaultField("price", maxPrice);
    const availability = getAvailabilityParam(inStock);

    const addSizes = addProperty("sizes", sizes);
    const addColors = addProperty("colors", colors);
    const addTextiles = addProperty("textiles", textiles);
    const addAromas = addProperty("aromas", aromas);
    const addSort = getSortCondition(sort);

    const data = await sql.query<CatalogItemSeeded>(
      `
      SELECT * FROM ${DB_ITEMS_NAME}
      WHERE category = ${categoryWithDefault}
      AND price between ${minPriceWithDefault} and ${maxPriceWithDefault}
      AND info = ${availability}
     ${addSizes}
     ${addColors}
     ${addTextiles}
     ${addAromas}
     ${addSort}
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `
    );

    return transformAdditionalProperties(data.rows);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest filtered items.");
  }
}

export async function fetchCatalogPages({
  category,
  minPrice,
  maxPrice,
  sizes,
  inStock,
  title,
  colors,
  textiles,
  aromas,
}: FilterParams) {
  try {
    const categoryWithDefault = getDefaultField("category", category);
    const minPriceWithDefault = getDefaultField("price", minPrice);
    const maxPriceWithDefault = getDefaultField("price", maxPrice);
    const titleWithDefault = getDefaultTitle(title);
    const availability = getAvailabilityParam(inStock);

    const addSizes = addProperty("sizes", sizes);
    const addColors = addProperty("colors", colors);
    const addTextiles = addProperty("textiles", textiles);
    const addAromas = addProperty("aromas", aromas);

    const count = await sql.query(`SELECT COUNT(*)
      FROM ${DB_ITEMS_NAME}
      WHERE
       category = ${categoryWithDefault}
        AND price between ${minPriceWithDefault} and ${maxPriceWithDefault}
        AND info = ${availability}
        AND title like ${titleWithDefault}
        ${addSizes}
        ${addColors}
        ${addTextiles}
        ${addAromas}

    `);

    return Number(count.rows[0].count);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the catalog pages.");
  }
}

export async function fetchMinMaxPrices({
  category,
  inStock,
  sizes,
  colors,
  textiles,
  aromas,
}: FilterParams) {
  try {
    const categoryWithDefault = getDefaultField("category", category);
    const availability = getAvailabilityParam(inStock);
    const addSizes = addProperty("sizes", sizes);
    const addColors = addProperty("colors", colors);
    const addTextiles = addProperty("textiles", textiles);
    const addAromas = addProperty("aromas", aromas);

    const prices = await sql.query<Prices>(`SELECT MIN(price), MAX(price) 
      FROM ${DB_ITEMS_NAME}
      WHERE category = ${categoryWithDefault}
        AND info = ${availability}
       ${addSizes}
        ${addColors}
        ${addTextiles}
        ${addAromas}
 `);

    return prices.rows.map(({ min, max }) => ({
      min: Math.floor(Number(min)),
      max: Math.ceil(Number(max)),
    }))[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the prices.");
  }
}

export async function fetchAvailableProperties(
  properties: AdditionalPropertiesKeys[],
  { category, minPrice, maxPrice, inStock }: FilterParams
) {
  try {
    const propertiesString = createSQLForProperties(properties, {
      category,
      minPrice,
      maxPrice,
      inStock,
    });

    const availableProperties = await sql.query(propertiesString);

    return getSortedProperties(availableProperties.rows[0]);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch properties.");
  }
}
