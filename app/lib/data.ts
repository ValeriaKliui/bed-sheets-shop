import { sql } from "@vercel/postgres";

import { FilterParams } from "./interfaces";

const ITEMS_PER_PAGE = 6;
const DB_ITEMS_NAME = "catalog_items";

export async function fetchLatestCatalogItems() {
  try {
    const data = await sql.query(`
        SELECT * FROM ${DB_ITEMS_NAME}
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
    let categoryWithDefault = category
      ? `'${category}'`
      : `${DB_ITEMS_NAME}.category`;

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    const data = await sql.query(
      `
      SELECT * FROM ${DB_ITEMS_NAME}
      WHERE ${DB_ITEMS_NAME}.category = ${categoryWithDefault}
      ORDER BY ${DB_ITEMS_NAME}.id DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `
    );

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest filtered items.");
  }
}
