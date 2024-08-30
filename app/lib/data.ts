import { sql } from "@vercel/postgres";

import { DB_ITEMS_NAME } from "./constants";
import { FilterParams } from "./interfaces";
import getDefaultField from "./utils/getDefaulttField";

const ITEMS_PER_PAGE = 9;

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
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const categoryWithDefault = getDefaultField("category", category);

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

export async function fetchCatalogPages({
  category,
}: Omit<FilterParams, "currentPage">) {
  try {
    const categoryWithDefault = getDefaultField("category", category);

    const count = await sql.query(`SELECT COUNT(*)
      FROM ${DB_ITEMS_NAME}
      WHERE
        ${DB_ITEMS_NAME}.category = ${categoryWithDefault}
    `);
    return Number(count.rows[0].count);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the catalog pages.");
  }
}
