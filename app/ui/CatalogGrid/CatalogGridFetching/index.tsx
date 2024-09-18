import CatalogGrid from "..";
import { CatalogGridWithSuspenseProps } from "../CatalogGridWithSuspense/interfaces";

export default async function CatalogGridFetching({
  fetch,
  columns,
  rows,
}: CatalogGridWithSuspenseProps) {
  const cards = await fetch();

  return <CatalogGrid columns={columns} cards={cards} rows={rows} isShowcase />;
}
