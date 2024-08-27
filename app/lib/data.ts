import { sql } from "@vercel/postgres";
import { CatalogItem } from "./constants/types";
import { FilterParams } from "./interfaces";

export async function fetchLatestCatalogItems() {
  try {
    const data = await sql<CatalogItem>`
        SELECT catalog_items.id, catalog_items.title, catalog_items.price, catalog_items.info, catalog_items.article, catalog_items.photo
        FROM catalog_items
        LIMIT 4`;

    const latestCatalogItems = data.rows;
    return latestCatalogItems;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest catalog items.");
  }
}

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredCatalogItems({ currentPage }: FilterParams) {
  try {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    const data = await sql<CatalogItem>`
      SELECT
       catalog_items.id, catalog_items.title, catalog_items.price, catalog_items.info, catalog_items.article, catalog_items.photo
       FROM catalog_items
      ORDER BY catalog_items.id DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest catalog items.");
  }
}
