"use server";

import { DB_ITEMS_NAME, ITEMS_PER_PAGE } from "@lib/constants";
import { CatalogItem } from "@lib/constants/types";
import { sql } from "@vercel/postgres";

import { FetchByTitleParams } from "./interfaces";

export async function fetchItemsByTitle({
  title,
  limit = null,
  page = 1,
}: FetchByTitleParams) {
  try {
    const offset = (page - 1) * ITEMS_PER_PAGE;

    const limitIfNoTitle = !title ? 0 : limit;
    const item = await sql.query<CatalogItem>(
      `SELECT *
         FROM ${DB_ITEMS_NAME}
         WHERE title like '${title}%'
         LIMIT ${limitIfNoTitle} OFFSET ${offset}
         `
    );
    return item.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch catalog item.");
  }
}
