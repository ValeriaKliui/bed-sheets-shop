"use server";

import { sql } from "@vercel/postgres";

import { DB_ITEMS_NAME } from "./constants";
import { CatalogItem } from "./constants/types";
import { FetchByIDParams } from "./interfaces";

export async function fetchItemsByIDs({ id }: FetchByIDParams) {
  try {
    if (typeof id === "string") {
      const item = await sql.query<CatalogItem>(
        `SELECT *
           FROM ${DB_ITEMS_NAME}
           WHERE id = '${id}'
          `
      );
      return [item.rows[0]];
    } else {
      const idString = id?.map((id) => `'${id}'`).join(", ");

      const item = await sql.query<CatalogItem>(
        `SELECT *
           FROM ${DB_ITEMS_NAME}
           WHERE id in (${idString})
          `
      );
      return item.rows;
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch item by id.");
  }
}
