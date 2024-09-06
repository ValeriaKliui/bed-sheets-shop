import { sql } from "@vercel/postgres";

import { DB_ITEMS_NAME, ITEMS_PER_PAGE } from "./constants";
import { Availability, CatalogItem } from "./constants/types";
import {
  FetchByIDParams,
  FilterParams,
  Prices,
  SizesArray,
} from "./interfaces";
import getDefaultField from "./utils/getDefaulttField";
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
}: FilterParams) {
  try {
    const offset = (page - 1) * ITEMS_PER_PAGE;

    const categoryWithDefault = getDefaultField("category", category);
    const minPriceWithDefault = getDefaultField("price", minPrice);
    const maxPriceWithDefault = getDefaultField("price", maxPrice);

    const addSizes = size ? ` AND '${size}' = ANY(sizes)` : "";

    const data = await sql.query(
      `
      SELECT * FROM ${DB_ITEMS_NAME}
      WHERE category = ${categoryWithDefault}
      AND price between ${minPriceWithDefault} and ${maxPriceWithDefault}
     ${addSizes}
      ORDER BY CASE WHEN info = '${Availability.available}' then 0 else 1 end, title desc
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
}: FilterParams) {
  try {
    const categoryWithDefault = getDefaultField("category", category);
    const minPriceWithDefault = getDefaultField("price", minPrice);
    const maxPriceWithDefault = getDefaultField("price", maxPrice);

    const count = await sql.query(`SELECT COUNT(*)
      FROM ${DB_ITEMS_NAME}
      WHERE
       category = ${categoryWithDefault}
        AND price between ${minPriceWithDefault} and ${maxPriceWithDefault}
    `);

    return Number(count.rows[0].count);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the catalog pages.");
  }
}

export async function fetchMinMaxPrices({ category }: FilterParams) {
  try {
    const categoryWithDefault = getDefaultField("category", category);

    const prices = await sql.query<Prices>(`SELECT MIN(price), MAX(price) 
      FROM ${DB_ITEMS_NAME}
      WHERE category = ${categoryWithDefault}
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
}: FilterParams) {
  try {
    const categoryWithDefault = getDefaultField("category", category);
    const minPriceWithDefault = getDefaultField("price", minPrice);
    const maxPriceWithDefault = getDefaultField("price", maxPrice);

    const sizes = await sql.query<SizesArray>(
      `SELECT ARRAY(SELECT DISTINCT unnest (sizes) 
       FROM ${DB_ITEMS_NAME}
       WHERE category = ${categoryWithDefault}
          AND price between ${minPriceWithDefault} and ${maxPriceWithDefault}
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
