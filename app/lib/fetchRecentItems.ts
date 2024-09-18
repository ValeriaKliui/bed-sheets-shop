"use server";

import { DB_ITEMS_NAME } from "@lib/constants";
import { CatalogItem } from "@lib/constants/types";
import { sql } from "@vercel/postgres";

export async function fetchRecentItems(ids: string[] | null) {
  try {
    const itemsIDsStr = ids && ids.map((id) => `'${id}'`).join(",");

    const item = await sql.query<CatalogItem>(
      `SELECT *
             FROM ${DB_ITEMS_NAME}
             WHERE ID in (${itemsIDsStr})
            `
    );
    return item.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch catalog item.");
  }
}
