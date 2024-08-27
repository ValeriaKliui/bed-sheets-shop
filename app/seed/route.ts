import { CATALOG_ITEMS } from "@lib/constants/catalogItems";
import { db } from "@vercel/postgres";

const client = await db.connect();

async function seedCatalogItems() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS catalog_items (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      price INT NOT NULL,
      info VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      photo VARCHAR(255) NOT NULL
      article VARCHAR(255) NOT NULL,
    );
  `;

  const insertedCatalogItems = await Promise.all(
    CATALOG_ITEMS.map(
      (catalogItem) => client.sql`
        INSERT INTO catalog_items (id, price, info, title, photo, article)
        VALUES (${catalogItem.id}, ${catalogItem.price}, ${catalogItem.info}, ${catalogItem.title}, ${catalogItem.photo}, ${catalogItem.article})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedCatalogItems;
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
