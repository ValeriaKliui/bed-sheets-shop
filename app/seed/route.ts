import { CATALOG_ITEMS } from "@lib/constants/catalogItems";
import { db } from "@vercel/postgres";

const client = await db.connect();

async function seedCatalogItems() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS catalog_items (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price NUMERIC NOT NULL,
    info VARCHAR(255) NOT NULL,
    article VARCHAR(255) NOT NULL,
    photo VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL
    );
  `;

  const insertedInvoices = await Promise.all(
    CATALOG_ITEMS.map(
      ({ id, price, title, info, article, photo, category }) => client.sql`
        INSERT INTO catalog_items (id, title, price, info, article, photo, category)
        VALUES (${id}, ${title}, ${price}, ${info}, ${article}, ${photo}, ${category})
      `
    )
  );
  return insertedInvoices;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedCatalogItems();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
