import { sql } from "@vercel/postgres";

import { DB_ITEMS_NAME, ITEMS_PER_PAGE } from "./constants";
import { Availability, CatalogItem } from "./constants/types";
import {
  FetchByIDParams,
  FilterParams,
  Prices,
  SizesArray,
} from "./interfaces";
import getAvailabilityParam from "./utils/getAvailabilityParam";
import getDefaultField from "./utils/getDefaulttField";
import getDefaultTitle from "./utils/getDefaultTitle";
import getSortCondition from "./utils/getSortCondition";
import sortSizes from "./utils/sortSizes";

export async function fetchLatestCatalogItems() {
  try {
    const data = await sql.query(`
      SELECT * FROM ${DB_ITEMS_NAME}
       WHERE info = '${Availability.available}'
      LIMIT 4`);

    return data.rows;
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
  size,
  inStock,
  sort,
}: FilterParams) {
  try {
    const offset = (page - 1) * ITEMS_PER_PAGE;

    const categoryWithDefault = getDefaultField("category", category);
    const minPriceWithDefault = getDefaultField("price", minPrice);
    const maxPriceWithDefault = getDefaultField("price", maxPrice);
    const availability = getAvailabilityParam(inStock);

    const addSizes = size ? ` AND '${size}' = ANY(sizes)` : "";
    const addSort = getSortCondition(sort);

    const data = await sql.query(
      `
      SELECT * FROM ${DB_ITEMS_NAME}
      WHERE category = ${categoryWithDefault}
      AND price between ${minPriceWithDefault} and ${maxPriceWithDefault}
      AND info = ${availability}
     ${addSizes}
     ${addSort}
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `
    );

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest filtered items.");
  }
}

export async function fetchCatalogPages({
  category,
  minPrice,
  maxPrice,
  size,
  inStock,
  title,
}: FilterParams) {
  try {
    const categoryWithDefault = getDefaultField("category", category);
    const minPriceWithDefault = getDefaultField("price", minPrice);
    const maxPriceWithDefault = getDefaultField("price", maxPrice);
    const titleWithDefault = getDefaultTitle(title);
    const availability = getAvailabilityParam(inStock);

    const addSizes = size ? ` AND '${size}' = ANY(sizes)` : "";

    const count = await sql.query(`SELECT COUNT(*)
      FROM ${DB_ITEMS_NAME}
      WHERE
       category = ${categoryWithDefault}
        AND price between ${minPriceWithDefault} and ${maxPriceWithDefault}
        AND info = ${availability}
        AND title like ${titleWithDefault}
        ${addSizes}
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
  size,
}: FilterParams) {
  try {
    const categoryWithDefault = getDefaultField("category", category);
    const availability = getAvailabilityParam(inStock);
    const addSizes = size ? ` AND '${size}' = ANY(sizes)` : "";

    const prices = await sql.query<Prices>(`SELECT MIN(price), MAX(price) 
      FROM ${DB_ITEMS_NAME}
      WHERE category = ${categoryWithDefault}
        AND info = ${availability}
        ${addSizes}
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

export async function fetchAvailableSizes({
  category,
  minPrice,
  maxPrice,
  inStock,
}: FilterParams) {
  try {
    const categoryWithDefault = getDefaultField("category", category);
    const minPriceWithDefault = getDefaultField("price", minPrice);
    const maxPriceWithDefault = getDefaultField("price", maxPrice);
    const availability = getAvailabilityParam(inStock);

    const sizes = await sql.query<SizesArray>(
      `SELECT ARRAY(SELECT DISTINCT unnest (sizes) 
       FROM ${DB_ITEMS_NAME}
       WHERE category = ${categoryWithDefault}
        AND price between ${minPriceWithDefault} and ${maxPriceWithDefault}
       AND info = ${availability}
         ORDER BY unnest)`
    );

    return sortSizes(sizes.rows[0].array);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the prices.");
  }
}

export async function fetchItemByID({ id }: FetchByIDParams) {
  try {
    const item = await sql.query<CatalogItem>(
      `SELECT *
       FROM ${DB_ITEMS_NAME}
       WHERE id = '${id}'`
    );
    return item.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch catalog item.");
  }
}
