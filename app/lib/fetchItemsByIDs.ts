"use server";

import { sql } from "@vercel/postgres";

import { DB_ITEMS_NAME } from "./constants";
import { CatalogItem } from "./constants/types";
import { FetchByIDParams } from "./interfaces";
import transformAdditionalProperties from "./utils/transformProperties";

export async function fetchItemsByIDs({ id }: FetchByIDParams) {
  try {
    if (Array.isArray(id)) {
      const idString = id?.map((id) => `'${id}'`).join(", ");

      const item = await sql.query<CatalogItem>(
        `SELECT *
           FROM ${DB_ITEMS_NAME}
           WHERE id in (${idString})
          `
      );
      return transformAdditionalProperties(item.rows);
    } else if (typeof id === "string") {
      const item = await sql.query<CatalogItem>(
        `SELECT *
           FROM ${DB_ITEMS_NAME}
           WHERE id = '${id}'
          `
      );
      return [transformAdditionalProperties(item.rows)[0]];
    }
    return [];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch item by id.");
  }
}
