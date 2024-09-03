import { sql } from "@vercel/postgres";

import { DB_ITEMS_NAME } from "./constants";
import { Availability } from "./constants/types";
import { FilterParams, Prices } from "./interfaces";
import getDefaultField from "./utils/getDefaulttField";

const ITEMS_PER_PAGE = 9;

export async function fetchLatestCatalogItems() {
  try {
    const data = await sql.query(`
        SELECT * FROM ${DB_ITEMS_NAME}
      `);

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest catalog items.");
  }
}

export async function fetchFilteredCatalogItems({
  currentPage = 1,
  category,
  minPrice,
  maxPrice,
}: FilterParams) {
  try {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const categoryWithDefault = getDefaultField("category", category);
    const minPriceWithDefault = getDefaultField("price", minPrice);
    const maxPriceWithDefault = getDefaultField("price", maxPrice);

    const data = await sql.query(
      `
      SELECT * FROM ${DB_ITEMS_NAME}
      WHERE category = ${categoryWithDefault}
      AND price between ${minPriceWithDefault} and ${maxPriceWithDefault}
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

export async function getMinMaxPrices({ category }: FilterParams) {
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

("select array(select distinct unnest (sizes )from catalog_items order by unnest)");
