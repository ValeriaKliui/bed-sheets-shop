import { sql } from "@vercel/postgres";

import { DB_ITEMS_NAME } from "./constants";
import { FilterParams, Prices } from "./interfaces";
import getDefaultField from "./utils/getDefaulttField";
import { Availability } from "./constants/types";

const ITEMS_PER_PAGE = 9;

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
  currentPage = 1,
  category,
}: FilterParams) {
  try {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const categoryWithDefault = getDefaultField("category", category);

    const data = await sql.query(
      `
      SELECT * FROM ${DB_ITEMS_NAME}
      WHERE category = ${categoryWithDefault}
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
}: Omit<FilterParams, "currentPage">) {
  try {
    const categoryWithDefault = getDefaultField("category", category);

    const count = await sql.query(`SELECT COUNT(*)
      FROM ${DB_ITEMS_NAME}
      WHERE
       category = ${categoryWithDefault}
    `);
    return Number(count.rows[0].count);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the catalog pages.");
  }
}

export async function getMinMaxPrices() {
  try {
    const prices = await sql.query<Prices>(`SELECT MIN(price), MAX(price) 
      FROM ${DB_ITEMS_NAME}
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
